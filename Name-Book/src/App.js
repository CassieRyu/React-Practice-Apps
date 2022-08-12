import React, { useState, Fragment } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (user) => {
    setUsersList(prevUsers => {
      return [user, ...prevUsers]
    });
  }

  return (
    <>
      <AddUser onSubmitData={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
