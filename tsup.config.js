import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/IranLicensePlate"],
  splitting: false,
  sourcemap: true,
  clean: true,
  shims: true,
  dts: true,
  format: ["cjs", "esm"],
  loader: {
    ".png": "file",
    ".css": "css",
  },
});
