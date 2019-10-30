import React from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
class File extends React.Component {
    render() {
        const {dir_key,dir_content,handleContextMenu}=this.props;
        return <ContextMenu id={`${dir_key}-${dir_content.name}`} >
        {dir_content.type==="FOLDER"? <MenuItem data={{ data: dir_content, type:"open" }} onClick={handleContextMenu}>
            Open
        </MenuItem>:""
        }
        <MenuItem data={{ data: dir_content, type:"get_info" }} onClick={handleContextMenu}>
            Get Info
        </MenuItem>
        <MenuItem divider />
        <MenuItem data={{ data: dir_content, type:"delete" }} onClick={handleContextMenu}>
            Delete
        </MenuItem>
    </ContextMenu>
    }
}
export default File;