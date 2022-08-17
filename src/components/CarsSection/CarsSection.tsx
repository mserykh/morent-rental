import carsList, { Car } from '../../data/data';
import Button from '../Button';

type CarsSectionsProps = {
  cars: Car[];
  children: React.ReactNode;
  title?: string;
  viewAll?: boolean;
  showMore?: boolean;
};

const CarsSection = ({
  cars,
  children,
  title,
  viewAll,
  showMore,
}: CarsSectionsProps) => {
  const header = (
    <header className="cars-section__header">
      <h4 className="cars-section__title">{title}</h4>
      {viewAll && (
        <Button
          title=" View All"
          className="button cars-section__button cars-section__button--all"
        />
      )}
    </header>
  );

  const footer = (
    <footer>
      <button className="button cars-section__button cars-section__button--more">
        Show more car
      </button>
      <span>{`${cars.length} Car`}</span>
    </footer>
  );

  return (
    <section className="cars-section">
      {!!title && header}
      {children}
      {showMore && footer}
    </section>
  );
};
export default CarsSection;
