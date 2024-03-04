function isEven(number) {
    return number % 2 === 0;
  }
  
  // Example of usage:
  const testNumber = 7;
  if (isEven(testNumber)) {
    console.log(`${testNumber} is an even number.`);
  } else {
    console.log(`${testNumber} is an odd number.`);
  }
  