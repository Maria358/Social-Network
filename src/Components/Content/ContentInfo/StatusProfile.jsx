import * as React from "react";

export class StatusProfile extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                state: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.editMode
                        ? <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status || '--------'}
                                 onBlur={this.deactivateEditMode}/>
                        : <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>}
                </div>
            </div>
        )

    }
}
