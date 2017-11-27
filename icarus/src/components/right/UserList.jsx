import React from 'react';

class UserList extends React.Component {
    render() {
      
        return (

          
              <a href="#" className="list-group-item">{this.props.user.name} {this.props.user.surname}</a>
              
          

                )
        }
    }

    export default UserList;
