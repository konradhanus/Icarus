import React, {Component} from 'react';
//import $ from "jquery";
import Icarus from './Icarus';
import axios from 'axios';
import RegistrationForm from './RegistrationForm';
import {
  //BrowserRouter as Router,
  //Route,
  Link
} from 'react-router-dom'


class SignIn extends Component {

    constructor() {
        super();
        this.state = {
            userLogin: "",
            userPassword: "",
            isLoggedIn: false,
            page: ""

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

    logIn() {

        let Icarus = this;

        var url = "http://arconsulting.nazwa.pl/icarus/signin.php?userName=" + this.state.userLogin + "&userPassword=" + this.state.userPassword;

        axios
            .get(url)
            .then(function (response) {

                if (response.data.is_logged_in) {
                    Icarus.setState({isLoggedIn: true});
                }

            });
    }

    registration() {
         this.setState({ page: 'registrationForm'});
    }

    render() {

        if (this.state.isLoggedIn) {
            return (<Icarus/>);
        } else {

            if (this.state.page === 'registrationForm') {

                   return (
                       <RegistrationForm />
                   )     

            } else {
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
                                autoFocus/>

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
                       <div className="centered"> 
                           <Link to="/rejestracja">Zarejestruj się</Link>
                           {/*<a
                            href="#"
                            onClick={this
                            .registration
                            .bind(this)}>Zarejestruj się</a>*/}</div>

                           
                    </div>

                )
            }
        }
    }
}

export default SignIn;