import React, {Fragment, useState} from 'react';

const Lista = () => {

    const [arrayNumero, setArrayNumero] = useState([1,2,2,4,5])
    const agregarItem = (item)=>{
        //setArrayNumero(...arrayNumero, item)
        console.log('click')
    }


    return ( 
        <Fragment>
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
 
export default Lista;