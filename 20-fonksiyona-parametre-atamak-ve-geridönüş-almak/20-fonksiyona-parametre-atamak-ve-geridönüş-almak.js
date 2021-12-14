// Temel Kurallar:
// 1: Bir fonksiyon bir veya birden fazla parametre alabilir veya hiç almayabilir.
// 2: Bir fonksiyon dışarı bilgi gönderebilir (return) veya göndermeyebilir.
// 3: Mümkünse fonksiyonun bağımlılıklarını azaltmak gerekir. 

let firsName = "Lorem"

function greetings(firstName="", lastName="") {
    // console.log(`Merhaba ${firstName ? firstName : ""}`)
    // console.log(`Merhaba ${firstName}`)
    console.log(`Merhaba ${firstName} ${lastName}`)
} // default parametre alıyor.

console.log(firsName)  // değişken
greetings("")  // fonksiyona parametre göndermedik
greetings("parametre")

function greetings2(firstName, lastName) {
    let info = `Merhaba ${firstName} ${lastName}`
    return info
}

let greetingsInfo = greetings2("Ad", "Soyad")
// let info = "deneme" // ???

console.log(greetingsInfo)


function domIDWriteInfo(id, info) {
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

let htmlInfo = `<span style="color:red">Color REDDD</span>`

domIDWriteInfo("greeting", htmlInfo)
domIDWriteInfo("info", greetings2("Lorem", "Ipsum"))