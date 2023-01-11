import React from "react"

export const TodoRowItem: React.FC<{
    rowNumber:number, 
    rowDescription:string, 
    rowAssigned:string, 
    deleteTask:Function
}> = (props) => {

    return (
        <tr onClick={() => props.deleteTask(props.rowNumber)}>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}