/* eslint-env browser */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppProvider from './AppProvider.react';
import AppEditorProvider from './AppEditorProvider.react';


class DashRenderer {
    constructor(hooks) {
        // render Dash Renderer upon initialising!
        ReactDOM.render(
            <AppProvider hooks={hooks} />,
            document.getElementById('react-entry-point')
        );
    }
}

class DashEditorRenderer {
    constructor(layout) {
        // render Dash Renderer upon initialising!
        ReactDOM.render(
            <AppEditorProvider 
                layout={layout}
            />,
            document.getElementById('react-entry-point')
        );
    }
}

export {DashRenderer, DashEditorRenderer};
