// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [
//     react({
//       jsxRuntime: "automatic",
//     }),
//   ],

//   server: {
//     host: true,
//     port: 3000,

//     // ✅ Allow ngrok domains
//     allowedHosts: [".ngrok-free.dev", ".ngrok.io"],
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
  ],

  server: {
    host: true,
    port: 3000,
    allowedHosts: [".ngrok-free.dev", ".ngrok.io"],
  },

  // ✅ Production optimizations
  esbuild: {
    drop: ["console", "debugger"], // removes logs in production
  },

  build: {
    target: "esnext",
    minify: "esbuild",
  },
});
