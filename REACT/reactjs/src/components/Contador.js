import React, {useState, Fragment} from 'react';

const Contador = () => {
    //Primer elemento la variable, segundo el modificador de la variable
    const [contador, setContador] = useState(0);

    //Se usa el setContador para incrementar el contador
    const aumentar= ()=>{
        setContador(contador+1)
    }
    //Reinio el contador
    const reiniciar = ()=>{
        setContador(0);
    }

    return ( 
        <Fragment>
            <h3>Contador inicializado en {contador}</h3>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={reiniciar} >Reiniciar</button>
        </Fragment> 
     );
}
 
export default Contador;