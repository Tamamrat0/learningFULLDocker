import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  axios.defaults.baseURL = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('users');
        setUsers(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUsers();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        {users.length > 0 &&
          users.map((item, index) => (
            <div key={index}>
              {item?.id} <code>{item?.email}</code> and Name is {item?.fullname}
            </div>
          ))}
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
