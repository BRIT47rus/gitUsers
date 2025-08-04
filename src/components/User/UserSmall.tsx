import { FC } from 'react';
import './UserSmall.css';
interface UserProps {
  gridArea: number;
}

export const UserSmall: FC<UserProps> = ({ gridArea }) => {
  return (
    <div className="user" style={{ gridArea: `u${gridArea}` }}>
      <div className="user__avatar">
        <img
          src="https://sun9-1.userapi.com/s/v1/ig2/YSRewIzbN0Ngk73DrcVCmGsZHIMKUFW2h_wyTbjbUb2fd4ELP2_SDGtl5gr31BVgb_MemqzphpQe54zlqjIfzxeU.jpg?quality=95&as=32x33,48x49,72x74,108x111,160x164,240x246,360x369,480x492,540x553,640x655,720x737,1000x1024&from=bu&cs=1000x0"
          alt="avatar"
          className="user__avatar-img "
        />
      </div>
      <div className="user__info">
        <span className="user__info-name">Defunk </span>
        <span className="user__info-desc">
          15 репозиториев <p>Название организации</p>
        </span>
      </div>
    </div>
  );
};
