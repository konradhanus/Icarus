import React, {Component} from 'react';
import UserList from './components/right/UserList.jsx'
import Tabs from './components/left/Tabs.jsx'
import $ from "jquery";
class Icarus extends Component {
   

   componentDidMount(){
        $.ajax({
            url: "http://arconsulting.nazwa.pl/icarus/webservice.php?method=getUser",
            dataType: "json",
            success: function( response ) {
                console.log( response ); // server response
            }

        });
   }
    render() {

    
        return (
            <div className="Icarus">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="col-md-9">
                                <Tabs jakiesProperty="ala ma kota"></Tabs>

                                {/* Zrób z tego kodu osobny komponent reciveMessage
                                
                                <ReciveMessage src="" name="" message="" />*/}            
                                <div className="media">
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
                                </div>

                                {/* Zrób z tego kodu osobny komponent senderMessage
                                <SenderMessage src="" name="" message="" />*/}
                                <div className="media">
                                    <div className="media-body cloud">
                                        <h4 className="media-heading">John Doe</h4>
                                        <p>Lorem ipsum dolor sitd do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua.</p>
                                    </div>
                                    <div className="media-right">
                                        <img
                                            src="https://api.adorable.io/avatars/80/adam"
                                            className="media-object"
                                            style={{
                                            width: 80
                                        }}/>
                                    </div>
                                </div>

                                <div className="clearfix space"/>

                                {/* Zrób z tego osobny komponent SendButton
                                - tak możesz to używać w komponencie - {this.props.defalutValue} 
                                
                                <SendButton defaultValue="WYŚLIJ"  />
                                */}
                                
                                <div className="input-group">
                                    <input type="text" className="form-control"/>
                                    <div className="input-group-btn">
                                        <input type="button" defaultValue="WYŚLIJ" className="btn btn-default"/>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-3">
                                <div className="list-group">
                                    {this.props.storage.map((user, id) => <UserList user={user}></UserList>)}
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
