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
<td scope="row">{val.tele_station_id}</td>
<td scope="row">{val.rainfall1h}</td>
<td scope="row">{val.rainfall10m}</td>

</tr>
  
      ))}
     </tbody>


        </TableBootstrap>

        


    );

}

  

   
}







