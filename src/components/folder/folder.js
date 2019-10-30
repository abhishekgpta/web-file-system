import React from 'react';
import folder_logo from '../../assets/folder_shape.png';
class Folder extends React.Component {
    handleDoubleClick=(e)=>{
        const {name,children,type,path} = this.props;
        const data = {
            name,children,type,path
        }
        this.props.handleDoubleClick(data)
    }
    render() {
        const {name} = this.props
        return <div className="d-flex justify-content-center pt-3 folder_container">
            <figure onDoubleClick={this.handleDoubleClick} name={name}>
                <img src={folder_logo} name={name} className="App-logo" alt="folder_logo" />
                <figcaption><small>{name}</small></figcaption>
            </figure>
        </div>
    }
}
export default Folder;