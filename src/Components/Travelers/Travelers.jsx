import paris from '../../assets/images-Grid.jpg'
import traveler1 from '../../assets/images-Grid.jpg'
import dubai from '../../assets/images-Grid.jpg'
import traveler2 from '../../assets/images-Grid.jpg'
import newyork from '../../assets/images-Grid.jpg'
import traveler3 from '../../assets/images-Grid.jpg'

const travelers = [
    {
        id: 1,
        destinationImage: paris,
        travelerImage: traveler1,
        travelerName: 'JhonDoe',
        socialLink: '@jhondo3'
    },

    {
        id: 2,
        destinationImage: dubai,
        travelerImage: traveler2,
        travelerName: 'JhonDoe',
        socialLink: '@jhondo3'
    },

    {
        id: 3,
        destinationImage: newyork,
        travelerImage: traveler3,
        travelerName: 'JhonDoe',
        socialLink: '@jhondo3'
    }
]

const Travelers = () => {
    return (
        <div className="travelers container section">
            <div className="sectionContainer">
                <h2>
                    Top travelers of this month!
                </h2>

                <div className="travelersContainer grid">

                    {/* single info card */}

                    {
                        travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink})=>{
                            return(
                                <div key={id} className="singleTraveler">
                                    <img src={destinationImage} className='destinationImage' />

                                    <div className="travelerDetails">
                                        <div className="travelerPicture">
                                            <img src={travelerImage} className='travelerImage' />
                                        </div>
                                        <div className="travelerName">
                                            <span>{travelerName}</span>
                                            <p>{socialLink}</p>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Travelers