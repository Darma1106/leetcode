// 给定平面上 n 对 互不相同 的点 points ，其中 points[i] = [xi, yi] 。回旋镖 是由点 (i, j, k) 表示的元组 ，其中 i 和 j 之间的距离和 i 和 k 之间的距离相等（需要考虑元组的顺序）。

// 返回平面上所有回旋镖的数量。

function numberOfBoomerangs(points: number[][]): number {
  let mapArr = points.map(() => new Map())
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      let dd = getDistance(points[i], points[j])
      mapArr[i].set(dd, mapArr[i].get(dd) ? mapArr[i].get(dd) + 1 : 1)
      mapArr[j].set(dd, mapArr[j].get(dd) ? mapArr[j].get(dd) + 1 : 1)
    }
  }

  let res = 0
  for (let curMap of mapArr) {
    for (let [d, num] of curMap) {
      if (num >= 2) {
        res += num * (num - 1)
      }
    }
  }

  return res
}

function getDistance(p1: number[], p2: number[]) {
  const [x1, y1] = p1
  const [x2, y2] = p2
  return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)
}
