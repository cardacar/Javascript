let cadena = 'hola'
console.time('cod')

const reverse = (cad)=>{
    let cadena = cad.split("")
    let resultado = cadena.reverse().join("")
    return resultado
}

console.log(cadena, ' en reversa es: ', reverse(cadena))
console.timeEnd('cod')