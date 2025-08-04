import { FC } from 'react';
import './UserSmall.css';
interface UserProps {
  gridArea: number;
}

export const UserSmall: FC<UserProps> = ({ gridArea }) => {
  return (
    <div className="user" style={{ gridArea: `u${gridArea}` }}>
      User{gridArea}
    </div>
  );
};
