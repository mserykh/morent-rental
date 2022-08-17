export enum CarType {
  SPORT = 'Sport',
  SUV = 'SUV',
  MPV = 'MPV',
  SEDAN = 'Sedan',
  COUPE = 'Coupe',
  HATCHBACK = 'Hatchback',
}

export interface Car {
  id: string;
  car: string;
  type:
    | CarType.SPORT
    | CarType.SUV
    | CarType.MPV
    | CarType.SEDAN
    | CarType.COUPE
    | CarType.HATCHBACK;
  seats: number;
  transmission: string;
  price: string;
  discountedPrice: string;
  tank: string;
  isPopular: boolean;
  isFavourite: boolean;
  imgLink: string;
}

const carsList: Car[] = [
  {
    id: '0001',
    car: 'Koenigsegg',
    type: CarType.SPORT,
    seats: 2,
    transmission: 'Manual',
    price: '99.00',
    discountedPrice: '',
    tank: '90',
    isPopular: true,
    isFavourite: false,
    imgLink: '0001.png',
  },
  {
    id: '0002',
    car: 'Nissan GT - R',
    type: CarType.SPORT,
    seats: 2,
    transmission: 'Manual',
    price: '100.00',
    discountedPrice: '80.00',
    tank: '80',
    isPopular: true,
    isFavourite: false,
    imgLink: '0002.png',
  },
  {
    id: '0003',
    car: 'Rolls - Royce',
    type: CarType.SEDAN,
    seats: 2,
    transmission: 'Manual',
    price: '96.00',
    discountedPrice: '',
    tank: '70',
    isPopular: true,
    isFavourite: false,
    imgLink: '0003.png',
  },
  {
    id: '0004',
    car: 'All New Rush',
    type: CarType.SUV,
    seats: 6,
    transmission: 'Manual',
    price: '80.00',
    discountedPrice: '72.00',
    tank: '70',
    isPopular: false,
    isFavourite: false,
    imgLink: '0004.png',
  },
  {
    id: '0005',
    car: 'CR - V',
    type: CarType.SUV,
    seats: 6,
    transmission: 'Manual',
    price: '80.00',
    discountedPrice: '',
    tank: '80',
    isPopular: true,
    isFavourite: false,
    imgLink: '0005.png',
  },
  {
    id: '0006',
    car: 'All New Terios',
    type: CarType.SUV,
    seats: 6,
    transmission: 'Manual',
    price: '74.00',
    discountedPrice: '',
    tank: '90',
    isPopular: false,
    isFavourite: false,
    imgLink: '0006.png',
  },
  {
    id: '0007',
    car: 'CR - V',
    type: CarType.SUV,
    seats: 6,
    transmission: 'Manual',
    price: '80.00',
    discountedPrice: '',
    tank: '80',
    isPopular: true,
    isFavourite: false,
    imgLink: '0007.png',
  },
  {
    id: '0008',
    car: 'MG ZX Exclusice',
    type: CarType.HATCHBACK,
    seats: 4,
    transmission: 'Manual',
    price: '80.00',
    discountedPrice: '76.00',
    tank: '70',
    isPopular: false,
    isFavourite: false,
    imgLink: '0008.png',
  },
  {
    id: '0009',
    car: 'New MG ZS',
    type: CarType.SUV,
    seats: 6,
    transmission: 'Manual',
    price: '80.00',
    discountedPrice: '',
    tank: '80',
    isPopular: false,
    isFavourite: false,
    imgLink: '0009.png',
  },
  {
    id: '0010',
    car: 'MG ZX Excite',
    type: CarType.HATCHBACK,
    seats: 4,
    transmission: 'Manual',
    price: '74.00',
    discountedPrice: '',
    tank: '90',
    isPopular: false,
    isFavourite: false,
    imgLink: '0010.png',
  },
  {
    id: '0011',
    car: 'New MG ZS',
    type: CarType.SUV,
    seats: 6,
    transmission: 'Manual',
    price: '80.00',
    discountedPrice: '',
    tank: '80',
    isPopular: false,
    isFavourite: false,
    imgLink: '0011.png',
  },
  {
    id: '0012',
    car: 'Nissan GT - R',
    type: CarType.SPORT,
    seats: 2,
    transmission: 'Manual',
    price: '100.00',
    discountedPrice: '80.00',
    tank: '80',
    isPopular: true,
    isFavourite: false,
    imgLink: '0012.png',
  },
];

export default carsList;
