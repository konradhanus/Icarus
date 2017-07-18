import React, {Component} from 'react';
import UserList from './components/right/UserList.jsx'
import Tabs from './components/left/Tabs.jsx'
import Messages from './components/left/Messages.jsx'
import $ from "jquery";
class Icarus extends Component {

    constructor() {
        super();
        this.state = {
            usersList: "",
            messageList: ""
        };

    }

    componentDidMount() {
        let Icarus = this;
        $.ajax({
            url: "http://arconsulting.nazwa.pl/icarus/webservice.php?method=getUser",
            dataType: "json",
            success: function (response) {
                Icarus.setState({usersList: response});

            }

        });

        $.ajax({
            url: "http://arconsulting.nazwa.pl/icarus/webservice.php?method=getMessage",
            dataType: "json",
            success: function (response) {
                Icarus.setState({messageList: response});

            }

        });
    }

    render() {
        console.log(this.state.messageList);
        return (
            <div className="Icarus">
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
                                            value={mojewiadomosci.message}/>)
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
                                            .map((user, id) => <UserList user={user}></UserList>)
                                        : null
}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Icarus;
