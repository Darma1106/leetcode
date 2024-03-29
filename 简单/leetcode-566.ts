// 在 MATLAB 中，有一个非常有用的函数 reshape ，它可以将一个 m x n 矩阵重塑为另一个大小不同（r x c）的新矩阵，但保留其原始数据。

// 给你一个由二维数组 mat 表示的 m x n 矩阵，以及两个正整数 r 和 c ，分别表示想要的重构的矩阵的行数和列数。

// 重构后的矩阵需要将原始矩阵的所有元素以相同的 行遍历顺序 填充。

// 如果具有给定参数的 reshape 操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。

function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  let m = mat.length
  let n = mat[0].length
  if (m * n !== r * c) {
    return mat
  }

  let res = []
  for (let i = 0; i < r; i++) {
    let line = []
    for (let j = 0; j < c; j++) {
      let curIndex = i * c + j
      let fromI = Math.floor(curIndex / n)
      let fromJ = curIndex % n
      line[j] = mat[fromI][fromJ]
    }
    res.push(line)
  }

  return res
}

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4]
    ],
    1,
    4
  )
)
