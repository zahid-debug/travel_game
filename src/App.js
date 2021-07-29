import React,{useState} from 'react'
function App() {
  const [data, setData] = useState(null)
  const [print, setPrint] = useState(false)
  function getData(val) {
    console.warn(val.target.value)
    setData(val.target.value)
    setPrint(false)
  }
  return (
    <div className="App">
   <h1>{data}</h1>
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}>print daTA</button>

    </div>
  );
}

export default App;