// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
function lengthOfLongestSubstring(s: string): number {
  let len = s.length,
    res = 0,
    set = new Set(),
    left = 0,
    right = 0

  while (left < len) {
    while (right < len && !set.has(s[right])) {
      set.add(s[right])
      right++
    }
    res = Math.max(res, right - left)
    set.delete(s[left])
    left++
  }

  return res
}
console.log(lengthOfLongestSubstring(' '))
