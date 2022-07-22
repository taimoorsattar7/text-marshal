import { setCharAt, letterCount, isCharExist } from "../helper";

test("letterCount", () => {
  expect(letterCount("xxx.xxx.xx", "x")).toBe(8);
});

test("isCharExist", () => {
  return expect(isCharExist("a", ["a"])).toBe(true);
});

test("setCharAt", () => {
  return expect(setCharAt("hello", 4, "a")).toBe("hella");
});
