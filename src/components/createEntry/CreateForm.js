import React from 'react';
import close from '../../assets/close.svg';
import md5 from 'md5';
class CreateForm extends React.Component{
    constructor(props){
        super(props);
        let currentDate = new Date();
        let currntMonth = currentDate.getMonth()+1<10?"0"+(currentDate.getMonth()+1):currentDate.getMonth()+1;
        let dateNumber = currentDate.getDate()<10?"0"+currentDate.getDate():currentDate.getDate();
        this.state={
            createType:"FOLDER",
            fileName:"",
            createdBy:"",
            createdAt:`${currentDate.getFullYear()}-${currntMonth}-${dateNumber}`,
            size:"0"
        }
    }

    handleFormState=(e)=>{
        const name = e.target.name;
        if(name==="FILE" || name==="FOLDER"){
            this.setState({
                createType:name
            })
        }
        else{
            const value = e.target.value;
            this.setState({
                [name]:value
            })
        }

    }
    handleAddFileFolder = (data) => {
        this.props.addEntry({
            ...data,
            parentID: md5(this.props.match.url + "FOLDER"),
            parentPath: this.props.match.url
        })
    }
    handleCreate=()=>{
        let {createType:type,
        fileName:name,
        createdBy,
        createdAt,size}=this.state;
        this.handleAddFileFolder({
            name,type,creatorName:createdBy,date:createdAt,size
        })
        this.props.handleCloseModal();
    }
    render(){
        let {createType,fileName,createdBy,createdAt,size}=this.state;
        return <div className="p-4 create-new___modal">
        <h5 className="text-center">Create New
            <img src={close} className="App-logo float-right" alt="close" onClick={this.props.handleCloseModal} />
        </h5>
        <form className="text-center mt-3 create-new-form___modal">
            <div className="btn-group create-new-form-type___modal">
                <button type="button" className={createType==="FILE"?"btn btn-primary":"btn btn-outline-secondary"} name="FILE" onClick={this.handleFormState}>File</button>
                <button type="button" className={createType==="FOLDER"?"btn btn-primary":"btn btn-outline-secondary"} name="FOLDER" onClick={this.handleFormState}>Folder</button>
            </div>
            <div className="mt-3">
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" name="fileName" onChange={this.handleFormState} value={fileName}></input>
            </div>
            <div className="mt-3">
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Creator" name="createdBy" onChange={this.handleFormState} value={createdBy}></input>
            </div>
            <div className="mt-3">
                <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="Date" name="createdAt" disabled={true} onChange={this.handleFormState} value={createdAt}></input>
            </div>
            <div className="mt-3">
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Size" name="size" onChange={this.handleFormState} value={size}></input>
            </div>
            <button type="button" className="btn btn-primary mt-3" onClick={this.handleCreate}>Create</button>
        </form>
    </div>
    }
}
export default CreateForm;