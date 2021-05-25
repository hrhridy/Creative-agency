
// MIXITUP PLUGIN CALL WITH JS
let mixer = mixitup(".mix_container");

// SELECT BUTTON ADD CLASS AND REMOVE CLASS
let btnParent = document.querySelector(".recent_work_content");
let selectBtn = document.querySelectorAll(".recent_work_content > button");

selectBtn.forEach(element => {
    element.addEventListener("click", () => {
        // REMOVE CLASS
        btnParent.querySelector(".btn_design").classList.remove("btn_design");
        // ADD CLASS
        element.classList.add("btn_design");
    })
});


// STICKY MENU CREATE
let menu = document.querySelector("header");
window.onscroll =()=>{
    if(this.scrollY > 50){
        // ADD STICKY CLASS
        menu.classList.add("sticky");
    }else{
        // REMOVE STICKY CLASS
        menu.classList.remove("sticky");
    }
}