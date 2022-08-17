import cars, { Car } from '../../data/data';
import CarCard from '../CarCard';

type CarsListProps = {
  cars: Car[];
};

const CarList = ({ cars }: CarsListProps) => {
  const carsItems = cars.map((car) => (
    <li key={car.id}>
      <CarCard car={car} />
    </li>
  ));

  return (
    <section className="">
      <ul className="cars">{carsItems}</ul>
    </section>
  );
};
export default CarList;
