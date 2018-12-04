import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {
        liens: [{
            root: '',
            title: 'Home Page'
        },{
            root: 'categories',
            title: 'Categories'
        },
        {
            root: 'random',
            title: 'Random'
        }]
    }
    render() {
        return(
            <header>
                <nav>
                    {this.state.liens.map(lien => (
                        <Link className={'header-link'} to={`/${lien.root}`} key={lien.title}>
                        {lien.title} 
                      </Link>
                    ))}
                </nav>
            </header>
        )
    }
}

export default Header;