import React, { Component } from "react";
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import Panel from 'muicss/lib/react/panel';

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: {
                id: "",
                timestamp: "",
                body: "",
                author: "",
                parentId: "",
                ...props.initialData
            }
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        const date = new Date();
        this.setState(prevState => ({
            comment: {
                ...prevState.comment,
                timestamp: date.getTime(),
                [name]: value
            }
        }));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { comment } = this.state;
        if (comment.author && comment.body)
            this.props.onSubmit(comment, this.props.editMode);
    }

    render() {
        return (
            <Panel>
                <Form onSubmit={this.handleSubmit}>
                    <Input label='Author' floatingLabel type="text" name="author" value={this.state.comment.author} onChange={this.handleChange} />
                    <Textarea label='Body' floatingLabel name='body' value={this.state.comment.body} onChange={this.handleChange} />

                    <Button variant="raised">Submit</Button>
                </Form>
            </Panel>
        );
    }
}

export default CommentForm;
