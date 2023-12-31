import { AuthorDataType } from "../../../http/api_service";
import "./AuthorInformation.css";

const AuthorInformation = ({
  affiliation,
  citedby,
  interests,
  publicationsInfo,
  name,
}: Partial<AuthorDataType>) => {
  const visualizeInterests = (): JSX.Element => {
    if (interests) {
      return (
        <ul className="interests">
          {interests?.map((interest) => (
            <li>{interest}</li>
          ))}
        </ul>
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
          <b>Author name: </b>
          {name}
        </p>
        <p>
          <b>Affiliations: </b>
          {affiliation}
        </p>
        <p>
          <b>Total number of citations: </b>
          {citedby}
        </p>
        <div>
          <p>
            <b>Interests: </b>
          </p>
          {visualizeInterests()}
        </div>
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
