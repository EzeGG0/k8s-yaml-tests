import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    axios.get(`http://${window.location.host}:8080/api/users`)
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }

  const addUser = () => {
    const newUser = { username: 'newuser', email: 'newuser@example.com' };
    axios.post(`http://${window.location.host}:8080/api/users`, newUser)
      .then(response => fetchUsers())
      .catch(error => console.log(error));
  }

  return (
    <div className="App">
      <h1>User List</h1>
      <button onClick={fetchUsers}>Fetch Users</button>
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;