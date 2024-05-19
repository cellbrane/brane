import configs from "./eslint.config.js"

// Turn all errors into warns to distinguish from language level errors.
export default configs.map(function (config) {
  // Raw rules are freezed.
  const rules = (config.rules = {...config.rules})
  for (const rule of Object.keys(rules)) {
    if ([2, "error"].indexOf(rules[rule]) !== -1) rules[rule] = "warn"
  }
  return config
})
