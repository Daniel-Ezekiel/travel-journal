import PlaceIcon from '@mui/icons-material/Place';

const Location = () => {
  return (
    <div className="location-card">
      <div className="location--img">
        <img
          className="card--img"
          src="/images/mt-fuji.png"
          alt="location-image"
        />
      </div>

      <div className="location-details">
        <p className="card--place">
          <PlaceIcon />
          Japan
          <span className="card--url">
            <a href="https://google.com" target="_blank">
              View on Google Maps
            </a>
          </span>
        </p>

        <h2 className="card--title">Mount Fuji</h2>
        <p className="card--date">12 Jan, 2021 - 24 Jan, 2021</p>

        <p className="card--description">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
};

export default Location;
