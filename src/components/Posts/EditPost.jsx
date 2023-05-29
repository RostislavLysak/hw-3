import React from "react";
import Modal from "../Modal";

export default class EditPost extends React.Component {
    constructor(props) {
        super(props)
        this.textInput = React.createRef();
    }

    handleSubmit = async () => {
        const title = (this.textInput.current.value ?? "").trim();

        this.props.onSubmit({
            title
        })
    };

    render() {
        return (
            <Modal
                open={this.props.open}
                title="Change your title if you want"
                onCancel={this.props.onCancel}
                onSubmit={this.handleSubmit}
            >
                <input style={{ width: '200px', height: '20px' }} ref={this.textInput} />
            </Modal>
        )
    }
}