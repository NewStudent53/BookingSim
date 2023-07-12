import gridImage from '../../assets/Images-Grid.jpg'

const Support = () => {
    return (
        <div className="support container section">
            <div className="sectionContainer">
                <div className="tittlesDiv">
                    <small>travel support</small>
                    <h2>Plan your travel with confidence</h2>
                    <p>Find help with booking and travel plans, see what to expect along the journey!</p>
                </div>

                <div className="infoDiv grid">
                    <div className="textDriv grid">

                        <div className="singleInfo">
                            <span className="number colorOne">01</span>
                            <h4>Travel Requirements for Dubai</h4>
                            <p>
                                Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
                            </p>
                        </div>

                        <div className="singleInfo">
                            <span className="number">02</span>
                            <h4>Chaffeur services at your arrival</h4>
                            <p>
                                Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
                            </p>
                        </div>

                        <div className="singleInfo">
                            <span className="number">03</span>
                            <h4>Multi-risk travel insurance</h4>
                            <p>
                                Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
                            </p>
                        </div>

                    </div>

                    <div className="imgDiv">
                        <img src={gridImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support

//1:0:11