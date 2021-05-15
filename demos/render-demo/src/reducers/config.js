/* global document:true */
import {getAction} from '../actions/constants';

export default function config(state = null, action) {
    if (action.type === getAction('READ_CONFIG')) {
        //return JSON.parse(document.getElementById('_dash-config').textContent);
        return {"url_base_pathname": null, "requests_pathname_prefix": "/", "ui": true, "props_check": true, "show_undo_redo": false, "suppress_callback_exceptions": false, "update_title": "Updating...", "hot_reload": {"interval": 3000, "max_retry": 8}}
    }
    return state;
}
