import React, {useState} from 'react';
import ListTable from './CRUD/taskTable'
import { v4 as uuidv4 } from 'uuid';



function App() {

  const taskData = [
    /* { id: uuidv4(), name: 'Carlos', description: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', description: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', description: 'benisphere' }, */
  ]

  const [task, taskLists] = useState(taskData)


  return (
    <div className="container">
      <h1>CRUD con react hooks</h1>
      <div className= "flex-row">
          <div className="flex-large">
            <h2>Agregar</h2>
          </div>
          <div className="flex-large">
            <h2>Lista</h2>
            <ListTable tasks= {task}/>
          </div>
      </div>  
    </div>
  );
}

export default App;
