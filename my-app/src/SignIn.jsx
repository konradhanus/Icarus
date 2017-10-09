import React, {Component} from 'react';
import $ from "jquery";
import Icarus from './Icarus';
class SignIn extends Component {

    constructor() {
        super();
        this.state = {
            userLogin: "",
            userPassword: "",
            isLoggedIn: false
            
        };

        this.handleLoginChange = this
            .handleLoginChange
            .bind(this);

        this.handlePasswordChange = this
            .handlePasswordChange
            .bind(this);

    }

    handleLoginChange(event) {
        console.log(event.target.value);
        this.setState({userLogin: event.target.value});
    }

     handlePasswordChange(event) {
        console.log(event.target.value);
        this.setState({userPassword: event.target.value});
     }
    checkedIfLoggedIn() {

        let Icarus = this;
        $.ajax({
            url: "http://arconsulting.nazwa.pl/icarus/signin.php?userName=konrad.hanus@gmail.com&u" +
                    "serPassword=aa",
            dataType: "json",
            success: function (response) {
                //  Icarus.setState({usersList: response});
                console.log(response);
            }

        });

    }

    logIn() {
      
        let Icarus = this;
        /*$.post("http://arconsulting.nazwa.pl/icarus/signin.php", {
            userName: this.state.userLogin,
            userPassword: this.state.userPassword
        }, function (result) {
            console.log(result);
        });*/
        var url = "http://arconsulting.nazwa.pl/icarus/signin.php?userName="+this.state.userLogin+"&"+
                    "userPassword="+this.state.userPassword;
        console.log(url);
        $.ajax({
            url: url,
            dataType: "json",
            success: function (response) {
                //  Icarus.setState({usersList: response});
                console.log(response);
                if(response.is_logged_in)
                {
                      Icarus.setState({ isLoggedIn: true});
                }
            }

        });

    }

    render() {

        //this.checkedIfLoggedIn();

        if (this.state.isLoggedIn)
        {
             return (<Icarus/>);
        }else{

        
        return (
            <div className="container">
                <form
                    className="form-signin"
                    action="http://arconsulting.nazwa.pl/icarus/signin.php"
                    method="POST">

                    <label htmlFor="inputEmail">Login:</label>
                    <input
                        name="userName"
                        type="email"
                        id="inputEmail"
                        onChange={this.handleLoginChange}
                        className="form-control"
                        placeholder="Wpisz adres email"
                        required
                       
                      
                        autofocus/>

                    <label className="password-label" htmlFor="inputPassword">Hasło:</label>
                    <input
                        name="userPassword"
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        onChange={this.handlePasswordChange}
                        
                      
                        placeholder="Wpisz hasło"
                        required/>

                    <button
                        className="btn btn-lg btn-primary btn-block"
                        type="button"
                        onClick={this
                        .logIn
                        .bind(this)}>Zaloguj</button>
                </form>
            </div>

        )
    }
    }
}

export default SignIn;