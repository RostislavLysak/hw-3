import React from "react"

export default class Button extends React.Component {

    render() {
        return (
            <button style={{ background: this.props.background, borderRadius: this.props.borderRadius, border: this.props.border }} onClick={this.props.onClick}>{this.props.children}</button>
        )
    }
}