import React, { Component } from 'react';
import {
    requireNativeComponent,
    View,
    Text
} from 'react-native';
import PropTypes from 'prop-types';

class ProgressBar extends Component {
    render() {
        console.log(this.props);
        return (
            <ProgressBarComponent {...this.props} />
        );
    }
}

const iface = {
    name: 'ProgressBar',
    propTypes: {
        progress: PropTypes.number,
        indeterminate: PropTypes.bool,
        ...View.propTypes // include the default view properties,
    },
};

const ProgressBarComponent = requireNativeComponent('ProgressBar', iface);

export default ProgressBar;
