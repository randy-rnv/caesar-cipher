
var output = document.getElementById("output");
var btTransform = document.getElementById("transform");
var number = document.getElementById("number");
var text = document.getElementById("text");

btTransform.addEventListener("click", () => {
    var decalage = number.value
    var originalText = text.value;

    var newText = "";
    var carModif = "";
    var code;

    for (var i = 0; i < originalText.length; i++) {
        code = originalText.charCodeAt(i);

        if (code == 32) {
            carModif = " ";
        } else {
            carModif = charTransform(code, decalage);
        }
        newText += carModif;
    }

    //Ecriture dans la balise <div> output
    output.textContent = newText;
});



