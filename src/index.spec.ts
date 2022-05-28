import { add } from "./index";

test("pass empty string should return 0", () => {
  expect(add("")).toBe(0);
});
test("passing a string without comma should return the number", () => {
  expect(add("1")).toBe(1);
});
test("adds 1 + 2 to equal 3", () => {
  expect(add("1, 2")).toBe(3);
});
