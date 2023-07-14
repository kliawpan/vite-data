
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TableBootstrap from "react-bootstrap/Table";
import axios from "axios";


// const Table = () =>{
//   const [rainfall, setrainfall] = useState([]);
//   const [province, setprovince] = useState([]);

//   const fetchData = () =>{
//     const rainfall = 'http://api2.thaiwater.net:9200/api/v1/thaiwater30/api_service?mid=098&eid=EJ2-FJ9n6Kz1IbqwNiqWwy_PeDM3ELfTyJfjAReATSxx5x6PRiQiznOrkLghjQmLdhlCN7xyJLsBoOAdUL1b8w';
//     const province = 'http://api2.thaiwater.net:9200/api/v1/thaiwater30/api_service?mid=105&eid=8wwwmG5SA3gIoNQ9sSuxjb1jcaDpYmf0bCGipCWXY2V7k9qtilXyQDC--kI_zydj7uVtQcypDdjL0XADaHo3-Q';

//     const getRainfall = axios.get(rainfall)
//     const getProvince = axios.get(province)
//     axios.all([getRainfall, getProvince]).then(
//       axios.spread((...alldata) => {
//         const allData
//       })
//     )
//   }
// } 




export default function Table() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [rain, setItems] = useState([]);

  useEffect(() => {
 fetch("http://api2.thaiwater.net:9200/api/v1/thaiwater30/api_service?mid=098&eid=EJ2-FJ9n6Kz1IbqwNiqWwy_PeDM3ELfTyJfjAReATSxx5x6PRiQiznOrkLghjQmLdhlCN7xyJLsBoOAdUL1b8w")  
    // fetch("http://api2.thaiwater.net:9200/api/v1/thaiwater30/api_service?mid=105&eid=8wwwmG5SA3gIoNQ9sSuxjb1jcaDpYmf0bCGipCWXY2V7k9qtilXyQDC--kI_zydj7uVtQcypDdjL0XADaHo3-Q")  



    .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

 


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <TableBootstrap striped bordered hover>
        <thead>
          <tr>
            <th scope="col">tele_station_id</th>
            <th scope="col">rainfall</th>
            <th scope="col">date</th>
            <th scope="col">today</th>
          </tr>
        </thead>
        <tbody>
          {rain.map(val => (
            <tr key={val.tele_station_id}>
              <td scope="row">{val.tele_station_id}</td>
         
<td>
  {val.rainfall1h}h : {val.rainfall10m}m : {val.rainfall24h}d
</td>
<td>{val.rainfall_date_calc}</td>
<td>{val.rainfall_today}</td>

            </tr>
          ))}
        </tbody>
        </TableBootstrap>
    );
  }
}




////////////////////////////////////

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TableBootstrap from "react-bootstrap/Table";
import axios from "axios";


const Table = () =>{
const [rainfall, setrainfall] = useState([]);
const [province, setprovince] = useState([]);

const fetchData = () =>{
const rainfall = 'http://api2.thaiwater.net:9200/api/v1/thaiwater30/api_service?mid=098&eid=EJ2-FJ9n6Kz1IbqwNiqWwy_PeDM3ELfTyJfjAReATSxx5x6PRiQiznOrkLghjQmLdhlCN7xyJLsBoOAdUL1b8w';
  const province = 'http://api2.thaiwater.net:9200/api/v1/thaiwater30/api_service?mid=105&eid=8wwwmG5SA3gIoNQ9sSuxjb1jcaDpYmf0bCGipCWXY2V7k9qtilXyQDC--kI_zydj7uVtQcypDdjL0XADaHo3-Q';

   const getRainfall = axios.get(rainfall)
 const getProvince = axios.get(province)
axios.all([getRainfall, getProvince]).then(
  axios.spread((...alldata) => {
     const allDatarainfull = alldata[0]
     const getRainfall = alldata[1]

     console.log(allDatarainfull)
     console.log(getRainfull)
     })
 )
 }
 } 
useEffect(() => {
fetchData()
  
},[])


return(
  <div className="Apps">

  </div>
);
export default App;








////////////////////////////////////////////////////


import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TableBootstrap from "react-bootstrap/Table";
import axios from "axios";



// const Table = () =>{
//   const [rainfall, setrainfall] = useState([]);
//   const [province, setprovince] = useState([]);

//   const fetchData = () =>{
//     const rainfall = 'http://api2.thaiwater.net:9200/api/v1/thaiwater30/api_service?mid=098&eid=EJ2-FJ9n6Kz1IbqwNiqWwy_PeDM3ELfTyJfjAReATSxx5x6PRiQiznOrkLghjQmLdhlCN7xyJLsBoOAdUL1b8w';
//     const province = 'http://api2.thaiwater.net:9200/api/v1/thaiwater30/api_service?mid=105&eid=8wwwmG5SA3gIoNQ9sSuxjb1jcaDpYmf0bCGipCWXY2V7k9qtilXyQDC--kI_zydj7uVtQcypDdjL0XADaHo3-Q';

//     const getRainfall = axios.get(rainfall)
//     const getProvince = axios.get(province)
//     axios.all([getRainfall, getProvince]).then(
//       axios.spread((...alldata) => {
//         const allData
//       })
//     )
//   }
// } 




export default function Table() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [rain, setItems] = useState([]);
  const [rain2, setItem] = useState([]);




  useEffect(() => {
 //const rainfall="http://api2.thaiwater.net:9200/api/v1/thaiwater30/api_service?mid=098&eid=EJ2-FJ9n6Kz1IbqwNiqWwy_PeDM3ELfTyJfjAReATSxx5x6PRiQiznOrkLghjQmLdhlCN7xyJLsBoOAdUL1b8w" 
 //const province="http://api2.thaiwater.net:9200/api/v1/thaiwater30/api_service?mid=105&eid=8wwwmG5SA3gIoNQ9sSuxjb1jcaDpYmf0bCGipCWXY2V7k9qtilXyQDC--kI_zydj7uVtQcypDdjL0XADaHo3-Q" 
 const rainfall2=fetch("http://api2.thaiwater.net:9200/api/v1/thaiwater30/api_service?mid=105&eid=8wwwmG5SA3gIoNQ9sSuxjb1jcaDpYmf0bCGipCWXY2V7k9qtilXyQDC--kI_zydj7uVtQcypDdjL0XADaHo3-Q")  
 
 .then((res) => res.json())
.then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
 
 const rainfall=fetch("http://api2.thaiwater.net:9200/api/v1/thaiwater30/api_service?mid=098&eid=EJ2-FJ9n6Kz1IbqwNiqWwy_PeDM3ELfTyJfjAReATSxx5x6PRiQiznOrkLghjQmLdhlCN7xyJLsBoOAdUL1b8w")  


    .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );

 const allData = Promise.all([rainfall, rainfall2]);
 allData.then((res) => console.log(res));
  }, []);

 


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <TableBootstrap striped bordered hover>
        <thead>
          <tr>
            <th scope="col">tele_station_id</th>
            <th scope="col">LAT LONG</th>
            <th scope="col">rainfall1h</th>
            <th scope="col">rainfall10m</th>
            <th scope="col">rainfall24h</th>
            <th scope="col">date</th>
            <th scope="col">today</th>
          </tr>
        </thead>
     <tbody>
      {rain.map(val => (
<tr key={val.allData}>
<td scope="row">{val.id}</td>
<td scope="row">{val.tele_station_lat},{val.tele_station_long}</td>

</tr>
  
      ))}
     </tbody>


        </TableBootstrap>

        


    );

}

  

   
}






import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TableBootstrap from "react-bootstrap/Table";
import axios from "axios";


// const Table = () =>{
//   const [rainfall, setrainfall] = useState([]);
//   const [province, setprovince] = useState([]);

//   const fetchData = () =>{
//     const rainfall = 'http://api2.thaiwater.net:9200/api/v1/thaiwater30/api_service?mid=098&eid=EJ2-FJ9n6Kz1IbqwNiqWwy_PeDM3ELfTyJfjAReATSxx5x6PRiQiznOrkLghjQmLdhlCN7xyJLsBoOAdUL1b8w';
//     const province = 'http://api2.thaiwater.net:9200/api/v1/thaiwater30/api_service?mid=105&eid=8wwwmG5SA3gIoNQ9sSuxjb1jcaDpYmf0bCGipCWXY2V7k9qtilXyQDC--kI_zydj7uVtQcypDdjL0XADaHo3-Q';

//     const getRainfall = axios.get(rainfall)
//     const getProvince = axios.get(province)
//     axios.all([getRainfall, getProvince]).then(
//       axios.spread((...alldata) => {
//         const allData
//       })
//     )
//   }
// } 




export default function Table() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [rain, setItems] = useState([]);

  useEffect(() => {
    
  const rainfall=fetch("http://api2.thaiwater.net:9200/api/v1/thaiwater30/api_service?mid=098&eid=EJ2-FJ9n6Kz1IbqwNiqWwy_PeDM3ELfTyJfjAReATSxx5x6PRiQiznOrkLghjQmLdhlCN7xyJLsBoOAdUL1b8w")  
  .then((res) => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setItems(result);
        console.log(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  const rainfall2=fetch("http://api2.thaiwater.net:9200/api/v1/thaiwater30/api_service?mid=105&eid=8wwwmG5SA3gIoNQ9sSuxjb1jcaDpYmf0bCGipCWXY2V7k9qtilXyQDC--kI_zydj7uVtQcypDdjL0XADaHo3-Q")  

    .then((res) => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setItems(result);
        console.log(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
}, []);

 

 


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <TableBootstrap striped bordered hover>
        <thead>
          <tr>
            <th scope="col">tele_station_id</th>
            <th scope="col">rainfall1h</th>
            <th scope="col">rainfall10m</th>
            <th scope="col">rainfall24h</th>
            <th scope="col">date</th>
            <th scope="col">today</th>
            <th scope="col">LAT LONG</th>
          </tr>
        </thead>
        <tbody>
          {rain.map(val => (
  <tr key={val.rainfall}>
              <td scope="row">{val.tele_station_id}</td>

              <td scope="row">{val.rainfall1h}</td>
              <td scope="row">{val.rainfall10m}</td>
              <td scope="row">{val.rainfall24h}</td>

              <td scope="row">{val.rainfall_date_calc}</td>
              <td scope="row"> {val.rainfall_today}</td>

            </tr>
          

          ))}

        </tbody>
        </TableBootstrap>
    );
  }
}


///////////////

import React, { useEffect, useState } from 'react';
import TableBootstrap from 'react-bootstrap/Table';

const YourComponent = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data from API 1 and API 2</h1>

      <TableBootstrap striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>Lat Long</th>
            <th>Date</th>
            <th>rainfall10m</th>
            <th>rainfall1h</th>
            <th>rainfall24h</th>
          </tr>
        </thead>
        <tbody>
          {data1.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.tele_station_name['th']}</td>
              <td>{item.tele_station_lat}, {item.tele_station_long}</td>
              <td>{item.rainfall_datetime}</td>
              <td>{item.rainfall10m}</td>
              <td>{item.rainfall1h}</td>
              <td>{item.rainfall24h}</td>
            </tr>
          ))}
        </tbody>
      </TableBootstrap>
    </div>
  );
};

export default YourComponent;







 