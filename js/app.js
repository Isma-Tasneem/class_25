// cart js start 
let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let dbincrement = document.querySelector("#dbincrement");
let extradecrement = document.querySelector("#extradecrement");
let cart = document.querySelector("#cart");
let cart_box = document.querySelector("#cart_box");

//Increment js
increment.addEventListener("click", () => {
    let cartValue = Number(cart.value);
    cart.value = ++cartValue;
});

//Decrement js
decrement.addEventListener("click", () => {
    let cartValue = Number(cart.value);
    if(cartValue > 1){
        cart.value = --cartValue;
    }
});

//dbincrement js
dbincrement.addEventListener("click", () => {
    let cartValuein = Number(cart_box.value);
    cart_box.value = ++cartValuein;
});

//extradecrement js
extradecrement.addEventListener("click", () => {
    let cartValuein = Number(cart_box.value);
    if(cartValuein > 1){
        cart_box.value = --cartValuein;
    }
});
// cart js end

// password js start 
let password_btn = document.querySelector(".password .password_box");
let password_input = document.querySelector(".password .password_card");

password_btn.addEventListener('click', ()=>{
    if (password_input.type == 'password') {

        password_input.type = 'text'
    }
    else{
        password_input.type = 'password'

    }
});
// password js end 

// range js start 
let range = document.querySelector("#range1")

range.addEventListener('input',()=>{
    document.querySelector('h4').innerHTML = range.value;
});

// range js end 

// color js start 
let btn2 = document.getElementById('#btn1');
btn2.addEventListener('click',()=>{
    let color = document.getElementById('#color');
    document.body.style.backgroundColor = color.value;
    document.write(color.value);
});
// color js end 


// date js start
setInterval( ()=>{
    let date = new Date();
    document.querySelector('h2').innerHTML = date
},1000);
// date js end


