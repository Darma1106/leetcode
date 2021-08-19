function reverseVowels(s: string): string {
  const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']),
    len = s.length,
    arr = [...s]
  if (len < 2) return s
  let i = -1,
    j = len
  while (++i < --j) {
    while (!set.has(s[i])) {
      if (++i >= j) return arr.join('')
    }
    while (!set.has(s[j])) {
      if (i >= --j) return arr.join('')
    }
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr.join('')
}
