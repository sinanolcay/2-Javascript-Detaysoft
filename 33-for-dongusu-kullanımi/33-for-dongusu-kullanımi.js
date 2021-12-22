// For Döngüsü

// for ([başlangıçAtaması]; [koşulİfadesi]; [arttırımİfadesi]) {
// yapılacak işlem
// }

let users = ["Lorem", "Ipsum", "Dolor"]

// for (let index = 0; index < 10; index++) {
//     console.log(index)
// }

// let index = 0

// for (; index < 10; index++) {
//     console.log(index)
// }

const userListDOM = document.querySelector("#userList")

for( index = 0; index < users.length; index++) {
    const liDOM = document.createElement("li")
    liDOM.innerHTML = users[index]
    userListDOM.appendChild(liDOM)
}

// 1-50 arası sayılardan çift olanları ekranda listeleme ÖRNEK!

for (let i=1; i<=50; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}