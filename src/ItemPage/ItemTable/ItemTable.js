import React from 'react';
import { Table } from 'reactstrap';

import { Item } from './Item/Item';

export function ItemTable(props) {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Message</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <Item data={props.data} deleteItem={props.deleteItem} />
            </Table>
        </div>

    )
}