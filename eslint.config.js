import eslintJS from "@eslint/js"
import eslintTS from "typescript-eslint"

// eslint rules: https://eslint.org/docs/latest/rules/
// typescript eslint rules: https://typescript-eslint.io/rules/
const configs = eslintTS.config(
  eslintJS.configs.recommended,
  ...eslintTS.configs.recommended,
  ...eslintTS.configs.strict,
  ...eslintTS.configs.stylistic,
  {
    rules: {
      eqeqeq: 2,
      "no-console": 2,
      "no-lonely-if": 2,
    },
  },
)

// eslint ignores: https://eslint.org/docs/latest/use/configure/ignore
export default configs.map(function (config) {
  config.ignores = [
    "packages/**/*.js",
    "packages/**/*.cjs",
    "packages/**/*.mjs",
    "!packages/**/rollup.config.js",
  ]
  return config
})
