import { add } from "./index";

test("pass empty string should return 0", () => {
  expect(add("")).toBe(0);
});
test("passing a string without comma should return the number", () => {
  expect(add("1")).toBe(1);
});
test("adds 1 + 2 to equal 3", () => {
  expect(add("1,2")).toBe(3);
});
test("check if more than 2 numbers are also supported", () => {
  expect(add("1,2,3,4,5,6,7,8,9")).toBe(45);
});
test("check \n and , are also supported", () => {
  expect(add("1,2\n3,4\n5,6\n7,8\n9")).toBe(45);
});
