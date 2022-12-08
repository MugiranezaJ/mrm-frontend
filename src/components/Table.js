import React, { useCallback, useEffect, useState } from "react";
import { read, utils, writeFileXLSX } from 'xlsx';

export default function Table({ tableData }) {
  const [pres, setPres] = useState([]);
  const [sheetName, setSheetName] = useState('')

  useEffect(() => { (async() => {
    const f = await (await fetch(tableData?.link)).arrayBuffer();
    const wb = read(f); 
    const ws = wb.Sheets[wb.SheetNames[0]]; 
    const data = utils.sheet_to_json(ws);
    setSheetName(wb.SheetNames[0])
    setPres(data);
  })(); }, []);

  /* get state data and export to XLSX */
  // const exportFile = useCallback(() => {
  //   const ws = utils.json_to_sheet(pres);
  //   const wb = utils.book_new();
  //   utils.book_append_sheet(wb, ws, "Data");
  //   writeFileXLSX(wb, "SheetJSReactAoO.xlsx");
  // }, [pres]);


  return (
    <div className="table-wrapper">
      <h1 className="table-name">{sheetName}</h1>
      <table className="fl-table">
        <thead>
          <tr>
            <th>2000</th>
            <th>2001</th>
            <th>2002</th>
          </tr>
        </thead>
        <tbody>
        { /* generate row for each president */
          pres.length ? (pres.map(pres => (
            <tr key={Math.random()}>
              <td>{pres['2000']}</td>
              <td>{pres['2001']}</td>
              <td>{pres['2002']}</td>
            </tr>
          ))
          ) : (
            <tr className="no-data">
              <td colSpan={3} style={{margin: 'auto'}}>
                No data
              </td>
            </tr>
          )
        }
        </tbody>
        {/* <tfoot>
          <td colSpan={2}>
              <button onClick={exportFile}>Export XLSX</button>
          </td>
        </tfoot> */}
      </table>
    </div>
  )
}