import AuthorInformation from "./AuthorInformation/AuthorInformation";
import Avatar from "./Avatar/Avatar";
import { AuthorDataType } from "../../http/api_service";
import "./Profile.css";
import { LineChartContainer } from "../LineChartContainer/LineChartContainer";
import BarChart from "../Charts/BarChart";

const Profile = (props: { data: AuthorDataType | null }) => {
  return (
    <div className="profile-wrapper">
      <Avatar photoUrl={props.data?.urlPicture} />
      <AuthorInformation
        affiliation={props.data?.affiliation}
        citedby={props.data?.citedby}
      />
      <div className="chartContainer">
        <LineChartContainer citesPerYear={props.data?.citesPerYear ?? {}} />
        <BarChart publicationsData={props.data?.publicationsInfo ?? []} />
      </div>
    </div>
  );
};

export default Profile;
