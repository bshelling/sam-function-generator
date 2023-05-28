import { build } from "esbuild";

build({
  target: "es2020",
  format: "cjs",
  platform: "node",
  minify: true,
  entryPoints: ["src/index.ts"],
  bundle: true,
  outdir: "dist",
  assetNames: '[name]',
  outExtension: {'.js':'.cjs'}
}).then(() => {
  console.log("Done");
});
