import React, { Component } from 'react';
import { Table } from 'reactstrap';

import { Item } from './Item/Item';

export function ItemTable(props) {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Content</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <Item data={props.data}/>
            </Table>
        </div>

    )
}