import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers, fetchUsers } from '../redux/reducer';

const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const users = useSelector(selectUsers);

  return (
    <div className='h   '>
      {users.map((user, index) => (
        <div key={index}>
          <div>{user.name}</div>
          <div>{user.email}</div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default UserList;
