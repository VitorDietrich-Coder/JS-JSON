var vetor1 = [];
var vetor2 = [];
var compara = 0;
var parar2 = false;
function Calcular5() {
	var vetor5 = parseFloat(document.querySelector("#vetor5").value);
	var vetor51 = parseFloat(document.querySelector("#vetor51").value);
	var Resultado5 = document.querySelector("#Resultado5");
	var Resultado51 = document.querySelector("#Resultado51");
	var Resultado52 = document.querySelector("#Resultado52");

	if(vetor1.length <= 14 && vetor2.length <= 14){
		vetor1.push(vetor5);
		vetor2.push(vetor51);
		console.log(vetor1);
		console.log(vetor2);
	}
	if(vetor1.length == 15 && parar2 == false ){
		parar2 = true;

		for(i = 0 ; i < vetor1.length; i++){

			if(vetor1[i] == vetor2[i]){
				compara++
			}
		}
		var array = JSON.stringify(Object.assign({"Vetor1":  vetor1}, {"Vetor2" :  vetor2}, {"Comparar:" :  compara})); 
		var stringToJson = JSON.parse(array);
		console.log(stringToJson);
		console.log("Comparar: " + compara);
	}


}

