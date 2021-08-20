import { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { loadUsers } from '../redux/actions';

function formatDate(date) {

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = date.getFullYear();
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}

export default function CreateUsers() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers())
  }, [])

  const filterUsers = state => {
    const usersData = state.users.usersData;
    const genderFilter = state.filter.genderFilter
    const searchFilter = state.filter.searchFilter.toUpperCase()
    const ageFilter = state.filter.ageFilter
    let filteredUsersData = genderFilter !== 'all' ? usersData.filter(user => user.gender === genderFilter) : usersData;
    filteredUsersData = ageFilter.length > 0 ? filteredUsersData.filter(user => ageFilter.some(age => {
      const [start, end] = age.split('-')
      return (user.dob.age >= start) && (!end || user.dob.age <= end)
    })
    ) : filteredUsersData
    filteredUsersData = filteredUsersData.filter(user => {
      const strings = [user.name.first, user.name.last, user.location.city, user.location.country]
      return strings.some(str => str.toUpperCase().includes(searchFilter))
    })
    return filteredUsersData
  }

  const users = useSelector(filterUsers, shallowEqual)

  return (
    <div className='content'>
      {users.map(item =>
        <div key={item.cell} className='user'>
          <img className='picture' src={item.picture.large} />
          <div className='containerInfo'>
            <div className='info name'>{item.name.first} {item.name.last}</div>
            <div className='info age'>Возраст: <span className='textStyle'>{item.dob.age} лет</span></div>
            <div className='info gender'>Пол: <span className='textStyle'>{item.gender}</span></div>
            <div className='info adress'>Адрес: <span className='textStyle'>{item.location.country}, {item.location.city}</span></div>
            <div className='info registration'>Дата регистрации: <span className='textStyle'>{formatDate(new Date (item.registered.date))}</span></div>
          </div>
        </div>
      )}
    </div>
  )
}