import BlogTable from './BlogTable';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home(){
  const [data, setData] = useState();

  const getData = () => {
    axios.get(`https://backend-api-blogs.herokuapp.com/api`)
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
        {data && <BlogTable rows = {data} />}
      </div>
  );
}