import React from 'react';
import Button from 'react-bootstrap/Button';
import '../style/header.css';
import { useTranslation } from 'react-i18next';



const Header = () => {
    const { t, i18n } = useTranslation();

    function handleClick(lang){
      i18n.changeLanguage(lang);
  }
   
    

return (
         <div className="header">
            <div className="lan-button">

            <Button className="lan-button-en" 
            variant="outline-danger"
            onClick={()=>handleClick('en')}
            >English</Button>

            <Button variant="outline-info"
            onClick={()=>handleClick('we')}
            >Welsh</Button>

            
            </div>
        </div> 
    );
};

export default Header;