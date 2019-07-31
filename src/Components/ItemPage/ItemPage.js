import React, { Component } from 'react';
import Axios from 'axios';

import { NewItem } from './NewItem/NewItem';
import { ItemTable } from './ItemTable/ItemTable';
import { getURL, addURL, deleteURL } from '../Constants';

export class ItemPage extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            errors: {}
        }
    }

    componentDidMount() {
        this.getAllItems();
    }

    getAllItems = () => {
        Axios.get(getURL)
            .then(response => {
                this.setState({
                    data: response.data
                });
            }).catch(err => { console.log(err.message) });
    }

    deleteItem = event => {
        event.preventDefault();
        Axios.delete(deleteURL, { data: { _id: event.target.getAttribute("data") } })
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
        this.setState({
            errors: {}
        });
        const item = {
            username: event.target[0].value,
            email: event.target[1].value,
            message: event.target[2].value
        };

        Axios.post(addURL, item).then(response => {
            if (response.status === 200 && typeof response.data === 'string') {
                this.getAllItems();
            } else {
                this.setState({
                    errors: response.data.errors
                })
            }
        }).catch(err => { console.log(err.message) });
    }

    render() {
        return (
            <div>
                <NewItem error={this.state.errors} addItem={this.addItem} />
                <br></br>
                <ItemTable data={this.state.data} deleteItem={this.deleteItem} />
            </div>
        );
    }
}