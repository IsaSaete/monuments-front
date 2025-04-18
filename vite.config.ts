import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    reporters: ["verbose"],
    environment: "happy-dom",
    globals: true,
  },
  build: {
    target: "ESNext",
  },
});
