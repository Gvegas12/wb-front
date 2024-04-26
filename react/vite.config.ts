import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const URL = "http://localhost:3000";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __TODO_API_URL__: JSON.stringify(`${URL}/todos`),
  },
});
