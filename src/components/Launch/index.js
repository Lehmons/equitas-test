import LaunchStyles from "./Launch.styled";
import moment from "moment";

const Launch = ({ props }) => {
  return (
    <LaunchStyles className="launch">
      <div className="dataContainer">
        <div className="launchTitle">{props.name}</div>
        <div className="launchId">
          <span>Id</span>
          <span>{props.id}</span>
        </div>
        <div className="flightNumber stat">
          <span>Flight Number</span>
          <span>{props.flight_number}</span>
        </div>
        <div className="launchDate stat">
          <span>Launch Date</span>
          <span>
            {moment(props.date_utc).format("DD MMMM, YYYY [at] HH:mm")}
          </span>
        </div>
      </div>
    </LaunchStyles>
  );
};

export default Launch;
