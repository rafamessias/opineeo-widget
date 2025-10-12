#!/usr/bin/env node

import fs from 'fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, basename } from 'node:path';
import { minify } from 'terser';

const INPUT_FILE = join(dirname(fileURLToPath(import.meta.url)), '../survey-render/opineeo-0.0.1.js');
const OUTPUT_FILE = join(dirname(fileURLToPath(import.meta.url)), '../src/components/opineeo-0.0.1.min.js');

async function minifyWidget() {
    try {
        console.log('📦 Starting survey widget minification...');

        // Check if input file exists
        if (!fs.existsSync(INPUT_FILE)) {
            throw new Error(`Input file not found: ${INPUT_FILE}`);
        }

        // Read the source file
        console.log(`📖 Reading source file: ${INPUT_FILE}`);
        const sourceCode = fs.readFileSync(INPUT_FILE, 'utf8');

        // Minify the code
        console.log('🔧 Minifying JavaScript...');
        const result = await minify(sourceCode, {
            compress: {
                drop_console: false, // Keep console.log for debugging
                drop_debugger: true,
                pure_funcs: ['console.log'], // Remove console.log in production
                passes: 2
            },
            mangle: {
                toplevel: false, // Don't mangle global variables
                reserved: ['SurveyWidget', 'initSurveyWidget'] // Keep these function names
            },
            format: {
                comments: false, // Remove comments
                beautify: false
            }
        });

        if (result.error) {
            throw result.error;
        }

        // Ensure public directory exists
        const publicDir = dirname(OUTPUT_FILE);
        if (!fs.existsSync(publicDir)) {
            fs.mkdirSync(publicDir, { recursive: true });
        }

        // Write minified code to public directory
        console.log(`💾 Writing minified file: ${OUTPUT_FILE}`);
        fs.writeFileSync(OUTPUT_FILE, result.code);

        // Get file sizes for comparison
        const originalSize = fs.statSync(INPUT_FILE).size;
        const minifiedSize = fs.statSync(OUTPUT_FILE).size;
        const compressionRatio = ((originalSize - minifiedSize) / originalSize * 100).toFixed(1);

        console.log('✅ Minification completed successfully!');
        console.log(`📊 Original size: ${(originalSize / 1024).toFixed(2)} KB`);
        console.log(`📊 Minified size: ${(minifiedSize / 1024).toFixed(2)} KB`);
        console.log(`📊 Compression: ${compressionRatio}%`);

    } catch (error) {
        console.error('❌ Minification failed:', error.message);
        process.exit(1);
    }
}

// Run the minification
minifyWidget();
