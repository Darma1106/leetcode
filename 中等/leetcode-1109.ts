// 这里有 n 个航班，它们分别从 1 到 n 进行编号。

// 有一份航班预订表 bookings ，表中第 i 条预订记录 bookings[i] = [firsti, lasti, seatsi] 意味着在从 firsti 到 lasti （包含 firsti 和 lasti ）的 每个航班 上预订了 seatsi 个座位。

// 请你返回一个长度为 n 的数组 answer，其中 answer[i] 是航班 i 上预订的座位总数

// 输入：bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
// 输出：[10,55,45,25,25]
// 解释：
// 航班编号        1   2   3   4   5
// 预订记录 1 ：   10  10
// 预订记录 2 ：       20  20
// 预订记录 3 ：       25  25  25  25
// 总座位数：      10  55  45  25  25
// 因此，answer = [10,55,45,25,25]

// 暴力
// function corpFlightBookings(bookings: number[][], n: number): number[] {
//   const res = new Array(n).fill(0)
//   bookings.forEach(([firsti, lasteri, searsi], index) => {
//     console.log(firsti, lasteri, searsi, index)
//     for (let i = firsti - 1; i < lasteri; i++) {
//       res[i] += searsi
//     }
//   })
//   return res
// }

function corpFlightBookings(bookings: number[][], n: number): number[] {
  let diff = new Array(n + 1).fill(0)
  for (let [firsti, lasteri, index] of bookings) {
    diff[firsti - 1] += index
    diff[lasteri] -= index
  }

  let res = []
  let cur = 0
  for (let i of diff) {
    cur += i
    res.push(cur)
  }

  return res.slice(0, n)
}

console.log(
  corpFlightBookings(
    [
      [2, 2, 30],
      [2, 2, 45]
    ],
    2
  )
)
