/* eslint @typescript-eslint/no-var-requires: "off" */
import { Car } from '../../data/data';

import { ReactComponent as FavouriteIcon } from '../../assets/icons/heart.svg';
import { ReactComponent as TankIcon } from '../../assets/icons/tank.svg';
import { ReactComponent as TransmissionIcon } from '../../assets/icons/transmission.svg';
import { ReactComponent as SeatsIcon } from '../../assets/icons/seats.svg';
import Button from '../Button';

interface CarCarPros {
  car: Car;
}

const CarCard = ({ car, ...props }: CarCarPros) => {
  const imgSrc = require(`../../assets/img/cars/${car.imgLink}`);

  return (
    <a className="card__link">
      <header className="card__header">
        <h3 className="card__title">{car.car}</h3>
        <span className="card__type">{car.type}</span>
      </header>
      <span className="card__favorite">
        <FavouriteIcon stroke="#596780" />
      </span>
      <img
        src={imgSrc}
        alt={`Photo of ${car.car} ${car.type}`}
        className="card__img"
      />
      <ul className="card__features">
        <li className="card__feature">
          <TankIcon />
          <span>{`${car.tank} L`}</span>
        </li>
        <li>
          <TransmissionIcon />
          <span>{`${car.transmission}`}</span>
        </li>
        <li>
          <SeatsIcon />
          <span>{`${car.seats} L`}</span>
        </li>
      </ul>
      <div className="card__prices">
        <p className="card__price-current">
          {`$${car.price}/`}
          <span>day</span>
        </p>
        {!!car.discountedPrice && (
          <p className="card__discount">{`$${car.discountedPrice}`}</p>
        )}
      </div>
      <Button title="Rent Now" className="button card__button" />
    </a>
  );
};

export default CarCard;
