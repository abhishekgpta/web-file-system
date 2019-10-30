import React from 'react';
import { withRouter, Link } from 'react-router-dom';
export default class Collapse extends React.Component {
    state = {
        visible: false
    }
    toggleVisible=()=>{
        this.setState({
            visible:!this.state.visible
        })
    }
    render(){
        return<React.Fragment>
            {
                this.props.children(this.state.visible,()=>this.toggleVisible())
            }
        </React.Fragment>
    }
}