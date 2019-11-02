import React from 'react';
import add_logo from '../../assets/add_shape.png';
import ReactModal from 'react-modal';
import CreateForm from './CreateForm';

ReactModal.setAppElement('#root');
class AddFileFolder extends React.Component {
    state = {
        showModal: false
    }
    handleAdd = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }
    handleCloseModal = () => {
        this.setState({
            showModal: false
        })
    }
    
    render() {
        return <div className="d-flex justify-content-center pt-3">
            <figure onClick={this.handleAdd}>
                <img src={add_logo} className="App-logo w-100" alt="add_logo" />
            </figure>
            <ReactModal
                isOpen={this.state.showModal}
                onRequestClose={this.handleCloseModal}
                shouldCloseOnEsc={true}
                className="file-system__modal"
                contentLabel="Minimal Modal Example"
            >
                <CreateForm handleCloseModal={this.handleCloseModal} {...this.props}/>
            </ReactModal>
        </div>
    }
}
export default AddFileFolder;