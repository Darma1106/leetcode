// 第 i 个人的体重为 people[i]，每艘船可以承载的最大重量为 limit。

// 每艘船最多可同时载两人，但条件是这些人的重量之和最多为 limit。

// 返回载到每一个人所需的最小船数。(保证每个人都能被船载)。

function numRescueBoats(people: number[], limit: number): number {
  people.sort((a, b) => a - b)
  var i = 0
  var j = people.length - 1
  var res = 0
  while (i <= j) {
    if (i == j) {
      res++
      break
    }
    if (people[i] + people[j] <= limit) {
      res++
      i++
      j--
    } else {
      res++
      j--
    }
  }
  return res
}
