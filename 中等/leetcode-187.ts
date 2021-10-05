// 所有 DNA 都由一系列缩写为 'A'，'C'，'G' 和 'T' 的核苷酸组成，例如："ACGAATTCCG"。在研究 DNA 时，识别 DNA 中的重复序列有时会对研究非常有帮助。

// 编写一个函数来找出所有目标子串，目标子串的长度为 10，且在 DNA 字符串 s 中出现次数超过一次。

function findRepeatedDnaSequences(s: string): string[] {
  const res = new Set<string>(),
    set = new Set<string>()
  // 以左边界循环
  for (let left = 0; left < s.length - 9; left++) {
    const str = s.substr(left, 10)
    if (set.has(str)) {
      // 如果有已存在的，则将目标串加入到结果集合中
      res.add(str)
    }
    set.add(str)
  }

  return Array.from(res)
}

console.log(findRepeatedDnaSequences('AAAAAAAAAAA'))
