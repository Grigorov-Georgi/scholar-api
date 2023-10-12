import AuthorInformation from "./AuthorInformation/AuthorInformation";
import Avatar from "./Avatar/Avatar";
import { AuthorDataType } from "../../http/api_service";
import "./Profile.css";
import { LineChartContainer } from "../LineChartContainer/LineChartContainer";

const Profile = (props: { data: AuthorDataType | null }) => {
  return (
    <div className="profile-wrapper">
      <Avatar photoUrl={props.data?.urlPicture} />
      <AuthorInformation
        affiliation={props.data?.affiliation}
        citedby={props.data?.citedby}
      />
      <LineChartContainer citesPerYear={props.data?.citesPerYear ?? {}} />
    </div>
  );
};

export default Profile;
