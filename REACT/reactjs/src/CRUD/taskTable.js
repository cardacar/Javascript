import React from "react";

const ListTable = ({tasks}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          tasks.length > 0?
          tasks.map(nameTask=>(
            <tr key={nameTask.id}>
            <td>{nameTask.name}</td>
            <td>{nameTask.description}</td>
            <td>
              <button className="button muted-button">Edit</button>
              <button className="button muted-button">Delete</button>
            </td>
          </tr>
          )):(
            <tr>
              <td colSpan={3}>No hay datos</td>
            </tr>
          )
        }
      </tbody>
    </table>
  );
};

export default ListTable;
