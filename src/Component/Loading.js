import React, { Component } from 'react';
import loading from './loading.gif';
class Loading extends Component {
    render() {
        return (
            <div style={{textAlign: "center" }}>
                <img src={loading} alt="" />
            </div>
        );
    }
}

export default Loading;