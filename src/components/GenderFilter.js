import { useDispatch, useSelector } from 'react-redux';
import { genderFilter } from '../redux/selectors';
import { setGenderFilter } from '../redux/actions';

const radioList = [{
  label: "Все",
  value: "all"
},
{
  label: "Только мужчины",
  value: "male"
},
{
  label: "Только женщины",
  value: "female"
}]

export default function GenderFilter() {
  const dispatch = useDispatch()
  const filter = useSelector(genderFilter)
  function onValueChange(event) {
    dispatch(setGenderFilter(event.target.value))
  }

  return (
    <div className='genderWrapper' onChange={onValueChange}>
      <div className='title'>Фильтр по полу</div>
      <div className='radioWrapper'>
        {radioList.map(radio =>
          <label key={radio.value}>
            <div className={`radio ${filter === radio.value ? 'checked' : ''} `} />
            <input
              type='radio'
              value={radio.value}
              checked={filter === radio.value}
              hidden
            />
            {radio.label}
          </label>
        )
        }
      </div>
    </div>

    // <div className='genderWrapper' onChange={onValueChange} >
    //   <div className='radio title' >Фильтр по полу</div>
    //   <div className='radio'>
    //     <label>
    //       <input
    //         type='radio'
    //         value='all'
    //         checked={filter === "all"}
    //       />
    //       Все
    //     </label>
    //   </div>
    //   <div className='radio'>
    //     <label>
    //       <input
    //         type='radio'
    //         value='male'
    //         checked={filter === "male"}
    //       />
    //       Только мужчины
    //     </label>
    //   </div>
    //   <div className='radio'>
    //     <label>
    //       <input
    //         type='radio'
    //         value='female'
    //         checked={filter === "female"}
    //       />
    //       Только женщины
    //     </label>
    //   </div>
    // </div>
  );
}
