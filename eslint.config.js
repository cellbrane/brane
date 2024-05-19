import eslintJS from "@eslint/js"
import prettier from "eslint-config-prettier"
import eslintTS from "typescript-eslint"

export default eslintTS.config(
  // Basic recommended JS and TS lint rules.
  eslintJS.configs.recommended,
  ...eslintTS.configs.recommended,

  // Cancel all style lints and let prettier do.
  prettier,
)
