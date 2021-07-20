import React from 'react';
import NavTabs from './NavTabs';
import NavLinks from './NavLinks';

const Header = (props) => {

    return (
        <>
        <div className="container background">
        <h1>Nathan Zerr</h1>
        <ul className="nav nav-tabs">
      <NavLinks {...props} />
    </ul>
    </div>
        </>
    );
}

export default Header