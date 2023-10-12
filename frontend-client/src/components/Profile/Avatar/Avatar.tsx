import './Avatar.css';
import {CgProfile} from 'react-icons/cg';

const Avatar = ({photoUrl}: {photoUrl: string | undefined}) => {
  return (
    <div className="">
        {photoUrl ? <img className="avatar" src={photoUrl} alt="Avatar icon"/> : <CgProfile size={340}/> }
    </div>
  );
};

export default Avatar;
