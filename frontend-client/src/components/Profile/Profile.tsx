import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { mockData } from "../../mockData";
import AuthorInformation from "./AuthorInformation/AuthorInformation";
import Avatar from "./Avatar/Avatar";
import { AuthorDataType } from "../../http/api_service";
import './Profile.css';


const Profile = (props: { data: AuthorDataType | null }) => {
  return (
    <div className="profile-wrapper">
      <Avatar photoUrl={props.data?.urlPicture} />
      <AuthorInformation
        affiliation={props.data?.affiliation}
        citedby={props.data?.citedby}
      />
      <LineChart
        title="Example chart"
        width={400}
        height={400}
        data={mockData}
        margin={{ top: 30, right: 20, bottom: 5, left: -20 }}
      >
        <Line type="linear" dataKey="citesPerYear" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Profile;
