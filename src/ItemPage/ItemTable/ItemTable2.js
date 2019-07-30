import React, { Component } from 'react';
import { Button } from 'reactstrap';
import axios from "axios"
export class Itemtable extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }
    makeRequest = () => {
        axios.get("http://localhost:5000/storage/order")
            .then(response => {
                this.setState({
                    data: response.data
                });
            });
    }
    render() {
       // const {username, message} = this.state.data;
        return (

            <div>
                <ul>
                    {this.state.data.map(item => (
                        <li key={item._id}>{item.username}<br></br>{item.message}</li>
                    ))}
                </ul>
                <Button onClick={this.makeRequest}>
                    Get messages
                   </Button>
            </div>
        );
    };
}