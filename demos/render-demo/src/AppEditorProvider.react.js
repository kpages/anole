import React from 'react';
import {Provider} from 'react-redux';

import initializeStore from './store';
import AppContainer from './AppContainer.react';

import PropTypes from 'prop-types';
import TreeContainer from './TreeContainer';
import { DashEditorRenderer } from './DashRenderer';

const store = initializeStore();

const AppEditorProvider = ({layout}) => {
    return (
        <Provider store={store}>
            <TreeContainer
                _dashprivate_layout={layout}
                _dashprivate_path={[]}
            />
        </Provider>
    );
};

// AppEditorProvider.propTypes = {
//     layout: PropTypes.object({
//         type: PropTypes.string,
//         namespace: PropTypes.string,
//         props: PropTypes.object
//     }),
// };

// AppEditorProvider.defaultProps = {
//     layout: {
//         type: "Div",
//         namespace: "dash_html_components",
//         props: {
//             children: "xxxsss"
//         }
//     },
// };

export default AppEditorProvider;
