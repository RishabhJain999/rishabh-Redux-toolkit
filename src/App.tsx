import { CarForm } from './components/CarForm';
import { CarList } from './components/CarList';
import { CarValue } from './components/CarValue';
import { SearchForm } from './components/SearchForm';
export const App = () => {
  console.log('testing!');
  return (
    <div className='container is-fluid'>
      <CarForm />
      <SearchForm />
      <CarList />
      <CarValue />
    </div>
  );
};
