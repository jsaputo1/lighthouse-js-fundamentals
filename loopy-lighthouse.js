let num = 100;
while (num <= 200) {
  if (num % 3 === 0 && num % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (num % 3 === 0) {
    console.log("Loopy");
  } else if (num % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(num);
  }
  num = num + 1;
}

// if (repeat === 5) {
//   console.log("*change key*");
// }
// console.log(chorus);

// node loopy-lighthouse.js