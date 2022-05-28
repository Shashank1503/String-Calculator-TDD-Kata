export const add = (numbers: string) => {
  // default regex expresssion
  let regex = new RegExp("[,\n]+");
  let sum = 0;
  let negativeNumberCount = 0;
  let negativeNumbers = "";
  //check if a new delimiter is there in the string
  if (numbers.startsWith("//")) {
    // if new delimiter is present add in the regex expression
    const newRegex = "[,\n"
      .concat(numbers.split(/\n(.*)/s)[0].slice(-1))
      .concat("]+");
    // generate new regex exp if new delimiter is present
    regex = new RegExp(newRegex);
    // split the actual number string that needs to be added
    numbers = numbers.split(/\n(.*)/s)[1];
  }
  // if the numbers string is empty
  if (numbers === "") {
    return 0;
  }
  // to get all the numbers in array of strings
  const numbersArray = numbers.split(regex);
  // check if only one number is present
  if (numbersArray[1] === undefined) {
    return parseInt(numbersArray[0]);
  }
  // traverse through all the numbers and add it to sum
  numbersArray.forEach((number) => {
    //checking if any number is a negative number and creating a -ve numbers string
    if (parseInt(number) < 0) {
      negativeNumberCount += 1;
      negativeNumbers = negativeNumbers.concat(number).concat(",");
    }
    sum = sum + parseInt(number);
  });
  // if there was any negative numbers present throw an error
  if (negativeNumberCount !== 0) {
    throw new Error("negatives not allowed ".concat(negativeNumbers));
  }
  // return the actual sum
  return sum;
};
console.log(add("//;\n12;12\n13;12;14\n12"));
