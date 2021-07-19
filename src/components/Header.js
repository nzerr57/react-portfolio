import React from 'react';
import NavTabs from './NavTabs';
import NavLinks from './NavLinks';

const Header = (props) => {

    return (
        <>
        <h1 class="background">Nathan Zerr</h1>
        <ul className="nav nav-tabs">
      <NavLinks {...props} />
    </ul>
        </>
    );
}

export default Header