// random password generator
function generatepassword(passwordlength,includelowercase,includeuppercase,includenumbers,includesymbols){
    const lowercase="abcdefghijklmnopqrstuvwxyz"
    const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers="0123456789"
    const symbols="!@#$%^&*()_+"
    let allowedchars=" ";
    let password="";
    allowedchars+=includelowercase ? lowercase : "";
    allowedchars+=includeuppercase ? uppercase : "";
    allowedchars+=includenumbers ? numbers : "";
    allowedchars+=includesymbols ? symbols : "";

    if (passwordlength <= 0) {
        document.getElementById("popo").textContent = "Password must be at least 1 character long";
        return;
    }
    if (allowedchars.length === 0) {
        document.getElementById("popo").textContent = "At least one character type must be selected";
        return;
    }

    for (let i = 0; i < passwordlength; i++) {
        const randomindex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomindex];
    }

    document.getElementById("popo").textContent = `Generated Password : ${password}`;
}
const passwordlength= 12;
const includelowercase=true;
const includeuppercase=true;
const includenumbers=true;
const includesymbols=true;
const password =generatepassword(passwordlength,includelowercase,includeuppercase,includenumbers,includesymbols)
console.log(`generated password ${password}`)
