
import './App.scss';
import CreateUsers from './components/CreateUsers';
import GenderFilter from './components/GenderFilter';
import AgeFilter from './components/AgeFilter';
import SearchFilter from './components/SearchFilter';

export default function App() {
  return (
    <div className="wrapper">
      <SearchFilter />
      <div className="filterWrapper">
        <GenderFilter />
        <AgeFilter />
      </div>
      <CreateUsers />
    </div>
  );
}

