import React from "react";
import Button from "../Button";

export default class Post extends React.Component {

    handleEdit = () => {
        this.props.onEdit(this.props.id)
    }

    handleDelete = () => {
        this.props.onDelete(this.props.id)
    }

    render() {
        return (
            <fieldset>
                <legend>Post: {this.props.id}</legend>
                <p>{this.props.title}</p>
                <Button onClick={this.handleEdit}>Edit</Button>
                <Button onClick={this.handleDelete}>Delete</Button>
            </fieldset>
        )
    }
}