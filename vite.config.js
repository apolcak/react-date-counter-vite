import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

console.log("VITE_BASE_PATH:", process.env.VITE_BASE_PATH); // Debugging line

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: process.env.VITE_BASE_PATH || "/",
});
