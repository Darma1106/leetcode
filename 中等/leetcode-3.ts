// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
function lengthOfLongestSubstring(s: string): number {
  let len = s.length,
    result = 0,
    set = new Set(),
    left = 0,
    right = 0

  while (left < len) {
    // 右侧右滑
    while (right < len && !set.has(s[right])) {
      set.add(s[right])
      right++
    }
    // 左侧右滑
    result = Math.max(result, right - left)
    set.delete(s[left])
    left++
  }
  return result
}
console.log(lengthOfLongestSubstring('aab'))
