import React, { Component } from 'react';
import Axios from 'axios';

import { NewItem } from './NewItem/NewItem';
import { ItemTable } from './ItemTable/ItemTable';

export class ItemPage extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getAllItems();
    }

    getAllItems = () => {
        Axios.get("http://localhost:5000/storage/order")
            .then(response => {
                this.setState({
                    data: response.data
                });
            }).catch(err => { console.log(err.message) });
    }

    deleteItem = event => {
        event.preventDefault();
        Axios.delete("http://localhost:5000/storage/deleteItem", { data: { _id: event.target.getAttribute("data") } })
            .then(response => {
                if (response.status === 200) {
                    this.getAllItems();
                }
                else {
                    console.log(response);
                }

            }).catch(err => { console.log(err.message) });
    }

    addItem = event => {
        event.preventDefault();
        const item = {
            username: event.target[0].value,
            email: event.target[1].value,
            message: event.target[2].value
        };


        Axios.post("http://localhost:5000/storage/addItem", item).then(response => {
            if (response.status === 200) {
                this.getAllItems();
            } else {
                console.log(response);
            }

        }).catch(err => { console.log(err.message) });
    }

    render() {
        return (
            <div>
                <NewItem addItem={this.addItem} />
                <ItemTable data={this.state.data} deleteItem={this.deleteItem} />
            </div>
        );
    }
}