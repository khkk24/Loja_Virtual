import React from 'react';
import './styles.css';
import Button from 'react-bootstrap/Button';

const Btn = ({onTouchable, type, isSumbit ,...props }) => { 

    let typeClass = ""

    switch(type) {
      case 'primary':
        typeClass = 'botao-primario '
        break;
      case 'secondary':
        typeClass = 'botao-secundario'
        break;
      case 'terciary':
        typeClass = 'botao-terciario'
        break;
      case 'primary-sm':
        typeClass = 'botao-primario-sm'
        break;
      case 'secondary-sm':
        typeClass = 'botao-secundario-sm'
        break;  
      case 'terciary-sm':
        typeClass = 'botao-terciario-sm'
        break;
      case 'primary-X':
          typeClass = 'botao-primario-X'
          break;
      
    }

    return isSumbit ? 
    <Button type='submit' className={typeClass} >{props.text}</Button> :
    
    <Button className={typeClass} onClick={() => onTouchable()} >{props.text}</Button>;
  };


  
export default Btn;