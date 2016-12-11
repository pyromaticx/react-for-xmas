import React from 'react';
import InfoPanel from './InfoPanel.jsx';
import DateCountDown from './DateCountDown.jsx';

const Header = (/*{brandImg}*/) => {
  // const brandLogo = brandImg || './img/santa.png';
  const logoStyle = {
    backgroundImage: './img/santa.png',
    height: '100px',
    width: '100px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: '30px'
  };

  return (
    <nav className='navbar navbar-default'>
      <div className='container-fluid'>
        <div className='navbar header'>
          <div className='row'>
            <div className="col-xs-12 col-sm-1 col-sm-1 col-sm-offset-1">
              <div style={logoStyle} className="container-fluid"></div>
            </div>
            <div className="col-xs-12 col-sm-8 col-sm-offset-1">
              <DateCountDown
                targetDate="December 25, 2016 00:00:00"
                countDownTitle="'Till Christmas!"/>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
