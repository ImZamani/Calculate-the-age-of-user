let $ = document
let FirstNumber = $.querySelector(".FirstNumber")
let SecondNumber = $.querySelector(".SecondNumber")
let btn = $.querySelector(".btn")
let showResult = $.querySelector(".showResult")


btn.addEventListener("click" , ()=> {
    let result = SecondNumber.value - FirstNumber.value
    showResult.innerHTML = "user age is : " + result
})