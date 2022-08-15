export const parseEnv = () => {
  const env = process.env
  const keys = Object.keys(env)
  const values = Object.values(env)
  const variables = []

  for (let i = 0; i < keys.length; i++) {
    if (keys[i].startsWith('RSS_')) {
      variables.push(`${keys[i]}=${values[i]}`)
    }
  }

  console.log(variables.join('; '))
}

parseEnv()
