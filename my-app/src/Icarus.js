import React, {Component} from 'react';

import UserProfile from './UserProfile';
import Chat from './Chat';
import NavigationBar from './NavigationBar';

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
                        

                        <NavigationBar userProfilClick={this.userProfilClick.bind(this)} chatClick={this.userProfilClick.bind(this)}></NavigationBar>


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
