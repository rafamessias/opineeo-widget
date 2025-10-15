/// <reference types="vite/client" />

// Declare raw import support for Vite
declare module '*?raw' {
    const content: string;
    export default content;
}

declare module '*.min.js' {
    const content: any;
    export default content;
}

