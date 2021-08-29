// 给你一个字符串 s，找到 s 中最长的回文子串。

function longestPalindrome(s: string): string {
  let dp = new Map()
  let max = ''

  if (s.length == 1) return s

  for (let i = 0; i < s.length; i += 0.5) {
    if ((i / 0.5) % 2 == 0) {
      if (dp.has(i) == false) dp.set(i, 1)
      let left = i - (dp.get(i) - 1) / 2,
        right = i + (dp.get(i) - 1) / 2
      while (s[right + 1] == s[left - 1] && right < s.length - 1 && left > 0) {
        dp.set(i, dp.get(i) + 2)
        ;(left -= 1), (right += 1)
      }
      max = max.length > dp.get(i) ? max : s.slice(left, right + 1)
    }
    if ((i / 0.5) % 2 == 1) {
      if (s[i + 0.5] != s[i - 0.5]) continue
      if (dp.has(i) == false) dp.set(i, 2)

      let left = i - (dp.get(i) - 1) / 2,
        right = i + (dp.get(i) - 1) / 2

      while (s[right + 1] == s[left - 1] && right < s.length - 1 && left > 0) {
        dp.set(i, dp.get(i) + 2)
        ;(left -= 1), (right += 1)
      }
      max = max.length > dp.get(i) ? max : s.slice(left, right + 1)
    }
  }
  return max
}
