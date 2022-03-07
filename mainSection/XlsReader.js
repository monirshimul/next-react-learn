import React,{useState} from 'react'
import * as XLSX from "xlsx";
function XlsReader() {

    const [xlData, setSlData] = useState([])
    const onChange = (e) => {
        const [file] = e.target.files;
        const reader = new FileReader();

        reader.onload = (evt) => {
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: "binary" });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_to_json(ws);
            console.log("xl data========================", data);
            setSlData(data)
            
        };
        reader.readAsBinaryString(file);
    };
    return (
        <div>
        <div>
            <label>Provide File</label>
            <input type="file" onChange={onChange} />
        </div>
        <div>
            {
                xlData.map((d,i)=>(
                    <div key={i}>
                    <p>Nid : <span>{d.nid}</span></p>
                    <p>Mobile : <span>{d.mobile_no}</span></p>
                    </div>
                    
                ))
            }
        </div>
        </div>
    )
}

export default XlsReader