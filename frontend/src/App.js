import './App.css';
import React, {useState, useEffect} from "react";
const url = "http://127.0.0.1:4000/"

const Single = (props) =>{
  const {key,username} = props;
  return (
    <div key={key}>{username}</div>
  );
}

const App = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch(url)
    .then((response)=> response.json())
    .then((data) => setData(data))
  }, []);

  return (
    <>
    {data.map((d,index) => <Single key={index} username={d?.username}/>)}
    </>
  );
}

export default App;
