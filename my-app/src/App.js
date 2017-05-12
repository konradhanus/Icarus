import React, {Component} from 'react';

class Konrad extends Component {

    render() {
        return (
            <div>Konrad Hanus is Awesome</div>
        );
    }
}

class Adam extends Component {

    render() {
        return (

            <div>Adam Rusnak</div>

        );
    }

}

class App extends Component {
    render() {
        return (
            <div className="App">

                <Adam></Adam>

                <Konrad/>
            </div>
        );
    }
}

export default App;
