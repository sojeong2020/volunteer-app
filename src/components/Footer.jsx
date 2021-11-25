import React from 'react';
import '../style/footer.css';

const Footer = ({t, i18n}) => {
    return (
        <div className="footer">
            <p><strong>{t('contact')}</strong></p><br />
            <p><strong>{t('policies')}</strong></p>
        </div>
    );
};

export default Footer;