// Array yapısına göre öge eklemek ve array içerisinden istenilen ögenin çıkarılması

let items = [10, 20, 30, 40, ]
console.log("items - ilk hali : ", items)

// Array sona öge/eleman eklemek -> push

items.push(50)
console.log("50 : ", items)

// Array: başa öge eklemek -> unshift

items.unshift(5)
console.log("5 : ", items)

// Array: sondaki ögeyi çıkartmak -> pop

let lastItem = items.pop() // son elemanı lastItem içerisine ekledik
console.log("lastItem: ", lastItem, items)

// Array: baştaki ögeyi çıkartmak -> shift

let firstItem = items.shift()
console.log("firstItem: ", firstItem, items)

// Array içindeki bir ögenin bilgisini nasıl değiştirebiliriz

// ilk ögenin değiştirilmesi
items[0] = 5;
console.log(items)

// sonuncu ögenin değiştirilmesi

items[items.length - 1] = 1000

console.log(items)