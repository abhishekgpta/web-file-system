import React from 'react';
import arrow from '../../assets/arrow-circle-up-solid.svg'

class DirHeader extends React.Component {
    calculatePath=()=>{
        let paths = this.props.match.url.split("/").filter(p=>p);
        let pathArr = [<span key={`${-1}-root`} className="text-secondary" style={{fontSize:"20px"}}><strong>root</strong></span>];
        paths.forEach((path,path_key)=>{
            pathArr.push(<span key={`${path_key}-${path}`} className="text-dark" style={{fontSize:"20px"}}><strong>/{path}</strong></span>)
        })
        return pathArr;
    }
    handleBackButton=()=>{
        let pathArray =this.props.match.url.split("/");
        pathArray.splice(pathArray.length-1,1);
        this.props.history.push(pathArray.join("/"))
    }
    render() {
        return (
            <div className="row pl-3">
                <div className="mr-5">
                    <img src={arrow} className="App-logo" alt="close" style={{ width: "20px" }} onClick={this.handleBackButton}></img>
                </div>
                {this.calculatePath()}
            </div>
        )
    }
}
export default DirHeader;