import CarList from '../../components/CarList';
import CarsSection from '../../components/CarsSection';

import cars, { Car, CarType } from '../../data/data';

const HomePage = () => {
  const popularCars = cars.filter((car: Car) => car.isPopular);
  const recomendedCars = cars.filter(
    (car: Car) =>
      car.discountedPrice !== '' &&
      car.type === (CarType.SUV || CarType.HATCHBACK)
  );

  return (
    <>
      <CarsSection cars={popularCars} title="Popular Cars" viewAll={true}>
        <CarList cars={popularCars} />
      </CarsSection>
      <CarsSection
        cars={recomendedCars}
        title="Recommended Cars"
        showMore={true}
      >
        <CarList cars={recomendedCars} />
      </CarsSection>
    </>
  );
};

export default HomePage;
