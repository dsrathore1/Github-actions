import React, {useState, useEffect } from 'react'
import axios from 'axios';
export const App = () => {
  const [userName, setUsername] = useState('');

  useEffect(() => {
    getName();
  }, []);

  const getName = async () => {
    const response = await axios.get('/app');
    console.log(response);
    setUsername(response.data);
  }
  return (
    <div>
      <h1>My frontend</h1>
      <h1>My name is {userName}</h1>
    </div>
  );
}

export default App;