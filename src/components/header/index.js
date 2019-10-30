import React from 'react';
import arrow from '../../assets/arrow-circle-up-solid.svg'
import search from '../../assets/search.svg'
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
                <div className="ml-auto col-md-4 mr-4 position-relative " style={{border:"1px solid #ced4da",borderRadius:"8px",height:"32px"}}>
                    <div className="position-absolute" style={{"pointerEvents":"none","left":"10px"}}>
                    <img src={search} className="App-logo" alt="search"  onClick={this.handleBackButton} style={{opacity: "0.5",width:"16px"}}></img>
                    </div>
                <input type="text" className="border-0 pl-4 w-100" id="fileSystemSearch"
                 placeholder="Search for anything" name="fileName" onChange={this.handleFormState} value="" style={{"outline":"none"}}></input>
                </div>
            </div>
        )
    }
}
export default DirHeader;