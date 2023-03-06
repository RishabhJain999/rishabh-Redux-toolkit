import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost, RootState, addCars } from '../store';
export const CarForm = () => {
  const dispatch = useDispatch();
  const handleName = (event: any) => {
    dispatch(changeName(event.target.value));
  };
  const handleCost = (event: any) => {
    const value = parseInt(event.target.value);
    dispatch(changeCost(value));
  };
  const { name, cost } = useSelector((state: RootState) => {
    return state.form;
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (name.trim() !== '' && cost !== 0) {
      dispatch(addCars({ name, cost }));
    }
  };
  return (
    <div className='car-form panel'>
      <h4 className='subtitle is-3'>Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className='field-group'>
          <div className='field'>
            <label className='label'></label>
            Name
            <input
              name='name'
              className='input is-expanded'
              type='text'
              placeholder='Car Name'
              value={name}
              onChange={handleName}
            />
          </div>
          <div className='field'>
            <label className='label'></label>
            Cost
            <input
              name='cost'
              className='input is-expanded'
              type='text'
              placeholder='Car Value'
              value={cost || ''}
              onChange={handleCost}
            />
          </div>
          <div className='field'>
            <input className='button' type='submit' value='Submit' />
          </div>
        </div>
      </form>
    </div>
  );
};
