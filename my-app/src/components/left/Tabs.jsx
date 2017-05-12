import React, {Component} from 'react';

class Tabs extends Component {
    render() {
        return (
<div>
          <ul className="nav nav-tabs">
              <li className="active">
                  <a href="#">Główny</a>
              </li>
              <li>
                  <a href="#">Prywatny</a>
              </li>
          </ul>

</div>



                )
        }
    }

    export default Tabs;
