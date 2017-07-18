import React, {Component} from 'react';
import MessagesContent from './Messages/MessagesContent.jsx'
import MessagesAvatar from './Messages/MessagesAvatar.jsx'
class Messages extends Component {
    render() {

      


        return (
            <div>
           
                
                {this.props.isSenderMe
                    ? <div className="media">
                            <MessagesContent name={this.props.name} value={this.props.value}></MessagesContent>
                            <MessagesAvatar name={this.props.name}></MessagesAvatar>
                        </div>
                    : <div className="media">
                        <MessagesAvatar name={this.props.name}></MessagesAvatar>
                        <MessagesContent name={this.props.name} value={this.props.value}></MessagesContent>
                    </div>}

                

            {/* someone else */}

                {/*<div className="media">
                    <div className="media-left">
                        <img
                            src="https://api.adorable.io/avatars/80/konrad"
                            className="media-object"
                            style={{
                            width: 80
                        }}/>
                    </div>
                    <div className="media-body cloud">
                        <h4 className="media-heading">John Doe</h4>
                        <p>Lorem ipsum...</p>
                    </div>
                </div>*/}

            </div>

        )
    }
}

export default Messages;
