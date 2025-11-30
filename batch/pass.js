let inputSlider = document.getElementById('inputSlider');
let sliderValue = document.getElementById('sliderValue');
let passBox = document.getElementById('passBox');
let lowercase = document.getElementById('lowercase');
let uppercase = document.getElementById('uppercase');
let number = document.getElementById('number');
let symbol = document.getElementById('symbol');
let genBtn = document.getElementById('genBtn');


sliderValue.innerHTML = inputSlider.value;

inputSlider.addEventListener('input', () =>{
    sliderValue.textContent = inputSlider.value;
})

genBtn.addEventListener('click', () =>{
    passBox.value = genPass();
})

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let numberC = "0123456789";
let symbols = "!@#$%`~";

function genPass(){
    let genPassword="";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += number.checked ? numberC : "";
    allChars += symbol.checked ? symbols : "";

    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }

    i=1;
    while(i<=inputSlider.value){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    return genPassword;
}