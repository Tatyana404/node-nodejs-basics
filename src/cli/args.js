export const parseArgs = () => {
  const argv = process.argv.slice(2)
  const props = []

  const arrayСhunk = (arr, count) => {
    for (let i = 0; i < arr.length / count; i++) {
      props[i] = arr.slice(i * count, i * count + count)
    }
  }

  arrayСhunk(argv, 2)

  for (let i = 0; i < props.length; i++) {
    console.log(`${props[i][0].slice(2)} is ${props[i][1]},`)
  }
}

parseArgs()
