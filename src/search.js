'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import hhha from './images/hhha.png'

class Search extends React.Component{

    render(){
        return <div className='search-text'>
            
            Search Text Brian 
            <img src={hhha}  />
            </div>;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);