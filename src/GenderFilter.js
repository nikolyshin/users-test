import './GenderFilter.css';
import { useEffect, useState } from 'react'

export default function GenderFilter() {
	const [state, setState] = useState({
		selectedOption: null
	});

	function onValueChange(event) {
		setState({
			selectedOption: event.target.value
		});
	}

	return (
		<div className='genderWrapper'>
			<div className='radio title' >Фильтр по полу</div>
			
			<div className='radio'>
				<label>
					<input
						type='radio'
						value='Other'
						checked={state.selectedOption === 'Other'}
						onChange={onValueChange}
					/>
					Все
				</label>
			</div>
			<div className='radio'>
				<label>
					<input
						type='radio'
						value='Male'
						checked={state.selectedOption === 'Male'}
						onChange={onValueChange}
					/>
					Только мужчины
				</label>
			</div>
			<div className='radio'>
				<label>
					<input
						type='radio'
						value='Female'
						checked={state.selectedOption === 'Female'}
						onChange={onValueChange}
					/>
					Только женщины
				</label>
			</div>
		</div>
	);
}
