import { AuthorDataType } from '../../../http/api_service';

const AuthorInformation = ({affiliation, citedby} : Partial<AuthorDataType>) => {
  return (
    <div className="avatar-wrapper">
        <p>{affiliation}</p>
        <p>{citedby}</p>
    </div>
  );
};

export default AuthorInformation;