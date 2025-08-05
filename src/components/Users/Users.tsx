import { useEffect, useState } from 'react';
import { UserSmall } from '../UserSmall/UserSmall';
import './Users.css';
import { I_User } from '../types';
import { url } from '../helpers/api';
export const Users = () => {
  // https://docs.github.com/en/rest/reference/users
  const [users, setUsers] = useState<I_User[]>();
  useEffect(() => {
    fetch(url + '?per_page=9')
      .then((response) => response.json())
      .then((res) => {
        setUsers(res);
      })
      .catch((e) => {
        console.log(e.message);
      });

    console.log(users);
  }, []);
  console.log(users);

  return (
    <section className="Users-container">
      {users ? (
        users.map((user, index) => {
          return <UserSmall gridArea={index + 1} key={user.login} big={false} user={user} />;
        })
      ) : (
        <>
          <UserSmall gridArea={1} />
          <UserSmall gridArea={2} />
          <UserSmall gridArea={3} />
          <UserSmall gridArea={4} />
          <UserSmall gridArea={5} />
          <UserSmall gridArea={6} />
          <UserSmall gridArea={7} />
          <UserSmall gridArea={8} />
          <UserSmall gridArea={9} />
        </>
      )}
    </section>
  );
};
