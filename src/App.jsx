import React, { useEffect, useState } from 'react';
import './App.css';
import TableBootstrap from 'react-bootstrap/Table';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const YourComponent = () => {
  const [data1, setData1] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch('http://api2.thaiwater.net:9200/api/v1/thaiwater30/api_service?mid=105&eid=8wwwmG5SA3gIoNQ9sSuxjb1jcaDpYmf0bCGipCWXY2V7k9qtilXyQDC--kI_zydj7uVtQcypDdjL0XADaHo3-Q');
        const response2 = await fetch('http://api2.thaiwater.net:9200/api/v1/thaiwater30/api_service?mid=098&eid=EJ2-FJ9n6Kz1IbqwNiqWwy_PeDM3ELfTyJfjAReATSxx5x6PRiQiznOrkLghjQmLdhlCN7xyJLsBoOAdUL1b8w');

        if (!response1.ok || !response2.ok) {
          throw new Error('Failed to fetch data');
        }

        const json1 = await response1.json();
        const json2 = await response2.json();

        const mergedData = json1.map(item1 => {
          const matchingItem = json2.find(item2 => item2.tele_station_id === item1.id);
          return { ...item1, ...matchingItem };
        });

        setData1(mergedData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const exportToExcel = () => {
    const formattedData = data1.map(item => ({
      id: item.id,
      name: item.tele_station_name['th'],
      oldCode: item.tele_station_oldcode,
      LatLong: `${item.tele_station_lat}, ${item.tele_station_long}`,
      date: item.rainfall_date_calc,
      rainfall10m: item.rainfall10m,
      rainfall1h: item.rainfall1h,
      rainfall24h: item.rainfall24h,
      rainfall_today: item.rainfall_today,

    }));

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    saveAs(data, 'data.xlsx');
  };



  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data from API 1 and API 2</h1>
      <div className="button-container">
  <button onClick={exportToExcel} className="export-button" >Export to Excel</button>
</div><br/>
      <TableBootstrap striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>tele_station_oldcode</th>
            <th>Lat Long</th>
            <th>Date</th>
            <th>rainfall10m</th>
            <th>rainfall1h</th>
            <th>rainfall24h</th>
            <th>rainfall_today</th>
          </tr>
        </thead>
        <tbody>
          {data1.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.tele_station_name['th']}</td>
              <td>{item.tele_station_oldcode}</td>
              <td>{`${item.tele_station_lat}, ${item.tele_station_long}`}</td>
              <td>{item.rainfall_date_calc}</td>
              <td>{item.rainfall10m}</td>
              <td>{item.rainfall1h}</td>
              <td>{item.rainfall24h}</td>
              <td>{item.rainfall_today}</td>
            </tr>
          ))}
        </tbody>
      </TableBootstrap>
    </div>
  );
};

export default YourComponent;
