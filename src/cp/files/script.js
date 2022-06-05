const argv = process.argv.slice(2);

console.log(`Total number of arguments is ${argv.length}`);
console.log(`Arguments: ${JSON.stringify(argv)}`);

const echoInput = (chunk) => {
    const chunkStringified = chunk.toString();
    if (chunkStringified.includes('CLOSE')) process.exit(0);
    process.stdout.write(`Received from master process: ${chunk.toString().trim()}`)
};

process.stdin.on('data', echoInput);