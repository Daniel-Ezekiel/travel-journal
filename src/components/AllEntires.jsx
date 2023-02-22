import Location from './Location';
import locationsData from '../data.jsx';

const AllEntires = () => {
  const allLocationEntries = locationsData.map((item, i, arr) => (
    <Location key={i + 1} {...item} />
  ));
  return <section className="all-locations">{allLocationEntries}</section>;
};

export default AllEntires;
