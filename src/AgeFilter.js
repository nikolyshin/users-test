import './AgeFilter.css';
import { useEffect, useState } from 'react'

export default function AgeFilter() {
    const [state, setState] = useState({
        selectedOption: null
    });

    function onValueChange(event) {
        setState({
            selectedOption: event.target.value
        });
    }

    return (
        <div className='ageWrapper'>
            {/* <div className='checkbox title'>Фильтр по возрастным группам </div> */}

            <div className='checkbox'>
                <label>
                    <input
                        type='checkbox'
                        value='Other'
                        checked={state.selectedOption === 'Other'}
                        onChange={onValueChange}
                    />
                    0-18
                </label>
            </div>
            <div className='checkbox'>
                <label>
                    <input
                        type='checkbox'
                        value='Male'
                        checked={state.selectedOption === 'Male'}
                        onChange={onValueChange}
                    />
                    18-35
                </label>
            </div>
            <div className='checkbox'>
                <label>
                    <input
                        type='checkbox'
                        value='Female'
                        checked={state.selectedOption === 'Female'}
                        onChange={onValueChange}
                    />
                    35-65
                </label>
            </div>
            <div className='checkbox'>
                <label>
                    <input
                        type='checkbox'
                        value='Female'
                        checked={state.selectedOption === 'Female'}
                        onChange={onValueChange}
                    />
                    65+
                </label>
            </div>
        </div>
    );
}
