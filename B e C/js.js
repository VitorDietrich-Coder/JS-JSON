    var entrada = []
    var resultado;
    var limit = 1;
function letrab(){
    //var arrayToString = JSON.stringify(Object.assign({}, entrada));  // convert array to string
   // var stringToJsonObject = JSON.parse(arrayToString);  // convert string to json object
    
   // console.log(stringToJsonObject);
    let entrada1 = document.getElementById("entrada1").value;
    if(limit < 21 )
        {
        entrada.push(entrada1);
        limit++
        }
        console.log(entrada);
}
        var result4 = [];
        
    function letrab2(){
        
         for(index = 0 ; index < entrada.length; index++){

			result4.push(entrada[(entrada.length - 1) - index]);
            var array = JSON.stringify(Object.assign({"Exibe ao contrario" : result4.join(",")})); 
            var stringToJson = JSON.parse(array);
		}
      
    console.log(stringToJson);
    console.log("Exibe ao Contrário JS:" + result4.join(", "));
}
    entrada4 = [];
    var soma = 0;
    var media;   

    function letrac(){
    let entrada6 = document.getElementById("entrada5").value;

    if(limit < 21 ){
        entrada4.push(entrada6);
        limit++
        soma += parseFloat(entrada6);
    }
    media = soma/20;
    console.log(soma)
    console.log(entrada4);
}

    var quantidade = 0;
    var mediaresult = []

    function letrac2(){
    for (let index = 0; index <= 19; index++) {
       if(entrada4[index] >= media){
        quantidade++
       }
    }
    var array = JSON.stringify(Object.assign({"Média" : media}, {"Quantidade" : quantidade})); 
    var stringToJson = JSON.parse(array);
    console.log(stringToJson);
    console.log("Quantidade:" + quantidade)
    console.log("Média:" + media)
    
}
