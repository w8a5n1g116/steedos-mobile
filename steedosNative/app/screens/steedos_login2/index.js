// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import {connect} from 'react-redux';
import WebLoginView from './login';
function mapStateToProps(state) {
    console.log('mapStateToProps', state);
    return state || {};
}

function mapDispatchToProps(dispatch) {
    console.log('mapDispatchToProps');
    return {};
}

export default connect(mapStateToProps)(WebLoginView);