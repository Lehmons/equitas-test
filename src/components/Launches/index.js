import Launch from "../Launch";
import LaunchesStyles from "./Launches.styled";

const Launches = ({ launches }) => {
  return (
    <LaunchesStyles className="launches">
      <div className="Title">
        <h1>Earth</h1>
      </div>
      <div className="grid">
        {launches.map((launch) => (
          <div className="launchNumber">
            <Launch props={launch} />
          </div>
        ))}
      </div>
    </LaunchesStyles>
  );
};

export default Launches;
