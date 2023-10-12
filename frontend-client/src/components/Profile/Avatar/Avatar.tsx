import './Avatar.css';
import {CgProfile} from 'react-icons/cg';

const Avatar = ({photoUrl}: {photoUrl: string | undefined}) => {
  return (
    <div className="avatar-wrapper">
        {photoUrl ? <img className="avatar" src={photoUrl} alt="Avatar icon"/> : <CgProfile /> }
    </div>
  );
};

export default Avatar;
