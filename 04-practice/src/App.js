import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import './components/Users/AddUser.css'

const DUMMY_USERS = [
  {
    id: 1,
    name: "Max",
    age: 31
  },
  {
    id: 2,
    name: "Ann",
    age: 36
  }
]

function App() {

  const [users, setUsers] = useState(DUMMY_USERS)

  const addUserHandler = (user) => {
    setUsers((previous) => {
      return [user, ...users];
    })
  }

  return (
    <div>
      <AddUser className="add-user" onSaveUser={addUserHandler}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
