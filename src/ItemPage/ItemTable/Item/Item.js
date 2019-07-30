import React, { Component } from 'react';

export class Item extends Component {
    renderItem = element => {
        return (
            <tr key={element._id}>
                <td>{element.username}</td>
                <td>{element.message}</td>
            </tr>)

    }

    render() {
        const arr = this.props.data;
        return (
            <tbody>
                {arr.map(this.renderItem)}
            </tbody >
        )
    }

}