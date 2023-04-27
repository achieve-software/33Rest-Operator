//*  REST (...)

//! "Rest operatörü", JavaScript'te bir operatördür ve bir method ya da fonksiyon değildir. Rest operatörü, üç noktalı işaret (ellipses) ile temsil edilen bir sözdizimi kullanarak, fonksiyon parametre listesinde kullanılarak, fonksiyona geçirilen argümanları bir dizi olarak toplar.

//! JavaScript'te rest operatörü, bir fonksiyonun parametre listesinde kullanılarak, fonksiyonun esnek ve değişken sayıda argümanları kabul etmesini sağlar.

//1-REST, Bir dizi veya object'deki bazi degerlerden geri kalanlarini ayri dizi yada objelere kopyalanmasini saglayabilir.
//* REST: (Arrays)
const autos = ["anadol", "reno", "bmw", "mercedes", "ferrari"];

const [x, y, ...z] = autos; // Destrc.
console.log(x, y, z);

//* REST: (object)
const personel = {
  pName: "john",
  surname: "smith",
  job: "developer",
  age: 30,
};

const { age, ...fullName } = personel;

console.log(age);
console.log(fullName);

const { pName: name } = fullName;
console.log(name);

// 2-REST, Bir fonksiyonun argumanlarini diziye cevirmek icin kullanilabilir.
//Örnek
const sumAll = (...numbers) => {
  //! bireysel degerleri bir array'e cevirdi.
  //? non-iterable -> iterable
  console.log(numbers); //? (4) [2, 4, 6, 8]
  return numbers.reduce((s, v) => s + v, 0);
};

console.log("SUM:", sumAll(2, 4, 6, 8));

//Örnek
const showName = (name, surname, ...titles) => {
  console.log(titles);
  const summary = `${name} ${surname} is a ${titles.join(" and ")}`;
  console.log(summary);
};

showName("Noah", "Adams", "Developer", "Instr", "Professor", "Dad");
