import React from 'react';
import { Button } from 'reactstrap';

export function Item(props) {
    return (
        <tbody>
            {props.data.map(element => {
                return (
                    <tr key={element._id}>
                        <td>{element.username}</td>
                        <td>{element.message}</td>
                        <td><Button onClick={props.deleteItem} data={element._id}>Delete</Button></td>
                    </tr>)

            })}
        </tbody >
    )
}