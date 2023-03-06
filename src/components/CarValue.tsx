import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const CarValue = () => {
  const totalCost = useSelector((state: RootState) => {
    const {
      cars: { carsList, searchTerm },
    } = state;
    const filteredCars = carsList.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.trim().toLowerCase());
    });
    let cost = 0;
    for (let val of filteredCars) {
      cost += val.cost;
    }
    return cost;
  });
  return <div className='car-value'>Total Cost: ${totalCost}</div>;
};
