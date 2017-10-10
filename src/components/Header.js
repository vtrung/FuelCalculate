import React from 'react';

const Header = ({message}) => {
    return (
        <div className="Header">
            {message}
        </div>
    )
}

Header.propTypes = {
    message: React.PropTypes.string
}
export default Header;