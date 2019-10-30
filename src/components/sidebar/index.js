import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Collpase from './collpase';
class Sidebar extends React.Component {
    state = {
        visible: false
    }
    cloneObj = obj => {
        if (Object(obj) !== obj) return obj;
        else if (Array.isArray(obj)) return obj.map(this.cloneObj);
    
        return Object.fromEntries(
            Object.entries(obj).map(([k, v]) => [k, this.cloneObj(v)])
        );
    };
    
    convertObject2Tree = _list => {
        const root = [];
        let list = this.cloneObj(_list); // create empty list to hold copy
        Object.keys(list).forEach((nodeID, index) => {
            if (!list[nodeID].parentID) return root.push(list[nodeID]);
            let parentID = list[nodeID].parentID;
    
            if (list[parentID]) {
                let index = list[parentID].children.indexOf(nodeID);
                if (index !== -1) list[parentID].children.splice(index, 1);
                if (list[nodeID].type === "FOLDER") {
                    list[parentID].children.push(list[nodeID]);
                }
            }
        });
        return root;
    };
    sideBarHandler = (children = []) => {
        if (children.length > 0) {
            let tempArr = [];
            for (let i = 0; i < children.length; i++) {
                let dir = children[i];
                if (dir.type === "FOLDER") {
                    let childDir = this.sideBarHandler(dir.children) || [];
                    if (childDir.length > 0) {
                        tempArr.push(<Collpase key={`${i}-${dir.name}`}>
                        {
                            (visible, toggleVisible)=>{
                            return <li className={ dir.path === this.props.match.url? "mb-2 mt-2 pl-2 sideBar-selected":"mb-2 mt-2 pl-2 "}>
                                <Link to={dir.path} className="main_Link p-2" onClick={() => {
                                        toggleVisible()
                                    }}>
                                <span className="text-dark">{dir.name}</span>
                                    {
                                        visible?<span className="text-dark float-right pr-2" aria-hidden="true"><small>&#9650;</small></span>:
                                        <span className="text-dark float-right pr-2" aria-hidden="true"><small> &#9660;</small></span>
                                    }
                                    
                            </Link>
                                <ul className={visible ? "" : "collapse"} >{childDir}</ul>
                            </li>
                        }}
                        </Collpase>)
                    }
                    else {
                        tempArr.push(<Collpase key={`${i}-${dir.name}`}>
                        {
                            (visible,toogleVisible)=>{
                                return <li className={ dir.path === this.props.match.url? "mb-2 mt-2 pl-2 sideBar-selected":"mb-2 mt-2 pl-2 "}>
                                <Link to={dir.path} className="main_Link p-2" onClick={() => {
                                        toogleVisible()
                                    }}>
                                    <span className="text-dark">{dir.name}</span>
                                </Link>
                            </li>

                            }
                        }
                        </Collpase>)
                    }
                }
            }

            return tempArr;
        }
    }
    render() {
        const data = this.convertObject2Tree(this.props.data.fileSystem);
        return (
            <nav id="sidebar" className="sidebar-wrapper">
                <div className="sidebar-content">
                    <div className="sidebar-menu">
                        <ul>
                            <li className="sidebar-dropdown mb-2 mt-2">
                                <Link to="/" className="main_Link p-2">
                                    ROOT
                            </Link>
                                <div className="sidebar-submenu mt-5">
                                    <ul>
                                        {
                                            this.sideBarHandler(data[0].children)
                                        }
                                    </ul>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default withRouter(Sidebar);