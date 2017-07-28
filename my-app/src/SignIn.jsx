import React, {Component} from 'react';
import $ from "jquery";
class SignIn extends Component {

    constructor() {
        super();
        this.state = {
            userLogin: "qqqq",
            userPassword: ""
        };

    this.handleChange = this.handleChange.bind(this);


    }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

    checkedIfLoggedIn() {
        let Icarus = this;
        $.ajax({
            url: "http://arconsulting.nazwa.pl/icarus/checkifloggedin.php",
            dataType: "json",
            success: function (response) {
                //  Icarus.setState({usersList: response});
                alert(response);
            }

        });

    }

    logIn() {
        alert(this.state.userLogin);
        let Icarus = this;
        $.post("http://arconsulting.nazwa.pl/icarus/signin.php", {
            userName: this.state.userLogin,
            userPassword: this.state.userPassword
        }, function (result) {
            alert(result);
        });

    }

    render() {
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
                        className="form-control"
                        placeholder="Wpisz adres email"
                        required
                        value={this.state.userLogin}
                        onChange={this.handleChange}
                        autofocus/>

                    <label className="password-label" htmlFor="inputPassword">Hasło:</label>
                    <input
                        name="userPassword"
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        value={this.state.userPassword}
                        onChange={this.handleChange}
                        placeholder="Wpisz hasło"
                        required/>

                    <button
                        className="btn btn-lg btn-primary btn-block"
                        type="button"
                        onClick={this.logIn.bind(this)}>Zaloguj</button>
                </form>
            </div>

        )
    }
}

export default SignIn;