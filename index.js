// const characters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "a", "b", "c", "d"]
const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~",
    "`","!","@","#","$","%","^","&","*","(",")","_","-",
    "+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


const password1El = document.getElementById("password1")
const password2El = document.getElementById("password2")
password1El.textContent = ""
password2El.textContent = ""


function generatePassword() {
    let password1 = ""
    let password2 = ""

    for (let i = 0; i < 18; i++) {
        password1 +=  characters[getRandomNumber(0, characters.length)]
        password2 +=  characters[getRandomNumber(0, characters.length)]
    }
    console.log(password1);
    console.log(password2);

    password1El.textContent = password1
    password2El.textContent = password2
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min
}