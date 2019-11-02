import React from 'react';
import folder_logo from '../../assets/folder_shape.png';


function Folder(props){
    const {name} = props;
    const handleDoubleClick=(e)=>{
        const {name,children,type,path} = props;
        const data = {
            name,children,type,path
        }
        props.handleDoubleClick(data);
    }
    return(
        <div className="d-flex justify-content-center pt-3 folder_container">
            <figure onDoubleClick={handleDoubleClick} name={name}>
                <img src={folder_logo} name={name} className="App-logo" alt="folder_logo" />
                <figcaption><small>{name}</small></figcaption>
            </figure>
        </div>
    )
}
export default Folder;