export const parseEnv = () => {
  const env = process.env
  const keys = Object.keys(env)
  const values = Object.values(env)
  let count = 0

  for (let i = 0; i < keys.length; i++) {
    if (keys[i].substring(0, 4) === 'RSS_') {
      count++
      console.log(`${keys[i]}${count}=${values[i]}${count};`)
    }
  }
}

parseEnv()
