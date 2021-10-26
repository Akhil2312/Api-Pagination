
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Pagination from './Pagination';

const App=()=> {

  const [data,setData] = useState([]);
  const [page,setPage] = useState([]);

  useEffect(()=>{

      axios
      .get('https://jsonplaceholder.typicode.com/posts/')
      .then(res=>{
        setData(res.data);
        setPage(res.data.slice(0,10));
      console.log(res.data)    
      })

  },[])

  const pageHandler = (pageNumber)=>{
    setPage(data.slice((pageNumber*10)-10,pageNumber*10));
  }



  return (
    <div className="App">
      <h1>Api Users</h1>
      {
        (data.length>=1)
        ?
        (<div >
        {page.map(post=><div key={post.id} className='Content'>{post.title}</div>)}
        </div>)
        :
        <p>Data not Loaded</p>
      }

      <Pagination
      data={data}
      pageHandler = {pageHandler}
      />
    </div>
  );
}

export default App;
