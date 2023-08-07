import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/IranLicensePlate"],

  splitting: false,
  sourcemap: true,
  clean: true,
  legacyOutput: true,
  // onSuccess: "tsc --emitDeclarationOnly --declaration",
  loader: {
    ".jpg": "base64",
    ".css": "css",
  },
});
