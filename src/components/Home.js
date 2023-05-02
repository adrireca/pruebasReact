import React from 'react';
import axios from 'axios';

export const Home = () => {
  const url = 'https://jsonplaceholder.typicode.com/users/';
  const [users, setUsers] = React.useState([]);


  React.useEffect(() => {
    getUsers();
  }, []);

  /* Obtiene los usuarios */
  const getUsers = (() => {
    axios.get(url)
      .then((response) => {
        setUsers(response.data);
      });
  });

  return (
    <>
      <div>Home</div>
      {users.map((user) => {
        return <p>{user.name}</p>
      })}
    </>
  )
}
