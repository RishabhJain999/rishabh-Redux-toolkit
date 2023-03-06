import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { removeCar } from '../store';
export const CarList = () => {
  const dispatch = useDispatch();
  const { AllCars, name } = useSelector((state: RootState) => {
    const {
      form,
      cars: { carsList, searchTerm },
    } = state;
    const filteredCars = carsList.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.trim().toLowerCase());
    });
    return {
      AllCars: filteredCars,
      name: form.name,
    };
  });

  const handleCarDelete = (id: string) => {
    dispatch(removeCar(id));
  };
  const renderedCars =
    AllCars.length > 0 ? (
      AllCars.map((car) => {
        const bold =
          name && car.name.toLowerCase().includes(name.toLowerCase());
        return (
          <div key={car.id} className={`panel ${bold && 'bold'}`}>
            <p>
              {car.name} - $ {car.cost}
            </p>
            <button
              className='button is-danger'
              onClick={() => handleCarDelete(car.id)}
            >
              Delete
            </button>
          </div>
        );
      })
    ) : (
      <h6 style={{ marginTop: '25px' }}>Fill form to add your cars list</h6>
    );

  return <div className='car-list'>{renderedCars}</div>;
};
