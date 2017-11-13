import React, {Component} from 'react';
import Tabs from './components/left/Tabs.jsx';
import Messages from './components/left/Messages.jsx';
import UserList from './components/right/UserList.jsx';
import $ from "jquery";

import axios from 'axios';

class Chat extends Component {

    constructor() {
        super();
        this.state = {
            usersList: "",
            messageList: ""
        };
    }

componentWillMount() {

    $.get("http://arconsulting.nazwa.pl/icarus/ws_chk_if_logged_in.php",function(data){

let datajson = JSON.parse(data);
console.log(datajson);

    })

//let Icarus = this;

        axios
            .get("http://arconsulting.nazwa.pl/icarus/ws_chk_if_logged_in.php")
            .then(function (response) {
                    console.log(response.data);
               // Icarus.setState({usersList: response.data});

            });

}

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-9">
                            <Tabs jakiesProperty="ala ma kota"></Tabs>

                            {this.state.messageList !== ""
                                ? this
                                    .state
                                    .messageList
                                    .map((mojewiadomosci, id_tej_wadomosci) => <Messages
                                        isSenderMe={true}
                                        name={mojewiadomosci.id_guest}
                                        value={mojewiadomosci.message} key={id_tej_wadomosci}/>)
                                : null
}

                            <div className="clearfix space"/>

                            <div className="input-group">
                                <input type="text" className="form-control"/>
                                <div className="input-group-btn">
                                    <input type="button" defaultValue="WYŚLIJ" className="btn btn-default"/>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="list-group">
                                {this.state.usersList !== ""
                                    ? this
                                        .state
                                        .usersList
                                        .map((user, id) => <UserList user={user} key={id}></UserList>)
                                    : null
}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

    componentDidMount() {
       
       let Icarus = this;

        axios
            .get("http://arconsulting.nazwa.pl/icarus/checkifloggedin.php")
            .then(function (response) {
                    console.log(response.data);
               // Icarus.setState({usersList: response.data});

            });
       
       
       
  

        axios
            .get("http://arconsulting.nazwa.pl/icarus/webservice.php?method=getUser")
            .then(function (response) {

                Icarus.setState({usersList: response.data});

            });

        axios
            .get("http://arconsulting.nazwa.pl/icarus/webservice.php?method=getMessage")
            .then(function (response) {

                Icarus.setState({messageList: response.data});

            });
    }
}

export default Chat;