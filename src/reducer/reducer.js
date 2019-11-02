import initialState from '../utils/fileSystemData';

import md5 from 'md5';

export default (state = initialState, action) => {
    switch (action.type) {
      case "ADD_DATA": {
        const newEntry = action.payload;
        return addData(state, newEntry);
      }
      case "DELETE_DATA": {
        return deleteData(state, action.payload);
      }
      default:
        return state;
    }
  };
  export const addData = (data, newData) => {
    let oldEntryCount = 0;
    let fileName = newData.name;
    
    data[newData.parentID].children.forEach(elementId => {
        if (
            data[elementId].name.includes(fileName) &&
            data[elementId].type === newData.type
        ) {
            oldEntryCount++;
            let fileNameArr = newData.name.split(".");
            if(fileNameArr.length >= 2){
                fileNameArr[fileNameArr.length - 2] = `${fileNameArr[fileNameArr.length - 2]}(${oldEntryCount})`;
            }
            else{
                fileNameArr[fileNameArr.length - 1] = `${fileNameArr[fileNameArr.length - 1]}(${oldEntryCount})`;
            }
            fileName = fileNameArr.join(".");
        }
    });
    newData.name = fileName;
    
    newData.path =
        newData.parentPath === '/'
            ? `${newData.parentPath}${newData.name}`
            : `${newData.parentPath}/${newData.name}`;

    if (newData.type === "FOLDER") {
        newData.children = [];
    }

    const id = md5(newData.path + newData.type);
    data[id] = newData;
    data[newData.parentID].children.push(id);
    localStorage.setItem('fileSystem', JSON.stringify(data));

    return { ...data };
};


  const deleteData = (data, entryID) => {
    const entry = data[entryID];
    if (entry.type === "FOLDER") {
        entry.children.forEach(id => {
            deleteData(data, id);
        });
    }
    let parentID = data[entryID].parentID;
    let index = data[parentID].children.indexOf(entryID);
    if (index !== -1) data[parentID].children.splice(index, 1);
    delete data[entryID];
    localStorage.setItem('fileSystem', JSON.stringify(data));
    return { ...data };
};