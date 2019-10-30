import React from 'react';
import close from '../../assets/close.svg';
import folder from '../../assets/folder_shape.png';
import file from '../../assets/file_shape.png';
function InfoWindowContent(props) {
    const { type, name, date, creatorName, size } = props.infoModalData;
    return (
        <div className="p-4 create-new___modal">
            <div className="d-flex justify-content-center">
                <div style={{ fontSize: "20px" }}><strong>File Info</strong></div>
                <div className="position-absolute p-3" style={{ right: "15px", top: "10px" }}>

                    <img src={close} className="App-logo float-right" alt="close" onClick={props.handleCloseModal} />
                </div>
            </div>
            <div className="d-flex justify-content-center mt-3">
                {
                    type === "FOLDER" ?
                        <img src={folder} name={name} className="App-logo" alt="folder_logo" ></img> :
                        <img src={file} name={name} className="App-logo" alt="folder_logo" ></img>
                }
            </div>
            <div>
                <div className="d-flex p-2 justify-content-center">
                    <div className="mr-2 text-right w-50"><strong>Name:</strong></div>
                    <div className="w-50">{name}</div>
                </div>
                <div className="d-flex p-2 justify-content-center">
                    <div className="mr-2 text-right w-50"><strong>Size:</strong></div>
                    <div className="w-50">{size}</div>
                </div>
                <div className="d-flex p-2 justify-content-center">
                    <div className="mr-2 text-right w-50"><strong>Creator name:</strong></div>
                    <div className="w-50">{creatorName}</div>
                </div>
                <div className="d-flex p-2 justify-content-center">
                    <div className="mr-2 text-right w-50"><strong>Creator date:</strong></div>
                    <div className="w-50">{date}</div>
                </div>
            </div>
        </div>
    );
}
export default InfoWindowContent;