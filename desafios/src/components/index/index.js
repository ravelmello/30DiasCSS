import React, { Component } from 'react';
import {ReactComponent as Hacker} from '../../hacker.svg';
import {Link} from 'react-router-dom'
import './styles.css';

class Index extends Component {

    render() {
        return(
            <div className="challenge">
                <div>
                    <Hacker />
                </div>
                <div>
                    <Link to="/dia/1">Desafio 30 Dias CSS3</Link>
                </div>
          </div>
        );
    }

}

export default Index;