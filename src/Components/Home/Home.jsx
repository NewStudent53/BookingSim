import video from '../../assets/video.mp4'
import aeroplane from '../../assets/plane.png'

const Home = () => {
    return (
        <div className="home flex container">

            <div className="mainText">
                <h1>Find the Price that is right for you, and travel away! </h1>
            </div>

            <div className="homeImages flex">

                <div className="videoDiv">
                    <video src={video} autoPlay muted loop className="video"></video>
                </div>

                <img src={aeroplane} className="plane" />

            </div>

        </div>
    )
}

export default Home