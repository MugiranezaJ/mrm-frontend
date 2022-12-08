import React, { useCallback, useEffect, useState } from "react";
import { read, utils, writeFileXLSX } from 'xlsx';

export default function Table({ tableData }) {
  /* the component state is an array of presidents */
  const [pres, setPres] = useState([]);

  /* Fetch and update the state once */
  useEffect(() => { (async() => {
    const f = await (await fetch(tableData?.link)).arrayBuffer();
    const wb = read(f); // parse the array buffer
    const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
    const data = utils.sheet_to_json(ws); // generate objects
    setPres(data); // update state
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
      <h1>{tableData?.name}</h1>
      <table className="fl-table">
        <thead>
          <th>2000</th>
          <th>2001</th>
          <th>2002</th>
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
              <td colSpan={3}>
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