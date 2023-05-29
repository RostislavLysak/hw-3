import React from "react";
import Portal from "./Portal";
import './Modal.css'
import Button from "../Button";

export default class Modal extends React.Component {
    render() {
        if (!this.props.open) return null

        return (
            <Portal>
                <div
                    className="modalOverlay"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(255, 255, 255, .5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: 'blur(5px)'
                    }}
                >
                    <Button onClick={this.props.onCancel}> X </Button>
                    <div className="modalWindow">
                        <div className="modalHeader">
                            <h1 className="modalTitle">{this.props.title}</h1>
                        </div>
                        <div className="modalBody">{this.props.children}</div>
                        <div className="modalFooter">
                            <Button borderRadius='8px' border='none' background='#007BFF' onClick={this.props.onSubmit}>Save changes</Button>
                            <Button borderRadius='8px' border='none' background='#6C757D' onClick={this.props.onCancel}>Close</Button>
                        </div>
                    </div>
                </div>
            </Portal >
        );
    }
}