// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

// 在「杨辉三角」中，每个数是它左上方和右上方的数的和

function generate(numRows: number): number[][] {
  const ans = new Array()
  ans.push([1])
  if (numRows === 1) return ans
  ans.push([1, 1])
  if (numRows === 2) return ans
  for (let i = 3; i <= numRows; i++) {
    const last = ans[ans.length - 1]
    const curr = new Array(last.length + 1).fill(1)
    for (let j = 1; j < last.length; j++) {
      curr[j] = last[j - 1] + last[j]
    }
    ans.push(curr)
  }
  return ans
}
