import BlogTable from './BlogTable';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home(){
  const [data, setData] = useState();
  
  const getData = () => {
    axios.get(`http://localhost:${process.env.REACT_APP_PORT}/api`)
    // axios.get(`${process.env.API_URL}:${process.env.API_URL}/api`)
    .then(res => {
      if(res.data){
        setData(res.data);
      }
    })
    .catch(err => console.log("Error to get datas!"))
  }

  useEffect(() => {
    getData();
  },[]);

  return (
      <div >
        {data && <BlogTable rows = {data} setData = {setData} />}
      </div>
  );
}