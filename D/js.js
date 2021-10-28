var total = []
var limit = 1
var soma = 0
var media = 0
var result1;
function adir(){
    var quantidade = [parseFloat(document.getElementById("quantidade").value)];
    var valor = [parseFloat(document.getElementById("valor").value)];
        var valor3;
    if(limit <= quantidade){
            total.push(valor)
            soma += valor;
            limit++
        }
    media = soma / quantidade;
    result1 = quantidade * valor;
    var array = JSON.stringify(Object.assign({"valor total em estoque " : result1}, {"Media" : media})); 
    var stringToJson = JSON.parse(array);
   
    document.getElementById("result2").innerHTML =  media;
    document.getElementById("result1").innerHTML =  quantidade * valor;

    console.log(stringToJson)

    console.log("valor total em estoque"+result1);
    console.log("Média em JS: "+media);
   

}