function main() {
  let count = 0

  for (let i = 0; i <= 100; i++) {
    process.stdout.write(i + " ")
    count++;

    if (count === 10) {
      console.log('')
      count = 0
    }
  }
}

main();