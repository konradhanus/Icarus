import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import UserProfile from './UserProfile';
import Chat from './Chat';

class Icarus extends Component {

    constructor() {
        super();
        this.state = {
           
            page: 'chat'
        };

    }

    userProfilClick() {

        this.setState({ page: 'userprofile'});
    }

    chatClick() {

        this.setState({ page: 'chat'});
    }

    

    render() {
        console.log(this.state.messageList);

        
            return (
                <div className="Icarus">

                    <div>
                        <style
                            dangerouslySetInnerHTML={{
                            __html: "\n /* Note: Try to remove the following lines to see the effect of CSS positioning */\n .affix {\n top: 0;\n width: 100%;\n }\n\n .affix + .container-fluid {\n padding-top: 70px;\n }\n "
                        }}/>

                        <nav className="navbar navbar-inverse" data-spy="affix" data-offset-top={197}>
                            <ul className="nav navbar-nav">
                                <li className="active">
                                    <a href="#">Icarus</a>
                                </li>

                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                
                                <li>
                                    <a href="#" onClick={this.chatClick.bind(this)}><FontAwesome name='comments-o' size='2x' /></a>
                                </li>

                                <li>
                                    <a href="#" onClick={this.userProfilClick.bind(this)}><FontAwesome name='user-circle' size='2x' /></a>
                                </li>
                                 
                            </ul>

                        </nav>
                        <div
                            className="container-fluid"
                            style={{
                            height: 10
                        }}></div>
                    </div>
                    {this.state.page === 'userprofile' ? <UserProfile /> : <Chat /> }
                    
                    
                </div>

            )
        }

}

/*

pocztaj o
- map, Obiekt i Tablica
- ajax POST, GET w jquery
- object
- array

jak się tworzy obiekty w js
jak się tworzy array js

- string, int, null
- */

export default Icarus;
