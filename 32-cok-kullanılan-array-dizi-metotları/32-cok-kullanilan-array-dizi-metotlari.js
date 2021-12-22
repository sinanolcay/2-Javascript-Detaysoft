let items = [1, 2, 3, 4, 5]

// Array içinde Array

let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

items.unshift(femaleUsers)

items.push(maleUsers)

console.log(items)

console.log(items.length)
console.log(items[0].length)  // Array içindeki istediğimiz Array'in length bilgisini aldık.
console.log(items[0][0])  // Ayşe bilgisine ulaştık.

// Array içerisinden öge ayırmak --> splice (pos, item)

let newItems = items.splice(1, 5)

console.log("newItems: ", newItems)
console.log("items: ", items)

// Array içerisindeki ögenin index bilgisini bulmak --> indexOf("value")

items.unshift("lorem")
items.push("ipsum")

console.log( items.indexOf("ipsum") )

// Array Kopyalamak --> slice, [...ES6]

let copyItems = items
console.log(items)

copyItems.pop()  // son ögeyi çıkarttık
console.log("copyItems", copyItems)
console.log("items", items)

console.log("kopyalandıktan sonraki hali::::::::::")
copyItems = items.slice()  // kopyalama yaptı
copyItems.pop()  // son ögeyi çıkarttık
console.log("copyItems", copyItems)
console.log("items", items)


let es6Items = [...items] // es6 ve sonrasında gelen kopyalama işlemi
console.log(es6Items)

// İki Array bilgisini değiştirmek --> [...ES6, ...ES6]

let allUsers = [...femaleUsers, ...maleUsers]  // es6 birden fazla array yapısını birleştirmek
console.log(allUsers)

// Array içerisindeki bilgiyi String'e çevirmek --> toString, join

console.log(allUsers.toString())
console.log(allUsers.join(" --- "))

// İstediğimiz Index bilgisine öge eklemek --> splice(index, 0, value)

allUsers.splice(allUsers.length -1, 0, "Melissa")
allUsers.splice(Math.floor( allUsers.length / 2), 0, "Lorem")
console.log(allUsers)