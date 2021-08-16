const usrInput = document.getElementById("user-input");
const signCounter = document.getElementById("sign-counter");
const wordCounter = document.getElementById("word-counter");

window.addEventListener("keyup", () => {
    signCounter.textContent = "Sign counter: " + usrInput.value.length;
    wordCounter.value = countWords(usrInput.value);
});

function countWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
    str = str.replace(/[ ]{2,}/gi," ");
    str = str.replace(/\n /,"\n");
    wordCounter.innerHTML = "word counter: " + str.split(' ').length;
}
 
 

