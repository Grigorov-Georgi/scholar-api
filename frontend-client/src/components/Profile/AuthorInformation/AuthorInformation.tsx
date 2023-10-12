import { AuthorDataType } from "../../../http/api_service";
import "./AuthorInformation.css";

const AuthorInformation = ({
  affiliation,
  citedby,
  interests,
  publicationsInfo,
}: Partial<AuthorDataType>) => {
  const visualizeInterests = (): JSX.Element => {
    if (interests) {
      return (
        <div className="interests">
          {interests?.map((interest, idx) => (
            <span>
              {interest}
              {idx !== interests.length - 1 ? ",  " : ""}
            </span>
          ))}
        </div>
      );
    }
    return <></>;
  };

  const generateBibliography = (): JSX.Element => {
    console.log(publicationsInfo);
    if (publicationsInfo) {
      return (
        <ul>
          {publicationsInfo.map((pubInfo) => (
            <li>
              {pubInfo.title}
              {`(${pubInfo?.pub_year ?? "No year"})`}
            </li>
          ))}
        </ul>
      );
    }
    return <></>;
  };
  return (
    <div className="">
      <div className="mainContainer">
        <p>
          <b>Affiliations: </b>
          {affiliation}
        </p>
        <p>
          <b>Total number of citations: </b>
          {citedby}
        </p>
        <p>
          <b>Interests: </b>
          {visualizeInterests()}
        </p>
        <div>
          <p>
            <b>Bibliography: </b>
          </p>
        </div>
        {generateBibliography()}
      </div>
    </div>
  );
};

export default AuthorInformation;
