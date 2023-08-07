import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/IranLicensePlate"],
  splitting: false,
  sourcemap: true,
  clean: true,
  shims: true,
  dts: true,
  outDir: "dist/IranLicensePlate",
  format: ["cjs", "esm"],
  loader: {
    ".png": "base64",
    ".css": "css",
  },
});
