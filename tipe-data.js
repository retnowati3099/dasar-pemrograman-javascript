// undefined
let middleName;
console.log(typeof middleName); // output: undefined

//  numbers
let afriskaAge = 26;
console.log(typeof afriskaAge);
const PI = 3.14;
console.log(typeof PI);

// bigInt
let bigNumber = 123456789n;
let myInt = 123456789;
console.log(typeof bigNumber); // output: bigint
console.log(typeof myInt); //output: number

// string
let greet = "Hello";
console.log(typeof greet); // output: string
const questions = '"What do you think of JavaScript?" I asked';
console.log(questions);
const answer = '"I think it\'s awesome!" he answerd confidently'; // escape string
console.log(answer);
let firstName = "Afriska Yusuf";
let lastName = " Widyamto";
let fullName = firstName + lastName; // string contatenation
console.log(fullName);
console.log(`Your name is ${fullName}`); // string interpolation

/*
- Tipe data adalah pengklasifikasian data berdasarkan jenisnya.
- Fungsi typeof() digunakan untuk memastikan tipe data pada variabel dengan mengembalikan tipe data tersebut dalam bentuk teks.
- Tipe data undefined: terbentuk ketika sebuah variabel tidak memiliki nilai. Artinya ketika jika suatu variabel dideklarasikan tanpa diinisialisasi, maka variabel tersebut menjadi undefined.
- Tipe data number: nilainya adalah angka. Jika angka berupa bilangan desimal, maka bisa menggunakan titik pada pecahan bilangannya.
- Untuk membedakan BigInt dan Number, tambahkan karakter n di akhir angka.
- Meskipun bigint digunakan untuk menyimpan angka dengan nilai besar, namun bigint tetap bisa digunakan untuk nilai yang lebih kecil.
- BigInt juga bisa digunakan untuk operasi aritmatika pada umumnya, yang membedakan adalah pada operasi pembagian hasilnya akan dibulatkan ke bawah dan tanpa mengandung nilai desimal.
- String merupakan sebuah teks.
- Untuk menetapkan nilai sebagai string pada variabel digunakan tanda petik satu atau petik dua di antara teks.
- Backslash sebelum tanda petik akan memberitahu interpreter bahwa itu hanyalah tanda petik dan tidak boleh ditafsirkan sebagai pembatas sting.
- Operator plus (+)berfungsi untuk menggabungkan dua teks yang terpisah menjadi satu buah teks.
- String contatenation akan menggabungkan string apa adanya, sehingga jika ingin menggabungkan dua kata atau lebih perlu menambahkan spasi sendiri.
- JavaScript mendukung string interpolation, sederhananya yaitu kita bisa memasukkan variabel ke dalam sebuah string template.
- Untuk mendefinisikan string template perlu menggunakan backticks kemudian di dalam string letakkan variabel yang ingin dimasukkan ke dalam placeholder.
*/
