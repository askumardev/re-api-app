import "./App.css";
import axios from "axios";
import Cars from "./components/cars";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/api/v1/cars";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}
function App() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setCars(items);
      }
    });
    return () => (mounted = false);
  }, []);
  return (
    <div className="App">
      <Cars cars={cars} />
    </div>
  );
}
export default App;
