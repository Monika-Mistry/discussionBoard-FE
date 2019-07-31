import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Col,
    Button,
    FormFeedback
} from 'reactstrap';

export function NewItem(props) {
    let username = props.error.username;
    let email = props.error.email;
    let message = props.error.message;

    return (
        <Form className="container" onSubmit={props.addItem}>
            <FormGroup row>
                <Label for="username" sm={2}>Username</Label>
                <Col sm={10}>
                    <Input
                        required
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter your username"
                        invalid={username !== undefined} />
                    <FormFeedback invalid>{username}</FormFeedback>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="email" sm={2}>Email</Label>
                <Col sm={10}>
                    <Input
                        required
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        invalid={email !== undefined}  />
                    <FormFeedback>{email}</FormFeedback>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="message" sm={2}>Message</Label>
                <Col sm={10}>
                    <Input
                        required
                        type="textarea"
                        name="message"
                        id="message"
                        placeholder="Enter your message"
                        invalid={message !== undefined}  />
                    <FormFeedback>{message}</FormFeedback>
                </Col>
            </FormGroup>
            <div className="text-center">
                <Button>Submit</Button>
            </div>
        </Form>
    )
}


