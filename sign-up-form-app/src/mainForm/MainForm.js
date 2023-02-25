import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import data from './UserInfo.json';
import './MainForm.scss';
  
// Main form of the app
function MainForm() {
  const [showTable, setShowTable] = useState(false);
  const [users, setUserInfo] = useState(data);
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const usersTable = users.map((user) => {
    return (
      <tr>
        <td>{date}</td>
        <td>{user.firstName} {user.lastName}</td>
        <td>{user.email}</td>
      </tr>
    );
  });

  const addUser = (user) => {
    const totalUsers = users.length;
    user.id = totalUsers + 1;
    const allUsers = [...users];
    allUsers.push(user);
    setUserInfo(allUsers.sort((a, b) => b.id - a.id));
    setShowTable(true);
  };
  
  return (
    <div className='mainFormContainer'>
      <SignUpForm func={addUser} />
      {showTable && 
       <table className="usersTableContainer">
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
        <tbody>{usersTable}</tbody>
      </table>
      }
    </div>
  );
}
  
export default MainForm;