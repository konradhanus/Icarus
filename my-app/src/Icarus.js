import React, {Component} from 'react';
import UserList from './components/right/UserList.jsx'
import Tabs from './components/left/Tabs.jsx'
class Icarus extends Component {
    render() {
        return (
            <div className="Icarus">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="col-md-9">
                                <Tabs></Tabs>
                                {/* Left-aligned */}
                                <div className="media">
                                    <div className="media-left">
                                        <img src="https://api.adorable.io/avatars/80/konrad" className="media-object" style={{
                                            width: 80
                                        }}/>
                                    </div>
                                    <div className="media-body cloud">
                                        <h4 className="media-heading">John Doe</h4>
                                        <p>Lorem ipsum...</p>
                                    </div>
                                </div>
                                {/* Right-aligned */}
                                <div className="media">
                                    <div className="media-body cloud">
                                        <h4 className="media-heading">John Doe</h4>
                                        <p>Lorem ipsum dolor sitd do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                    <div className="media-right">
                                        <img src="https://api.adorable.io/avatars/80/adam" className="media-object" style={{
                                            width: 80
                                        }}/>
                                    </div>
                                </div>
                                <div className="clearfix space"/>
                                <div className="input-group">
                                    <input type="text" className="form-control"/>
                                    <div className="input-group-btn">
                                        <input type="button" defaultValue="WYŚLIJ" className="btn btn-default"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <UserList></UserList>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>

          )
  }
}

export default Icarus;
