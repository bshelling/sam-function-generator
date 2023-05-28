import { build } from "esbuild";

build({
  target: "es2020",
  format: "cjs",
  platform: "node",
  minify: true,
  entryPoints: ["src/index.ts"],
  bundle: true,
  outdir: "dist/fn",
  loader: { ".ts": "ts" },
}).then(() => {
  console.log("Done");
});
