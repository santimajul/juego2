let margenRed = 0;
let margenBlue = 0;
let margenGreen = 0;
let redPoints = 0;
let bluePoints = 0;
let greenPoints = 0;

        document.addEventListener("keydown",corre);

    function corre(tecla){
       
        if(tecla.keyCode == '65'){
            margenRed += 20;
            const uno = document.querySelector(".primer");
            uno.style.marginLeft = margenRed + "px"
        }else if(tecla.keyCode == '71'){
            margenBlue += 20;
            const dos = document.querySelector(".segundo");
            dos.style.marginLeft = margenBlue + "px"
        }else if(tecla.keyCode == '76'){
            margenGreen += 20;
            const tres = document.querySelector(".tercero");
            tres.style.marginLeft = margenGreen + "px"
        }

        if(margenRed === 860){
            alert("negra wins");
            redPoints++;
            margenRed = 0;
            margenBlue = 0;
            margenGreen = 0;
            document.querySelector(".primer").style.marginLeft = "0px";
            document.querySelector(".segundo").style.marginLeft = "0px";
            document.querySelector(".tercero").style.marginLeft = "0px";

        }else if(margenBlue === 860){
            alert("facu wins");
            bluePoints++;
            margenRed = 0;
            margenBlue = 0;
            margenGreen = 0;
            document.querySelector(".primer").style.marginLeft = "0px";
            document.querySelector(".segundo").style.marginLeft = "0px";
            document.querySelector(".tercero").style.marginLeft = "0px";

        }else if(margenGreen === 860){
            alert("gordo wins");
            greenPoints++;
            margenRed = 0;
            margenBlue = 0;
            margenGreen = 0;
            document.querySelector(".primer").style.marginLeft = "0px";
            document.querySelector(".segundo").style.marginLeft = "0px";
            document.querySelector(".tercero").style.marginLeft = "0px";

        }
        
        document.querySelector(".red").innerHTML = "<b>" + redPoints + "</b>";
        document.querySelector(".blue").innerHTML = "<b>" + bluePoints + "</b>";
        document.querySelector(".green").innerHTML = "<b>" + greenPoints + "</b>";

    }

    






