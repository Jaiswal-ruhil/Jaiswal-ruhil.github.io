/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import TagsView from './jsx/tags.jsx';
import Wrapper from './jsx/wrapper.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const scriptVal = document.currentScript.getAttribute('tags')
const tags = scriptVal.split(',')

ReactDOM.render(
    <Wrapper>
        <TagsView tags={tags}/>
    </Wrapper>,
    document.getElementById('integrateTags')
);
