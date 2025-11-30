let inputSlider = document.getElementById('inputSlider');
let sliderValue = document.getElementById('sliderValue');
let passBox = document.getElementById('passBox');
let genBtn= document.getElementById('genBtn');
let uppercase = document.getElementById('uppercase');
let lowercase = document.getElementById('lowercase');
let number = document.getElementById('number');
let symbol = document.getElementById('symbol');

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
let symbols= "!@#$%`~";
function genPass() {
    // let chars = "";
    let genPassword="";
    let allchars="";

    allchars += lowercase.checked ? lowerChars : "";
    allchars += uppercase.checked ? upperChars : "" ;
    allchars += number.checked ? numberC : "";
    allchars += symbol.checked ? symbols : "";

    if(allchars == "" || allchars.length ==0){
        return genPassword;
    }
    i=1;
    while(i<=inputSlider.value){
        genPassword += allchars.charAt(Math.floor(Math.random()*allchars.length));
        i++;
    }
    // Math.random();
    return genPassword;
}
