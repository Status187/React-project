import React from 'react';

class ProfileStatus extends React.Component {
    state= {
        editMode: false,
        title: 'Yo'
    }

    activateEditMode() {
        console.log(this.state.editMode);
        this.setState( {
            editMode: true
        })
        console.log(this.state.editMode);
    }
    deactivateEditMode() {
        console.log(this.state.editMode);
        this.setState( {
            editMode: false
        })
        console.log(this.state.editMode);
    }

    render () {
        return (
            <div>
                {!this.props.editMode &&
                    <div>
                        <span onClick={ this.activateEditMode.bind(this) }>{this.props.status}</span>
                    </div>
                }
                {this.props.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this) } value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;