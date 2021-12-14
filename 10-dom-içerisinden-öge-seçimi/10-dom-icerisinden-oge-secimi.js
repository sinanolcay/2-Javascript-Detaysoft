// Dom içinden öge seçimi

let title = document.getElementById("title")
title.innerHTML = "Değişen Bilgi"
console.log(title.innerHTML)


let link = document.querySelector("#kodluyoruz")

link.innerHTML += " değişti"

link.style.color = "red"
link.classList.add("btn")