import React, { Fragment } from 'react'

const Saludo = ({saludo}) => {
    return ( 
        <Fragment>
            <h2>
                Hola mundo desde un archivo con extension jsx {saludo}

            </h2>
        </Fragment>
     );
}
 
export default Saludo;