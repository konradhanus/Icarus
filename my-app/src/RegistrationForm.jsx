import React, {Component} from 'react';
import md5 from 'js-md5';

class RegistrationForm extends Component {

    constructor() {
        super();
        this.state = {

            name: 'konrad',
            surname: '',
            login: 'konradlogin',
            password: '',
            passwordMD5: '',
            email: '',
            terms: true
        };


    }

    changeLogin(e) {

        let newLogin = e.target.value;
        this.setState({login: newLogin});
    }

    changeName(e) {

        let newName = e.target.value;
        this.setState({name: newName});
    }

    changeSurname(e) {

        let newSurname = e.target.value;
        this.setState({surname: newSurname});
    }

    changeEmail(e) {

        let newEmail = e.target.value;
        this.setState({email: newEmail});
    }

    changePassword(e) {

        let newPassword = e.target.value;
        this.setState({password: newPassword});
        this.setState({passwordMD5: md5(newPassword)});
    }

    changeTerms() {

        let newTerms = !this.state.terms;
        this.setState({terms: newTerms});

        console.log(this.state.terms);
    }

       register() {
           
           

            let sendState = this.state;
            console.log(sendState); 
            delete sendState.password;
            console.log(sendState); 
            
       }

    render() {
        return (

            <div className="container">
                <form className="form-horizontal" role="form">
                    <h2>Rejestracja</h2>
                    <div className="form-group">
                        <label htmlFor="firstName" className="col-sm-3 control-label">Login</label>
                        <div className="col-sm-9">
                            <input
                                type="text"
                                id="firstName"
                                placeholder="Login"
                                className="form-control"
                                autoFocus
                                value={this.state.login}
                                onChange={this
                                .changeLogin
                                .bind(this)}/>

                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstName" className="col-sm-3 control-label">Imię</label>
                        <div className="col-sm-9">
                            <input
                                type="text"
                                id="firstName"
                                placeholder="Imię"
                                className="form-control"
                                autoFocus
                                value={this.state.name}
                                onChange={this
                                .changeName
                                .bind(this)}/>

                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstName" className="col-sm-3 control-label">Nazwisko</label>
                        <div className="col-sm-9">
                            <input
                                type="text"
                                id="firstName"
                                placeholder="Nazwisko"
                                className="form-control"
                                autoFocus
                                value={this.state.surname}
                                onChange={this
                                .changeSurname
                                .bind(this)}/>

                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="col-sm-3 control-label">Email</label>
                        <div className="col-sm-9">
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="form-control"
                                value={this.state.email}
                                onChange={this
                                .changeEmail
                                .bind(this)}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="col-sm-3 control-label">Hasło</label>
                        <div className="col-sm-9">
                            <input
                                type="password"
                                id="password"
                                placeholder="Hasło"
                                className="form-control"
                                value={this.state.password}
                                onChange={this
                                .changePassword
                                .bind(this)}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-9 col-sm-offset-3">
                            <div className="checkbox">
                                <label>
                                    <input
                                        type="checkbox"
                                        value={this.state.terms}
                                        onChange={this
                                        .changeTerms
                                        .bind(this)}/>

                                    Akceptuje { }

                                    <a href="#">
                                        regulamin</a>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-9 col-sm-offset-3">
                            <button type="submit" className="btn btn-primary btn-block" onClick={this.register.bind(this)}>Zarejestruj</button>
                        </div>
                    </div>
                </form>
            </div>
           )
    }
}

export default RegistrationForm;
