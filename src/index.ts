export const add = (numbers: string) => {
  if (numbers === "") {
    return 0;
  }
  const [firstNumber, secondNumber] = numbers.split(",");
  if (secondNumber === undefined) {
    return parseInt(firstNumber);
  }
  return parseInt(firstNumber) + parseInt(secondNumber);
};
console.log(add("12,12"));
