import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
class NavigationBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse" data-spy="affix" data-offset-top={197}>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="#">Icarus</a>
                        </li>

                    </ul>
                    <ul className="nav navbar-nav navbar-right">

                        <li>
                            <a
                                href="#"
                                onClick={this
                                .props
                                .chatClick
                                .bind(this)}><FontAwesome name='comments-o' size='2x'/></a>
                        </li>

                        <li>
                            <a
                                href="#"
                                onClick={this
                                .props
                                .userProfilClick
                                .bind(this)}><FontAwesome name='user-circle' size='2x'/></a>
                        </li>

                    </ul>

                </nav>
            </div>

        )
    }
}

export default NavigationBar;
