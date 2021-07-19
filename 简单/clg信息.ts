interface FormatData {
  id: number;
  pid: number;
  val: string;
}

const formatData: FormatData[] = [
  {
    id: 111,
    pid: 11,
    val: "4号",
  },
  {
    id: 1,
    pid: 0,
    val: "1号",
  },
  {
    id: 11,
    pid: 1,
    val: "2号",
  },
  {
    id: 12,
    pid: 1,
    val: "3号",
  },
  {
    id: 12345,
    pid: 12,
    val: "5号",
  },
  {
    id: 11145,
    pid: 12,
    val: "6号",
  },
  {
    id: 12245,
    pid: 111,
    val: "7号",
  },
  {
    id: 13345,
    pid: 12235,
    val: "8号",
  },
];
function clgInfo(formatData: FormatData[], targetId: number, ans: any[]): void {
  let target = formatData.filter((item) => item.pid == targetId);
  ans.push(...target);
  target.forEach((element) => {
    clgInfo(formatData, element.id, ans);
  });
}
function handlerClgInfo(formatData: FormatData[]): any[] {
  let ans: any[] = [];
  clgInfo(formatData, 0, ans);
  return ans.reverse();
}

console.log(handlerClgInfo(formatData));
