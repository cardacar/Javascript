import React, {Fragment, useState} from 'react';

const Formulario = ()=>{
    const [datos, setDatos] = useState({
        task :'',
        description: ''
    })

    const[arrayTask, setArrayTask] = useState([]);


    const handleInputChange = (event)=>{
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (e)=>{
        e.preventDefault();
        setArrayTask([...arrayTask,datos])
        setDatos({
            task: 'No ingreso el nombre de la tarea',
            description: 'No ingreso ninguna descripcion'
        })
        e.target.reset();
    }

    const deleteItem=(index)=>{
        arrayTask.delete(index)
    }

    return(
        <Fragment>
            <form className="col p-3" onSubmit={enviarDatos}>
                <div className="col-md-3 p-1">
                    <input
                        className="for-control"
                        placeholder="Ingrese la tarea"
                        type="text"
                        name="task"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-3 p-1">
                    <input
                        className="for-control"
                        placeholder="Ingrese la descripcion"
                        type="text"
                        name="description"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">Guardar</button>
                </div>
                {
                    arrayTask.map((item, index)=>{
                        const divTask = <div key={index} className= "colcard">
                            <h3>Tarea: {item.task}</h3>
                            <h4>Descripcion: {item.description}</h4>
                            
                        </div>
                        return divTask
                    })
                }
                
            </form>
        </Fragment>
    );
}

export default Formulario;