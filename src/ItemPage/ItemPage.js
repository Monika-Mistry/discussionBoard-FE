import React, { Component } from 'react';
import Axios from 'axios';
import { Button } from 'reactstrap'

import { NewItem } from './NewItem/NewItem';
import { ItemTable } from './ItemTable/ItemTable';

export class ItemPage extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }
    makeRequest = () => {
        Axios.get("http://localhost:5000/storage/order")
            .then(response => {
                this.setState({
                    data: response.data
                });
            });
    }
    render() {
        return (
            <div>
                <NewItem />
                <Button onClick={this.makeRequest}>Get Messages</Button>
                <ItemTable data={this.state.data} />
            </div>
        );
    }
}