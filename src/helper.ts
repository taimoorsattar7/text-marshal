export function setCharAt(str: string, index: number, chr: any) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

export function letterCount(str: string, letter: string) {
  if (!str) return 0;
  return str.split("").reduce((acc, ch) => (ch === letter ? acc + 1 : acc), 0);
}

export function isCharExist(str: string, subStrArr: string[]) {
  if (!str) return 0;

  let y = 0;
  let bool = false;

  while (y < subStrArr.length) {
    if (typeof subStrArr[y] == "number" || typeof subStrArr[y] == "string") {
      if (str.includes(subStrArr[y])) {
        bool = true;
        break;
      }
    } else {
      const regex: any = subStrArr[y];
      if (regex.test(str)) {
        bool = true;
      }
    }
    y++;
  }

  return bool ? true : false;
}
