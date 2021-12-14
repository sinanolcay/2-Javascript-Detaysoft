// String veri türü işlemleri

let email = "hakanyalcinkaya@gmail.com"
let firstName = "hakan"
let lastName = "YALCINKAYA"

// string karakter sayısı --> length

console.log(email.length)

// İlk karakteri bulmak --> [0]

console.log(firstName[0])
console.log(firstName.charAt(1))

//buyük harf / küçük harf 

firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

// String içinde istediğimiz bilgiyi aramak ve yerini bulmak 

console.log(email.search("@"))
console.log(email[15])

console.log(email.search("olmayan")) // -1


// belli bir yere kadar al -> slice? (domain bilgisi)

let DOMAIN = email.slice(email.search("@") + 1)
console.log(DOMAIN)

console.log(
    DOMAIN.slice(0, DOMAIN.indexOf("."))
)


// bilgiyi değiştir

email = email.replace("gmail.com", "kodluyoruz.org")
console.log(email)


// İstediğim bilgi var mı?

console.log(email.includes("sajnjca"))
console.log(email.includes("@"))


// İstediğim bilgiyle başladı mı? bitti mi? 

console.log(
    email.endsWith("kodluyoruz.org")
)

// İlk harflerini büyük yapma


let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()}
${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`


console.log(fullName)