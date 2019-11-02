import React from 'react';
import file_logo from '../../assets/file_shape.png';
import folder_logo from '../../assets/folder_shape.png';

function FSSearch({ searchQuery, filteredRecords, handleNavigation, globalSearch, handleInputChange }) {
    return (
        searchQuery ? <div className="search_result__fileSystem position-absolute bg-dark text-white w-100"
        >
            <div className="p-2">
                <input name="globalSearch" type="checkbox" id="globalCheck"
                    checked={globalSearch}
                    className="mr-2"
                    onChange={handleInputChange}
                    style={{
                        verticalAlign: "middle"
                    }} />
                <label className="m-0" htmlFor="globalCheck">Search global</label>
            </div>
            {
                filteredRecords.length > 0 ? filteredRecords.map((records, records_key) => {
                    let name = records.name;
                    let isPresent = name.match(searchQuery);
                    let str1 = "", str2 = name, str0 = "";
                    if (isPresent) {
                        let endIndex = isPresent.index + searchQuery.length;
                        str0 = name.substring(0, isPresent.index);
                        str1 = name.substring(isPresent.index, endIndex);
                        str2 = name.substring(endIndex, name.length);
                    }
                    return <div className="p-2" key={records_key + "sr"} onClick={() => { handleNavigation(records) }}>
                        {
                            records.type === "FILE" ? <img src={file_logo} className="App-logo mr-2" alt="file_logo"
                                style={{ width: "30px", height: "30px" }} /> :
                                <img src={folder_logo} className="App-logo mr-2" alt="file_logo" style={{ width: "30px" }} />
                        }
                        <span>{str0}</span><span className="text-danger">{str1}</span><span>{str2}</span>
                        <span className="float-right"><small>path: {records.path}</small></span>
                    </div>
                }) : <div className="p-2 text-center">
                        <em>No records found</em>
                    </div>
            }

        </div> : ""
    )
}

export default FSSearch;