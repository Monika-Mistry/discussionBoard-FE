import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Col,
    Button
} from 'reactstrap';

export function NewItem(props) {
    return (
        <Form className="container" onSubmit={props.addItem}>
            <FormGroup row>
                <Label for="username" sm={2}>Username</Label>
                <Col sm={10}>
                    <Input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter your username" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="email" sm={2}>Email</Label>
                <Col sm={10}>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="message" sm={2}>Message</Label>
                <Col sm={10}>
                    <Input
                        type="textarea"
                        name="message"
                        id="message"
                        placeholder="Enter your message" />
                </Col>
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    )
}


