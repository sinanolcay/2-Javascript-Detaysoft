// eğer kullanıcı adın varsa yazdır yoksa kullanıcı bilginiz bulunamdı yaz

let userName = prompt("Kullanıcı Bilginizi Yazınız");
let info = document.querySelector("#info");

// ternary kullanımı:
// koşul ? doğruysa : yanlışsa

info.innerHTML = `${userName ? userName : "Kullanıcı Bilginiz Bulunamadı :("}`;
