import PlaceIcon from '@mui/icons-material/Place';

const Location = ({ img, location, gMaps, title, start, end, description }) => {
  return (
    <div className="location-card">
      <div className="location--img">
        <img className="card--img" src={img} alt="location-image" />
      </div>

      <div className="location-details">
        <p className="card--place">
          <PlaceIcon />
          {location}
          <span className="card--url">
            <a href={gMaps} target="_blank">
              View on Google Maps
            </a>
          </span>
        </p>

        <h2 className="card--title">{title}</h2>
        <p className="card--date">
          {start} - {end}
        </p>

        <p className="card--description">{description}</p>
      </div>
    </div>
  );
};

export default Location;
