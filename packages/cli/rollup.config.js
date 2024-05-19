import terser from "@rollup/plugin-terser"
import typescript from "@rollup/plugin-typescript"
import {defineConfig} from "rollup"

export default defineConfig({
  plugins: [typescript(), terser({compress: true})],
  input: "main.ts",
  output: [
    {file: "main.js", format: "esm"},
    {file: "main.cjs", format: "commonjs"},
  ],
})
