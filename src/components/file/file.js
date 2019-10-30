import React from 'react';
import file_logo from '../../assets/file_shape.png';
class File extends React.Component {
    render() {
        const { name = "" } = this.props;
        const fileExt = name.split(".")[1];
        return <div className="d-flex justify-content-center pt-3">
            <figure className="position-relative">
                <img src={file_logo} className="App-logo" alt="file_logo" />
                <div className="position-absolute text-white" style={{
                    left: "7px",
                    bottom: "25px"
                }}><small>{fileExt}</small></div>
                <figcaption><small>{this.props.name}</small></figcaption>
            </figure>
        </div>
    }
}
export default File;