import background from "./images/bg/ipbg.jpg";
import './App.css';
import React, {useEffect, useState} from 'react'

function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() =>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  },[])

  return (
    <section className="initialPage">
      <div className="appName">
        <h1>Flora Friend</h1>
      </div>
    </section>
    
  );
}

export default App;
