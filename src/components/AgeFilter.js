import { useDispatch, useSelector } from 'react-redux';
import { setAgeFilter } from '../redux/actions';

const checkboxList = [{
  label: "0-18",
  value: "0-18"
},
{
  label: "18-35",
  value: "18-35"
},
{
  label: "35-65",
  value: "35-65"
},
{
  label: "65+",
  value: "65-"
}]

export default function AgeFilter() {
  const filter = useSelector(state => state.filter.ageFilter)
  const dispatch = useDispatch()

  function onValueChange(event) {
    const value = event.target.value
    dispatch(setAgeFilter(filter.includes(value) ? filter.filter(el => el !== value) : [...filter, value]))
  }


  return (
    <div className='ageWrapper' onChange={onValueChange}>
      <div className='title'>Фильтр по возрастным группам </div>
      <div className='checkboxWrapper'>
        {checkboxList.map(checkbox =>
          <label key={checkbox.value}>
            <div className={`checkbox ${filter.includes(checkbox.value) ? 'checked' : ''} `} />
            <input
              type='checkbox'
              value={checkbox.value}
              checked={filter.includes(checkbox.value)}
              hidden
            />
            {checkbox.label}
          </label>
        )
        }
      </div>
    </div>
  );
}
