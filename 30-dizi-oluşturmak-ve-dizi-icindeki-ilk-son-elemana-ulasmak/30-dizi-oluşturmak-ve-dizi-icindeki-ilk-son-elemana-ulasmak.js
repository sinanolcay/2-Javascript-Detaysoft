// Array - dizilerle çalışmak

// Array oluşturmak
let domain = "kodluyoruz"
let isACtive = false
let items = [1, 2, 3, isACtive, domain]
console.log(items)

let emptyArray = [] // boş list

// Array içerisindeki eleman/oge sayısını öğrenmek
console.log(
items.length  // array içindeki öge sayısı
)

// document.querySelector("#info").innerHTML = (items.length)

// Array içindeki ilk elemanın çağırılması

console.log(items[0])

// Array içindeki son elemanın çağırılması

console.log(items[items.length - 1])

// Array içindeki ortadaki elemanın çağırılması

console.log(
    "ortadaki :",
    items[ Math.floor(items.length / 2) ]
)

// Değişken içindeki bilginin array olup olmadığının kontrol edilmesi

console.log(
    typeof(items)  // object olarak çıktı veriyor
)

console.log(
    Array.isArray(items)
)

// hangileri isArray -> true verir ?

console.log("[] : ", Array.isArray ( [] ) )
console.log("1 : ", Array.isArray ( 1 ) )
console.log("true : ", Array.isArray ( true ) )
