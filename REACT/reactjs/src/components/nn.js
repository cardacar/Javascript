import React, {Fragment, useState} from 'react';

const Formulario = () => {

    const [arrayNumero, setArrayNumero] = useState([1,2,2,4,5])
    const [item, setItem] = useState('');
    const agregarItem = (item)=>{
        //setArrayNumero(...arrayNumero, item)
        console.log('click')
    }


    return ( 
        <Fragment>
            <div className="container mt-5">
                <h1>Hola mundo</h1>
            </div>
            <h1>Lista</h1>
            <input type="textt" name="item" />
            <button onClick= {agregarItem}>Agregar</button>
            
            {
                arrayNumero.map((item,index )=> 
                //Cuando se recorren arrays se debe de poner el key similar al ejemplo
                <p key = {index}>{item}</p>)
            }
        </Fragment>
     );
}
 
export default Formulario;