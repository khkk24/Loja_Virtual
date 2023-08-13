import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const TitleBanner= (props) => {
    return (
           <h1 className='text-banner'>{props.text}</h1>
        
      );
}

export default TitleBanner;



