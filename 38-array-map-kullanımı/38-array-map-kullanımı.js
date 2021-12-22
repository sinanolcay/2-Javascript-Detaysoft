const USERS = ["AYSE", "MehMet", "TugCe", "AkSEL"]

// userName içinde orijinal isim kalsın,
// shortName içinde ilk harf büyük 
// newName içinde ilk harf büyük olsun
// {username: "AYSE", shortName: "A.", newName: "Ayse"}

const NEW_USERS = USERS.map(user => user.toLowerCase())
console.log(NEW_USERS)

// const USER_OBJ = USERS.map(item => {
//         return {
//             userName: item,
//             shortName: `${item[0]}.`,
//             newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
//         }
//     }

// )

const USER_OBJ = USERS.map(item => (
    {
        userName: item,
        shortName: `${item[0]}.`,
        newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
    }
    )
)

console.log(USER_OBJ)