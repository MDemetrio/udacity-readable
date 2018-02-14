import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import Panel from 'muicss/lib/react/panel';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {
                id: '',
                timestamp: '',
                title: '',
                body: '',
                author: '',
                category: '',
                deleted: false,
                ...props.initialData
            }
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState(prevState => ({ post: { ...prevState.post, ...nextProps.initialData } }))
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        const date = new Date();

        this.setState(prevState => ({
            post: {
                ...prevState.post,
                timestamp: date.getTime(),
                [name]: value
            }
        }));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { post } = this.state;
        if (post.title && post.author && post.category && post.body)
            this.props.onSubmit(post);
    }

    render() {
        return (
            <Panel>
                <Form onSubmit={this.handleSubmit}>
                    <Input required label='Title' floatingLabel type="text" name="title" value={this.state.post.title} onChange={this.handleChange} />
                    <Input required label='Author' floatingLabel type="text" name="author" value={this.state.post.author} onChange={this.handleChange} />
                    <Select required name="category" label="Category" value={this.state.post.category} onChange={this.handleChange}>
                        <Option value='' label='Select a category' />
                        {this.props.categories.map(c => (<Option key={c.name} value={c.name} label={c.name} />))}
                    </Select>
                    <Textarea required label='Body' floatingLabel name='body' value={this.state.post.body} onChange={this.handleChange} />

                    <Button variant="raised">Submit</Button>
                </Form>
            </Panel>
        );
    }
}

PostForm.propTypes = {
    categories: PropTypes.array.isRequired,
    initialData: PropTypes.object
}

function mapStateToProps({ categories }) {
    return {
        categories: categories.categoriesList
    }
}

export default withRouter(connect(mapStateToProps)(PostForm))