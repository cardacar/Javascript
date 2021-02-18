//Programa que me cuenta el numero de aparaciones de una palabra en una cadena mas larga
const cad = "JavaScript disfrutó de un éxito inmediato y Internet Explorer 3.0 introdujo la compatibilidad con JavaScript con el nombre "+
"JavaScript en Wikipedia Guía de JavaScript en MDN El taller de javascripting en NodeSchool El curso de JavaScript en codecademy.com "+
"JavaScript elocuent"
console.log(repeatStr(cad))

function cadenaT(str) {
    return str.toLowerCase().replace(/[.,!?¡¿]/g, "")
    
}

function repeatStr(str){
    let aux = cadenaT(str);
    let dist = new Map();
    let separetor = aux.split(" ");

    for (let cad in separetor) {
        if(dist.has(separetor[cad])){
            let sum = dist.get(separetor[cad])
            sum+=1
            dist.set(separetor[cad], sum)
        }else{
            dist.set(separetor[cad], 1)
        }
    }

    return(dist)
}