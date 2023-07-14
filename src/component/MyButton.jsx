import React from 'react'
import XLSX from 'xlsx';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
function MyButton() {
    function handleClick() {
        alert('You clicked me!');
      }
      
  return (
   
     <button onClick={exportToExcel}>Export to Excel</button>

  )
}

export default MyButton