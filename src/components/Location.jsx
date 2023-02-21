import PlaceIcon from '@mui/icons-material/Place';

const Location = ({
  imageUrl,
  location,
  googleMapsUrl,
  title,
  startDate,
  endDate,
  description,
}) => {
  return (
    <div className="location-card">
      <div className="location--img">
        <img className="card--img" src={imageUrl} alt="location-image" />
      </div>

      <div className="location-details">
        <p className="card--place">
          <PlaceIcon />
          {location}
          <span className="card--url">
            <a href={googleMapsUrl} target="_blank">
              View on Google Maps
            </a>
          </span>
        </p>

        <h2 className="card--title">{title}</h2>
        <p className="card--date">
          {startDate} - {endDate}
        </p>

        <p className="card--description">{description}</p>
      </div>
    </div>
  );
};

export default Location;
