import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm, RootState } from '../store';
export const SearchForm = () => {
  const dispatch = useDispatch();
  const handleSearchTerm = (event: any) => {
    dispatch(changeSearchTerm(event.target.value));
  };
  const searchTerm = useSelector((state: RootState) => {
    return state.cars.searchTerm;
  });
  return (
    <div className='list-header'>
      <h3 className='title is-3'>My Car</h3>
      <div className='search field is-horizontal'>
        <label className='label'>Search</label>
        <input
          type='text'
          className='input is-expanded'
          value={searchTerm}
          onChange={handleSearchTerm}
        />
      </div>
    </div>
  );
};
