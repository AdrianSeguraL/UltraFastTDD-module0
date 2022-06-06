export default class FizzBuzz {
  generate = (start, end) => {
    let resultArr = [];
    for (let i = start; i <= end; i++) {
      if (i % 5 === 0 && i % 3 === 0) {
        resultArr.push("FizzBuzz");
      } else if (i % 5 === 0) {
        resultArr.push("Buzz");
      } else if (i % 3 === 0) {
        resultArr.push("Fizz");
      } else {
        resultArr.push(i);
      }
    }
    return resultArr;
  };
}
