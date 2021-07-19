function colorToBytes(color: string, alpha: number = 255): number[] {
  let bytesColor: number[] = [];
  for (let index = 0; index < 3; index++) {
    bytesColor.push(parseInt(color.substr(1 + 2 * index, 2), 16));
  }
  bytesColor.push(alpha);
  return bytesColor;
}

function rgbaToBytes(color: string): number[] {
  let bytesColor: number[] = [];
  let colorItem = color.substr(5, color.length - 6).split(",");
  for (let index = 0; index < 4; index++) {
    let element = Number(colorItem[index]);
    if (index == 3) {
      element *= 255;
    }
    bytesColor.push(element);
  }
  return bytesColor;
}

console.log(rgbaToBytes("rgba(230, 33, 31, 0.63)"));
