// vite.config.ts
import { defineConfig } from "file:///home/rafael/Documents/projects/opineeo-widget/node_modules/vite/dist/node/index.js";
import react from "file:///home/rafael/Documents/projects/opineeo-widget/node_modules/@vitejs/plugin-react/dist/index.js";
import { resolve } from "path";
import dts from "file:///home/rafael/Documents/projects/opineeo-widget/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/home/rafael/Documents/projects/opineeo-widget";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["src"]
    })
  ],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "OpineeoWidget",
      formats: ["es", "umd"],
      fileName: (format) => `opineeo-widget.${format === "es" ? "js" : "umd.cjs"}`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9yYWZhZWwvRG9jdW1lbnRzL3Byb2plY3RzL29waW5lZW8td2lkZ2V0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9yYWZhZWwvRG9jdW1lbnRzL3Byb2plY3RzL29waW5lZW8td2lkZ2V0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3JhZmFlbC9Eb2N1bWVudHMvcHJvamVjdHMvb3BpbmVlby13aWRnZXQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgcmVhY3QoKSxcbiAgICAgICAgZHRzKHtcbiAgICAgICAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXG4gICAgICAgICAgICBpbmNsdWRlOiBbJ3NyYyddLFxuICAgICAgICB9KSxcbiAgICBdLFxuICAgIGJ1aWxkOiB7XG4gICAgICAgIGxpYjoge1xuICAgICAgICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2luZGV4LnRzJyksXG4gICAgICAgICAgICBuYW1lOiAnT3BpbmVlb1dpZGdldCcsXG4gICAgICAgICAgICBmb3JtYXRzOiBbJ2VzJywgJ3VtZCddLFxuICAgICAgICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBvcGluZWVvLXdpZGdldC4ke2Zvcm1hdCA9PT0gJ2VzJyA/ICdqcycgOiAndW1kLmNqcyd9YCxcbiAgICAgICAgfSxcbiAgICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICAgICAgZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sXG4gICAgICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWN0OiAnUmVhY3QnLFxuICAgICAgICAgICAgICAgICAgICAncmVhY3QtZG9tJzogJ1JlYWN0RE9NJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG5cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFQsU0FBUyxvQkFBb0I7QUFDelYsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZTtBQUN4QixPQUFPLFNBQVM7QUFIaEIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sSUFBSTtBQUFBLE1BQ0Esa0JBQWtCO0FBQUEsTUFDbEIsU0FBUyxDQUFDLEtBQUs7QUFBQSxJQUNuQixDQUFDO0FBQUEsRUFDTDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0gsS0FBSztBQUFBLE1BQ0QsT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUN4QyxNQUFNO0FBQUEsTUFDTixTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsTUFDckIsVUFBVSxDQUFDLFdBQVcsa0JBQWtCLFdBQVcsT0FBTyxPQUFPLFNBQVM7QUFBQSxJQUM5RTtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ1gsVUFBVSxDQUFDLFNBQVMsV0FBVztBQUFBLE1BQy9CLFFBQVE7QUFBQSxRQUNKLFNBQVM7QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxRQUNqQjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
