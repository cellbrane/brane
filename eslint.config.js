import eslintJS from "@eslint/js"
import eslintTS from "typescript-eslint"

// eslint rules: https://eslint.org/docs/latest/rules/
// typescript eslint rules: https://typescript-eslint.io/rules/
export default eslintTS.config(
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
