let rad: number = 80;
function radShift(rad: number): string {
  if (rad >= 360) {
    rad -= 360;
  }
  if (rad < 0) {
    rad += 360;
  }
  let ans: string = "";
  switch (Math.floor(rad / 90)) {
    case 0:
      ans = rad < 45 ? `北偏东${rad}度` : `东偏北${90 - rad}度`;
      if (90 - rad == 0) {
        ans = "正东";
      }
      if (rad == 0) {
        ans = "正北";
      }
      break;

    case 1:
      ans =
        rad - 90 < 45 ? `东偏南${rad - 90}度` : `南偏东${90 - (rad - 90)}度`;
      if (90 - (rad - 90) == 0) {
        ans = "正南";
      }
      break;

    case 2:
      ans =
        rad - 180 < 45 ? `南偏西${rad - 180}度` : `西偏南${90 - (rad - 180)}度`;
      if (180 - (rad - 90) == 0) {
        ans = "正西";
      }
      break;

    case 3:
      ans =
        rad - 270 < 45 ? `西偏北${rad - 270}度` : `北偏西${90 - (rad - 270)}度`;

      break;

    default:
      break;
  }

  return ans;
}

console.log(radShift(rad));
