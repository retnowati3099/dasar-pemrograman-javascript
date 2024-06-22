// assignment operator
let num1 = 10;
let num2 = num1; // num2 = 10
let num3 = 5;
num3 += num2; // num3 = num3 + num2, num3 = 15
num3 -= num2; // num3 = num3 - num2, num3 = 5
num3 *= num2; // num3 = num3 * num2, num3 = 50
num3 /= num2; // num3 = num3 / num2, num3 = 5
num3 %= num2; // num3 = num3 % num2, num3 = 5
console.log(num1, num2); // output: 10 10
console.log(num3);

// comparison operator
let num4 = 1;
let num5 = 2;
console.log(num4 < num5); // output: true
console.log(num4 > num5); // output: false
console.log(num4 <= num5); // output: true
console.log(num4 >= num5); // output: false
num4 = "1";
num5 = 1;
console.log(num4 == num5); // output: true
console.log(num4 === num5); // output: false
num4 = "2";
num5 = 3;
console.log(num4 != num5); // output: true
console.log(num4 !== num5); // output: true


// logical operator
console.log(true && false); // && -> opearator and; output: false
console.log(true || false); // || -> opeartor or;  aoutput: true
console.log(!true); // ! -> opearator not; output: false

/*
- Operator dalam bahasa pemrograman adalah simbol yang memberi tahu interpreter untuk melakukan operasi seperti matematika, relasional, atau logika untuk memberikan hasil tertentu.
- "sama" (==) dan "identik" (===). Jika inginmembandingkan hanya dari kesamanaan nilai, maka bisa menggunakan == tetapi jika ingin membandingkan dengan memerhatikan tipe datanya, maka menggunakan ===.
*/
