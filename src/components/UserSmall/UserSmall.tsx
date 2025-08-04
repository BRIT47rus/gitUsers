import { FC } from 'react';
import './UserSmall.css';
import { I_User } from '../types';
interface UserProps {
  gridArea?: number;
  big?: boolean;
  user?: I_User;
}

export const UserSmall: FC<UserProps> = ({ gridArea = 1, big = false, user }) => {
  if (user) {
    return (
      <div className={`user ${big ? 'user-big' : 'user-small'}`} style={{ gridArea: `u${gridArea}` }}>
        <div className="user__avatar">
          <img src={user.avatar_url} alt="avatar" className="user__avatar-img " />
        </div>
        <div className="user__info">
          <span className="user__info-name text-accent">{user.name} </span>

          {big ? (
            <div className="user-big__info">
              <p>
                <span className="text-accent">{user.followers}k</span> •{' '}
                <span className="text-accent">{user.following}</span> <span>подписчиков</span> •{' '}
                <span className="text-accent">{user.url}</span>
              </p>
            </div>
          ) : (
            <span className="user__info-desc">
              {user.public_repos || 0} репозиториев <a href={user.organizations_url}>Организация</a>
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`user ${big ? 'user-big' : 'user-small'}`} style={{ gridArea: `u${gridArea}` }}>
      <div className="user__avatar">
        <img
          src="https://sun9-1.userapi.com/s/v1/ig2/YSRewIzbN0Ngk73DrcVCmGsZHIMKUFW2h_wyTbjbUb2fd4ELP2_SDGtl5gr31BVgb_MemqzphpQe54zlqjIfzxeU.jpg?quality=95&as=32x33,48x49,72x74,108x111,160x164,240x246,360x369,480x492,540x553,640x655,720x737,1000x1024&from=bu&cs=1000x0"
          alt="avatar"
          className="user__avatar-img "
        />
      </div>
      <div className="user__info">
        <span className="user__info-name text-accent">Defunk </span>

        {big ? (
          <div className="user-big__info">
            <p>
              <span className="text-accent">21.3k</span> • <span className="text-accent">210</span>{' '}
              <span>подписчиков</span> • <span className="text-accent">http://</span>
            </p>
          </div>
        ) : (
          <span className="user__info-desc">
            15 репозиториев <p>Название организации</p>
          </span>
        )}
      </div>
    </div>
  );
};
