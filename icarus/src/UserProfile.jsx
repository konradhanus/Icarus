import React, {Component} from 'react';
//import $ from "jquery";
class UserProfile extends Component {

   constructor() {
        super();
        this.state = {
            name: "Adam",
            surname: "Rusnak",
            email: "adrusnak@gmail.com",
            password: "aaa",
            login: "adrusnak"
        };

    }


    changeValue(){
    
    }

    render() {

        return (
            <div className="container">
        <div className="row">
          <div className="col-md-5  toppad  pull-right col-md-offset-3 ">
        
            <br />
         
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad">
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">{this.state.name} {this.state.surname}</h3>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-3 col-lg-3 centered"> <img alt="Zdjęcie" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"  className="img-circle img-responsive" /> </div>
                  {

                  }
                  <div className=" col-md-9 col-lg-9 "> 
                    <table className="table table-user-information">
                     
                      <tbody>
                        <tr>
                          <td>Imię:</td>
                          <td><div className="form-group"><input type="text" className="form-group" name="name" onChange={this.changeValue.bind(this)} value={this.state.name}/></div></td>
                        </tr>
                        <tr>
                          <td>Nazwisko:</td>
                          <td><div className="form-group"><input type="text" className="form-group" name="surname" onChange={this.changeValue.bind(this)} value={this.state.surname}/></div></td>
                        </tr>
                        <tr>
                          <td>Adres email:</td>
                          <td><div className="form-group"><input type="text" className="form-group" name="email" onChange={this.changeValue.bind(this)} value={this.state.email}/></div></td>
                        </tr>
                        <tr>
                        </tr><tr>
                          <td>Hasło:</td>
                          <td><div className="form-group"><input type="password" className="form-group" name="password" onChange={this.changeValue.bind(this)} value={this.state.password}/></div></td>
                        </tr>
                        <tr>
                          <td>Login:</td>
                          <td><div className="form-group"><input type="text" className="form-group" name="login" value={this.state.login} onChange={this.changeValue.bind(this)}/></div></td>
                        </tr>
                       
                        
                      </tbody>
                    
                    </table>
                  
                   
                  </div>
                </div>
              </div>
              <div className="panel-footer">
                
                
                 
                   <a href="#" className="btn btn-success">Zapisz zmiany</a>
                
              </div>
            </div>
          </div>
        </div>
      </div>


        )
    }
}

export default UserProfile;