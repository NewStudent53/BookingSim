import imageGrid from '../../assets/images-Grid.jpg'

const Lounge = () => {
    return (
        <div className='lounge container section'>
            <div className='sectionContainer grid'>
                <div className='imgDiv'>
                    <img src={imageGrid} />
                </div>    

                <div className='textDiv'>
                    <h2>Unaccompained Minor Lounge</h2>

                    <div className='grids grid'>
                    <div className="singleGrid">
                        <span className='gridTitle'>
                            Help through the airport
                        </span>
                        <p>
                            You can also call airlines from your phone and book a flight ticket to one of your favorite destination.
                        </p>
                    </div>

                    <div className='grids grid'>
                    <div className="singleGrid">
                        <span className='gridTitle'>
                            Priority Boarding
                        </span>
                        <p>
                            You can also call airlines from your phone and book a flight ticket to one of your favorite destination.
                        </p>
                    </div>

                    <div className='grids grid'>
                    <div className="singleGrid">
                        <span className='gridTitle'>
                            Care on the flight
                        </span>
                        <p>
                            You can also call airlines from your phone and book a flight ticket to one of your favorite destination.
                        </p>
                    </div>

                </div>
            </div>
        </div>

                </div>
        </div> 
    </div>   
    )
}

export default Lounge