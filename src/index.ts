export const add = (numbers: string) => {
  let regex = new RegExp("[,\n]+");
  let negativeNumberCount = 0;
  let negativeNumbers = "";
  if (numbers.startsWith("//")) {
    const newRegex = "[,\n"
      .concat(numbers.split(/\n(.*)/s)[0].slice(-1))
      .concat("]+");
    regex = new RegExp(newRegex);
    numbers = numbers.split(/\n(.*)/s)[1];
  }
  let sum = 0;
  if (numbers === "") {
    return 0;
  }
  const numbersArray = numbers.split(regex);
  if (numbersArray[1] === undefined) {
    return parseInt(numbersArray[0]);
  }
  numbersArray.forEach((number) => {
    if (parseInt(number) < 0) {
      negativeNumberCount += 1;
      negativeNumbers = negativeNumbers.concat(number).concat(",");
    }
    sum = sum + parseInt(number);
  });
  if (negativeNumberCount !== 0) {
    throw new Error("negatives not allowed ".concat(negativeNumbers));
  }
  return sum;
};
//console.log(add("//;\n12;12\n13;-12;14\n-12"));
