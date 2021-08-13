import './App.css';
import GenderFilter from './GenderFilter'
import AgeFilter from './AgeFilter'
import { useEffect, useState } from 'react'

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=48")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.results);
          console.log(result.results)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])



  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className='wrapper'>
        <div className='filterWrapper'>
          <GenderFilter />
          <AgeFilter />
        </div>
        <div className='content'>
          {items.map(item =>
            <div key={item.cell} className='user'>
              <img className='picture' src={item.picture.large} />
              <div className='containerInfo'>
                <div className='info name'>{item.name.first} {item.name.last}</div>
                <div className='info age'>Возраст: <span className='textStyle'>{item.dob.age} лет</span></div>
                <div className='info gender'>Пол: <span className='textStyle'>{item.gender}</span></div>
                <div className='info adress'>Адрес: <span className='textStyle'>{item.location.country}, {item.location.city}</span></div>
                <div className='info registration'>Дата регистрации: <span className='textStyle'>{item.registered.date}</span></div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

