import {HiOutlineLocationMarker} from 'react-icons/hi'
import {RiAccountPinCircleLine} from 'react-icons/ri'
import {RxCalendar} from 'react-icons/rx'

const Search = () => {
    return(
        <div className='search container section'>
            <div className='sectionContainer grid'>

                <div className='btns flex'>
                </div>

                <div className='searchInputs flex'>
                    <div className='singleInput flex'>
                        <div className='iconDiv'>
                            <HiOutlineLocationMarker className='icon'/>
                        </div>
                        <div className='texts'>
                            <h4>Location</h4>
                            <input type="text" placeholder='Where do you want to go?' />
                        </div>
                    </div>

                    <div className='singleInput flex'>
                        <div className='iconDiv'>
                            <RiAccountPinCircleLine className='icon'/>
                        </div>
                        <div className='texts'>
                            <h4>Travelers</h4>
                            <input type="text" placeholder='Number of passengers?' />
                        </div>
                    </div>

                    <div className='singleInput flex'>
                        <div className='iconDiv'>
                            <RxCalendar className='icon'/>
                        </div>
                        <div className='texts'>
                            <h4>Check Out</h4>
                            <input type="text" placeholder='Please add date' />
                        </div>
                    </div>

                    <button className='btn btnBlock'>Search Flight</button>

                </div>

            </div>

        </div>
    )
}

export default Search