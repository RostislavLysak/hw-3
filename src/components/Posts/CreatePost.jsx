import React from "react";
import Button from "../Button";

export default class CreatePost extends React.Component {
    constructor(props) {
        super(props)
        this.textInput = React.createRef();
    }

    handleSubmit = async () => {
        const title = (this.textInput.current.value ?? '').trim();

        this.props.onSubmit({
            title
        })
    };

    render() {
        return <div>
            <h1>Create your post</h1>
            <input type="text" ref={this.textInput} />
            <Button onClick={this.handleSubmit}>Add</Button>
        </div>
    }
}