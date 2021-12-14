function hello(firstName) {
    console.log(`Merhaba ${firstName}`)
}

hello("Javascript")


const helloFuncV1 = (firstName) => {
    console.log(`Merhaba ${firstName}`)
}
helloFuncV1("helloFuncV1")

const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`) // bir parametre, bir dönüş
helloFuncV2("helloFuncV2")

const helloFuncV3 = (firstName, lastName) =>console.log(
    `Merhaba ${firstName} ${lastName}`
    ) // console.log parantezi

helloFuncV3("helloFuncV3", "last Name info")

const helloFuncV4 = (firstName, lastName) => {
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info
}
helloFuncV4("helloFuncV4", "Other Info")