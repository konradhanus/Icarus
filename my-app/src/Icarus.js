import React, {Component} from 'react';

class Icarus extends Component {
    render() {
        return (
            <div className="Icarus">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="col-md-9">
                                <ul class="nav nav-tabs">
                                    <li class="active">
                                        <a href="#">Główny</a>
                                    </li>
                                    <li>
                                        <a href="#">Prywatny</a>
                                    </li>
                                </ul>
                                // Left-aligned
                                <div class="media">
                                    <div class="media-left">
                                        <img src="https://api.adorable.io/avatars/80/konrad" class="width80 media-object"/></div>
                                    <div class="media-body cloud">
                                        <h4 class="media-heading">John Doe</h4>
                                        <p>Lorem ipsum...</p>
                                    </div>
                                </div>
                                // Right-aligned
                                <div class="media">
                                    <div class="media-body cloud">
                                        <h4 class="media-heading">John Doe</h4>
                                        <p>Lorem ipsum dolor sitd do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                    <div class="width80 media-right">
                                        <img src="https://api.adorable.io/avatars/80/adam" class="media-object"/></div>
                                </div>
                                <div class="clearfix space"></div>
                                <div class="input-group">
                                    <input type="text" class="form-control"></input>
                                    <div class="input-group-btn">
                                        <input type="button" value="WYŚLIJ" class="btn btn-default"></input>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">

                                <div class="list-group">
                                    <a href="#" class="list-group-item active">User 1</a>
                                    <a href="#" class="list-group-item">User 2</a>
                                    <a href="#" class="list-group-item">User 3</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
