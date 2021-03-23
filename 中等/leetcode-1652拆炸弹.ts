/**
 *
 * @description 你有一个炸弹需要拆除，时间紧迫！你的情报员会给你一个长度为 n 的 循环数组 code 以及一个密钥 k 。
 *
 *为了获得正确的密码，你需要替换掉每一个数字。所有数字会 同时 被替换。
 *
 *如果 k > 0 ，将第 i 个数字用 接下来 k 个数字之和替换。
 *如果 k < 0 ，将第 i 个数字用 之前 k 个数字之和替换。
 *如果 k == 0 ，将第 i 个数字用 0 替换。
 *由于 code 是循环的， code[n-1] 下一个元素是 code[0] ，且 code[0] 前一个元素是 code *n-1] 。
 *
 *给你 循环 数组 code 和整数密钥 k ，请你返回解密后的结果来拆除炸弹！
 * @param code number[] 密码
 * @param k number 秘钥
 */

function decrypt(code: number[], k: number): number[] {
  if (k == 0) {
    return code.fill(0)
  }
  k < 0 ? code.reverse() : code
  let code2: number[] = []
  for (let i = 0; i < code.length; i++) {
    let empty = 0
    for (let j = 0, h = i + 1; j < Math.abs(k); j++, h++) {
      h = h % code.length
      empty += code[h]
    }
    code2[i] = empty
  }
  return k > 0 ? code2 : code2.reverse()
}
