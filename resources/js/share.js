/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import Share from './jsx/share.jsx';
import Wrapper from './jsx/wrapper.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
    <Wrapper>
        <Share/>
    </Wrapper>,
    document.getElementById('shareIcons')
);
