// var ile değişken tanımlamak

// var serverName = "api.kodluyoruz.org"

// console.log(serverName);

// let ile değişkeni boş tanımlamak

let serverName;

console.log(serverName);

// let değişkenine bilgi atamak

serverName = "https://kodluyoruz.org";
console.log(serverName);

// let ile değişkene bilgi atayarak tanımlamak

let password = "1234";
console.log(password);

// değişken ataması yapmadan önce kullanmaya çalışmak
// console.log(fullName)
// let fullName = "Sinan Olcaytürkan"; //Hatalı Kullanım

let fullName = "Sinan Olcaytürkan";

// let ile tanımlanan değişkenin içindeki bilgiyi değiştirmek
fullName = "Nanis Türkanolcay"

console.log(fullName); 

// birleştirme ve ekleme işlemi

fullName = fullName + " Yeni Bilgi"
fullName = "2. Bilgi : " + fullName
console.log(fullName);

fullName = "Sıfırlandı"
fullName += " ve Yeni Bilgi Eklendi"
console.log(fullName);


// const ile değişkeni boş tanımlamaya çalışmak 

// const serverPassword; //sadece değişken tanımlandı ama içi boş ??

// console.log(serverPassword);

// const ile değişken tanımlamak

const SERVER_PASSWORD = "hahaha"

console.log (SERVER_PASSWORD);

// SERVER_PASSWORD = "1234"

// console.log (SERVER_PASSWORD);  // Const'ta tek değişken olur.
