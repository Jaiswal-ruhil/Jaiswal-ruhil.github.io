/* eslint-disable no-invalid-this */
/* eslint-disable no-unused-vars */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class Wrapper extends Component {

    static childContextTypes = {
        'muiTheme': PropTypes.object.isRequired
    }

    // eslint-disable-next-line class-methods-use-this
    getChildContext () {
        return {
            'muiTheme': getMuiTheme(baseTheme)
        }
    }

    render = () => <div>{this.props.children}</div>
}
