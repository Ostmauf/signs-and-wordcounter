const usrInput = document.getElementById("user-input");
const signCounter = document.getElementById("sign-counter");

window.addEventListener("keyup", () => {
    signCounter.textContent = "Sign counter: " + usrInput.value.length;
    
});
