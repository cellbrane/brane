import configs from "./eslint.config.js"

// Turn all errors into warns to distinguish from language level errors.
const handler = []
for (const config of configs) {
  const configHandler = {}
  for (const key of Object.keys(config)) {
    if (key !== "rules") {
      configHandler[key] = config[key]
      continue
    }
    const rules = {}
    for (const rule of Object.keys(config.rules)) {
      rules[rule] =
        [2, "error"].indexOf(config.rules[rule]) === -1
          ? config.rules[rule]
          : "warn"
    }
    configHandler["rules"] = rules
  }
  handler.push(configHandler)
}

export default handler
