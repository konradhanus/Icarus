import React, {Component} from 'react';
class RegistrationForm extends Component {

    render() {
        return (

            <div className="container">
                <form className="form-horizontal" role="form">
                    <h2>Registration Form</h2>
                    <div className="form-group">
                        <label htmlFor="firstName" className="col-sm-3 control-label">Full Name</label>
                        <div className="col-sm-9">
                            <input
                                type="text"
                                id="firstName"
                                placeholder="Full Name"
                                className="form-control"
                                autofocus/>
                            <span className="help-block">Last Name, First Name, eg.: Smith, Harry</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="col-sm-3 control-label">Email</label>
                        <div className="col-sm-9">
                            <input type="email" id="email" placeholder="Email" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="col-sm-3 control-label">Password</label>
                        <div className="col-sm-9">
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="birthDate" className="col-sm-3 control-label">Date of Birth</label>
                        <div className="col-sm-9">
                            <input type="date" id="birthDate" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="country" className="col-sm-3 control-label">Country</label>
                        <div className="col-sm-9">
                            <select id="country" className="form-control">
                                <option>Afghanistan</option>
                                <option>Bahamas</option>
                                <option>Cambodia</option>
                                <option>Denmark</option>
                                <option>Ecuador</option>
                                <option>Fiji</option>
                                <option>Gabon</option>
                                <option>Haiti</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-3">Gender</label>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-4">
                                    <label className="radio-inline">
                                        <input type="radio" id="femaleRadio" defaultValue="Female"/>Female
                                    </label>
                                </div>
                                <div className="col-sm-4">
                                    <label className="radio-inline">
                                        <input type="radio" id="maleRadio" defaultValue="Male"/>Male
                                    </label>
                                </div>
                                <div className="col-sm-4">
                                    <label className="radio-inline">
                                        <input type="radio" id="uncknownRadio" defaultValue="Unknown"/>Unknown
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-3">Meal Preference</label>
                        <div className="col-sm-9">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" id="calorieCheckbox" defaultValue="Low calorie"/>Low calorie
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" id="saltCheckbox" defaultValue="Low salt"/>Low salt
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-9 col-sm-offset-3">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox"/>I accept
                                    <a href="#">terms</a>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-9 col-sm-offset-3">
                            <button type="submit" className="btn btn-primary btn-block">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
};

export default RegistrationForm;