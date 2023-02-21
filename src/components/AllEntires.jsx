import Location from './Location';
import locationsData from '../data.jsx';

const AllEntires = () => {
  const allLocationEntries = locationsData.map((item, i) => {
    return (
      <Location
        key={i + 1}
        img={item.imageUrl}
        location={item.location}
        gMaps={item.googleMapsUrl}
        title={item.title}
        start={item.startDate}
        end={item.endDate}
        description={item.description}
      />
    );
  });
  return <section className="all-locations">{allLocationEntries}</section>;
};

export default AllEntires;
