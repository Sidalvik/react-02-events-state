import React from 'react';
import PropTypes from 'prop-types';

function IconSwitch(props) {
    const {icon, onSwitch} = props;

    return (
        <span className='material-icons icon-switch' onClick = {onSwitch}>{icon}</span>
    )
}

IconSwitch.propTypes = {
    icon: PropTypes.string.isRequired,
    onSwitch: PropTypes.func.isRequired,
}

export default IconSwitch
