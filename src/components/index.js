import React from 'react';
import { connect } from 'react-redux'
import { addEntry, deleteEntry } from '../action/action';
import { withRouter } from 'react-router-dom';
import md5 from 'md5';
import ReactModal from 'react-modal';
import InfoWindow from './infoWindow';
import Add from './createEntry/add';
import Sidebar from './sidebar';
import DirContent from './dirContent';
import DirHeader from './header';
class Index extends React.Component {
    state = {
        showInfoWindow: false,
        infoModalData: {}
    }
    showPathEntries = (parentPath, fileSystem) => {
        return fileSystem[md5(parentPath + "FOLDER")]
            ? fileSystem[md5(parentPath + "FOLDER")].children.map(
                childrenID => fileSystem[childrenID]
            )
            : [];
    };
    handleContextMenu = (event, data) => {
        if (data.type === "delete") {
            this.props.deleteEntry(md5(data.data.path + data.data.type))
        }
        else if (data.type === "open") {
            this.props.history.push(data.data.path);
        }
        else if (data.type === "get_info") {
            this.setState({
                showInfoWindow: true,
                infoModalData: data.data
            })
        }
    }
    handleDoubleClick = (data) => {
        if (data.type === "FOLDER") {
            this.props.history.push(`${data.path}`);
        }
    }
    handleCloseModal = () => {
        this.setState({
            showInfoWindow: false
        })
    }

    render() {
        const dirChildren = this.showPathEntries(this.props.match.url, this.props.data.fileSystem);
        return <div>
            <Sidebar {...this.props} />
            <main className="main_content">
                <div className="container-fluid mt-3 file-system__container">
                    <DirHeader {...this.props} />
                    <div className="row align-items-end mt-5">
                        <DirContent dirChildren={dirChildren} handleDoubleClick={this.handleDoubleClick} handleContextMenu={this.handleContextMenu} />
                        <div className="col-md-1 text-center"><Add {...this.props} /></div>
                        <ReactModal
                            isOpen={this.state.showInfoWindow}
                            onRequestClose={this.handleCloseModal}
                            shouldCloseOnEsc={true}
                            className="file-system__modal"
                            contentLabel="Minimal Modal Example"
                        >
                            <InfoWindow handleCloseModal={this.handleCloseModal} infoModalData={this.state.infoModalData} {...this.props} />
                        </ReactModal>
                    </div>
                </div>
            </main>
        </div>
    }
}
const mapStateToProps = state => ({
    data: state
});

export default withRouter(connect(
    mapStateToProps,
    { addEntry, deleteEntry }
    // mapDispatchToProps
)(Index))