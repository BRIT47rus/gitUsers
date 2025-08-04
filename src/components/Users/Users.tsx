import { UserSmall } from '../UserSmall/UserSmall';
import './Users.css';
export const Users = () => {
  return (
    <section className="Users-container">
      <UserSmall gridArea={1} />
      <UserSmall gridArea={2} />
      <UserSmall gridArea={3} />
      <UserSmall gridArea={4} />
      <UserSmall gridArea={5} />
      <UserSmall gridArea={6} />
      <UserSmall gridArea={7} />
      <UserSmall gridArea={8} />
      <UserSmall gridArea={9} />
    </section>
  );
};
