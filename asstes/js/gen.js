//Coding by Emad Adel [EPROJECTS]
//fb.com/emadadel4
// www.eprojects.orgfree.com


//Get Slider in HTML
const lengthSlider = document.querySelector(".pass-length input");

//Get all inputs in option class, this like a arry
options = document.querySelectorAll(".option input"),


//Get tips text  from HTML
passTips = document.querySelector(".tips"),

passwordInput = document.querySelector(".input-box input");

//Get save button in HTML
saveBtn = document.querySelector(".save-btn");

//Get copy copyIcon button in HTML
copyIcon = document.querySelector(".copyIcon");

//Get generate-btn button in HTML
generateBtn = document.querySelector(".generate-btn");


//Characters logic (All characters on the keyboard)
const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}



//Generate Passowrd This linked to "generateBtn"
const generatePassord = () =>{
    let staticPassword =  "",
    randomPassword  = "",
    excludeDuplicate = false;
    passLength = lengthSlider.value;

    options.forEach(option => {
        if(option.checked){

            if(option.id !=="exc-duplicate"&& option.id !=="spaces"){
                staticPassword  += characters[option.id];
            } else if(option.id ==="spaces"){
                staticPassword  += ' ${staticPassword} ';
            } else{
                excludeDuplicate = true;
            }

        }
    });


    for (let i = 0; i < passLength; i++) {

      let randomChar =  staticPassword[Math.floor(Math.random() * staticPassword.length)];


        if(excludeDuplicate){
            if(!randomPassword.includes(randomChar) || randomChar == " "){
                randomPassword += randomChar;
            }else {
                i--;
            }

        } else {
            randomPassword += randomChar;
        }     
    }

    passwordInput.value = randomPassword;

}


//Slider to set max Charachter This linked to "lengthSlider"
const updateSlider = () => {

    //passing slider value as counter text
    document.querySelector(".pass-length span").innerText =  lengthSlider.value;
    generatePassord();
    PassPower();
}


//This to copy the text from (passwordInput) to set max Charachter This linked to "copyIcon"
const copyPassowrd  = () =>{
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.innerText = "تم النسخ";
    setTimeout(() => {
        copyIcon.innerText = "نسخ";
    },1500);
    
}

//This to tell you if your password is weak or good , this linked to (passTips) in HTML.

const PassPower = () =>{
   if(lengthSlider.value <= 8){
    passTips.innerText = "ضعيف جدا";
   } else if(lengthSlider.value <= 20){
    passTips.innerText = "قوي";
   } else if(lengthSlider.value >= 40) {
    passTips.innerText = "(: مفعل نووي";
   }else{
    passTips.innerText = "قوي جدا";
   }
}


//Save a file text on your computer
const Save = ()=>{
    const blob = new Blob(["www.eprojects.orgfree.com" + "\n" + "\n" + passwordInput.value], {type: Save.value});
    const fileUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    
    //Save as "Password"
    link.download = "Password";

    link.href = fileUrl;

    link.click();

  

}


updateSlider();



lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassord);
copyIcon.addEventListener("click", copyPassowrd);
saveBtn.addEventListener("click", Save);