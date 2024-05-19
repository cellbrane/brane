import terser from "@rollup/plugin-terser"
import typescript from "@rollup/plugin-typescript"
import {defineConfig} from "rollup"
import dts from "rollup-plugin-dts"

export default defineConfig([
  {
    plugins: [typescript(), terser({compress: true})],
    input: "build/index.js",
    output: [
      {file: "index.js", format: "esm"},
      {file: "index.cjs", format: "commonjs"},
    ],
  },
  {
    plugins: [dts()],
    input: "build/index.d.ts",
    output: {file: "index.d.ts", format: "esm"},
  },
])
