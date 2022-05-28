export const add = (numbers: string) => {
  let sum = 0;
  if (numbers === "") {
    return 0;
  }
  const numbersArray = numbers.split(/[,\n]+/);
  if (numbersArray[1] === undefined) {
    return parseInt(numbersArray[0]);
  }
  numbersArray.forEach((number) => {
    sum = sum + parseInt(number);
  });
  return sum;
};
console.log(add("12,12\n13\n12,14\n12"));
