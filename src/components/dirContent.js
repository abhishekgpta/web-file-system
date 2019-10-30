import React from 'react';
import Folder from './folder/folder';
import File from './file/file';
import ContextMenu from './contextMenu';
import { ContextMenuTrigger } from "react-contextmenu";


function DirContent(props) {
    let {dirChildren,handleContextMenu,handleDoubleClick} = props
  return (
    dirChildren.map((dir_content, dir_key) => {
        if (dir_content.type === "FOLDER") {
            return <div key={dir_key} className="col-md-1 text-center">
                <ContextMenuTrigger id={`${dir_key}-${dir_content.name}`} hideOnLeave={true} >
                    <Folder {...dir_content} handleDoubleClick={handleDoubleClick} />
                </ContextMenuTrigger>
                <ContextMenu dir_content={dir_content} dir_key={dir_key} handleContextMenu={handleContextMenu}/>
            </div>
        }
        else {
            return <div key={dir_key} className="col-md-1 text-center">
                <ContextMenuTrigger id={`${dir_key}-${dir_content.name}`} hideOnLeave={true} >
                <File {...dir_content} />
                </ContextMenuTrigger>
                <ContextMenu dir_content={dir_content} dir_key={dir_key} handleContextMenu={handleContextMenu}/>
                </div>
        }
    })
  );
}
export default DirContent;