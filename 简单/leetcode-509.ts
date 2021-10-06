function* fibonacci(seed1: number, seed2: number) {
  while (true) {
    yield (() => {
      seed2 = seed2 + seed1
      seed1 = seed2 - seed1
      return seed2
    })()
  }
}

function fib(n: number): number {
  if (n == 0) return 0
  if (n == 1) return 1
  const fibO = fibonacci(0, 1)
  let res = 0

  for (let index = 0; index < n - 1; index++) {
    res = fibO.next().value as number
  }
  return res
}

console.log(fib(1))
