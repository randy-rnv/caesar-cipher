function ifCharIsZ(code) {
    if (code == 90) {
        code = 64;
    }
    if (code == 122) {
        code = 96;
    }
    return code;
}// function charIsZ


function ifCharIsA(code) {
    if (code == 65) {
        code = 91;
    }
    if (code == 97) {
        code = 123;
    }
    return code;
}// function ifCharIsA

function charTransform(code, decalage) {
    var newChar;

    if (decalage > 0) {
        for (var i = 1; i <= decalage; i++) {
            code = ifCharIsZ(code);
            code += 1;
        }
        newChar = String.fromCharCode(code);
    }// if(number>0)

    if (decalage < 0) {
        decalage = Math.sqrt(Math.pow(decalage, 2));
        for (var i = 1; i <= decalage; i++) {
            code = ifCharIsA(code);
            code -= 1;
        }
        newChar = String.fromCharCode(code);
    }// if(number<0)

    if(decalage == 0){
       newChar = String.fromCharCode(code);  
    }

    return newChar;
}// function charTransform
