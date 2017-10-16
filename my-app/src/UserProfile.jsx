import React, {Component} from 'react';
import $ from "jquery";
class UserProfile extends Component {

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
                <h3 className="panel-title">IMIĘ I NAZWISKO Z BAZY</h3>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-3 col-lg-3 " align="center"> <img alt="Zdjęcie" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"  className="img-circle img-responsive" /> </div>
                  {

                  }
                  <div className=" col-md-9 col-lg-9 "> 
                    <table className="table table-user-information">
                      <tbody>
                        <tr>
                          <td>Imię:</td>
                          <td>IMIĘ Z BAZY</td>
                        </tr>
                        <tr>
                          <td>Nazwisko:</td>
                          <td>NAZWISKO Z BAZY</td>
                        </tr>
                        <tr>
                          <td>Adres email:</td>
                          <td>EMAIL Z BAZY</td>
                        </tr>
                        <tr>
                        </tr><tr>
                          <td>Hasło:</td>
                          <td>HASŁO Z BAZY</td>
                        </tr>
                        <tr>
                          <td>Login:</td>
                          <td>LOGIN Z BAZY</td>
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