import { useDispatch, useSelector } from 'react-redux';
import { setSearchFilter } from '../redux/actions';

export default function SearchFilter() {
  const filter = useSelector(state => state.filter.searchFilter)
  const dispatch = useDispatch()

  function onValueChange(event) {
    dispatch(setSearchFilter(event.target.value))
  }

  return (
    <div className='searchWrapper'>
      <div className='search' />
      <input
        value={filter}
        type='text'
        onChange={onValueChange}
        placeholder='Начните вводить ...'
      />
    </div >
  );
}
