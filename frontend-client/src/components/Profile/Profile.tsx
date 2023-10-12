import AuthorInformation from "./AuthorInformation/AuthorInformation";
import Avatar from "./Avatar/Avatar";
import { AuthorDataType } from "../../http/api_service";
import "./Profile.css";
import { LineChartContainer } from "../LineChartContainer/LineChartContainer";
import BarChart from "../Charts/BarChart";

const Profile = (props: {
  data: AuthorDataType | null;
  handleNewQuery: () => void;
}) => {
  return (
    <div className="profile-wrapper">
      <div className="avatar-wrapper">
        <Avatar photoUrl={props.data?.urlPicture} />
        <AuthorInformation
          affiliation={props.data?.affiliation}
          citedby={props.data?.citedby}
          interests={props.data?.interests}
          publicationsInfo={props.data?.publicationsInfo}
          name={props.data?.name}
        />
      </div>
      <div className="chartContainer">
        <LineChartContainer citesPerYear={props.data?.citesPerYear ?? {}} />
        <BarChart publicationsData={props.data?.publicationsInfo ?? []} />
      </div>
      <button onClick={() => props.handleNewQuery()}>New query</button>
    </div>
  );
};

export default Profile;
