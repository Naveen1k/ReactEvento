import Navbar from "./Components/Navbar";
import "./EventInfo.css"
import { ImPriceTag } from 'react-icons/im';
import { TbArmchair } from 'react-icons/tb';
import { FcRatings } from 'react-icons/fc';
import { RiRefund2Fill } from 'react-icons/ri';
import { TiStarFullOutline } from 'react-icons/ti';
import { TiStarHalfOutline } from 'react-icons/ti';
import { TiStarOutline } from 'react-icons/ti';
import Rating from "./Rating.json"
// import { createAvatar } from '@dicebear/avatars';
import Footer from "./Components/Footer";
const EventInfo = () => {

    const bodyStyle = {
        color: 'white'
    };

    function getStarElements(val) {

        const fullStars = Math.floor(val);
        console.log(fullStars)
        const halfStars = val % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStars;

        // Create the full, half, and empty star elements
        const starElements = [];
        for (let i = 0; i < fullStars; i++) {
            const element = <TiStarFullOutline key={i} />;
            starElements.push(element);
        }
        if (halfStars) {
            const element = <TiStarHalfOutline key={fullStars} />;
            starElements.push(element);
        }
        for (let i = 0; i < emptyStars; i++) {
            const element = <TiStarOutline key={fullStars + halfStars + i} />;
            starElements.push(element);
        }

        return starElements;
    }

    return (
        <>
            <body style={bodyStyle}>

                <Navbar />

                <div className="info-container">
                    <div className="info-sub-container">
                        <div className="content-div">
                            <div className="inner-div">
                                <img className="img-info" src="/ReactEvento/images/rodeo.png" alt="loading..." />
                                <div className="title-handle"><h3>Title here </h3> </div>
                            </div>

                            <div className="discription-div">
                                <p>jdjbbfurbcubfubcjfbcbfvj hcfu v jf vjfbvufbvulfu vfhhvfhv gfuhvhufgygvuyfb bu vgfuvufguvgfjv ufygvfvu f dkdnnif cfgvhfvf</p>
                            </div>

                            <div className="all-info-div">
                                <div className="comman-info i-price">
                                    <h1><ImPriceTag /></h1>
                                    <h2>$100</h2>
                                </div>
                                <div className="comman-info i-seat">
                                    <h1><TbArmchair /></h1>
                                    <h2>99</h2>
                                </div>
                                <div className="comman-info i-rating">
                                    <h1><FcRatings /></h1>
                                    <h2>4.5</h2>
                                </div>

                                <div className="comman-info i-ref">
                                    <h1><RiRefund2Fill /></h1>
                                    <h2>No</h2>
                                </div>
                            </div>

                        </div>

                        <div className="illust-div">
                            <img src="/ReactEvento/images/infopic.svg" className="ill-info" alt="loading..." />
                        </div>

                    </div>









<div className="Center_1">
     <button className="custom-btn btn-2">Buy</button>
     </div>


                    {/* review */}
                    {
                        Rating.map((item, index) => {
                            const starElements = getStarElements(item.Stars);
                            return (
                                <div className="review-container">
                                    <div className="all-prof-container">
                                        <div className="prof-img-div">
                                            <img src="./ReactEvento/images/helo.png" className="reviewer-img" alt="loading" />
                                        </div>

                                        <div className="reviewer-name">
                                            <h2>{item.Name}</h2>
                                        </div>

                                    </div>

                                    <div className="star-container">
                                        <div >
                                            {starElements}
                                        </div>

                                    </div>

                                    <div className="rev-comment">
                                        <p>{item.Comment}</p>
                                    </div>

                                </div>
                            )
                        })

                    }


                </div>

            </body>
            <Footer/>
        </>
    )
}
export default EventInfo;