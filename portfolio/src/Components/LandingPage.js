import logo from '../images/AH_coding_logo.png';
import { useSlideInFromBottom } from '../Hooks/UseSlideInFromBottom';

const brandLogo = {
    name: 'brandLogo',
    imageUrl: logo,
};



export const LandingPage = () => {
    useSlideInFromBottom();

    return ( 
        <div id="landingpage" className="container vh-100 w-100 mx-auto">
            <div className="row align-items-center vh-100  slide-in-bottom">

                <div id="landingtext" className="col-8">
                    <h1>Hi, I'm Alyssa!</h1>
                    <p>a
                        <strong className="highlighttext"> full stack developer </strong>
                        with a passion for creating engaging user experiences and elegant applications.
                    </p>
                    <p>I'm currently searching for <strong className="highlighttext">new opportunities</strong>. 
                    Let's get in touch!
                    </p>

                    <small id="japaneselink">日本語のサイトはこちら X</small>
                </div>

                <div id="landingicon" className="col-4">
                    <img className="w-100" src={brandLogo.imageUrl} alt="a dark pink hexagon inside with is Alyssa Holbert's brand logo, a small letter H inside of a large letter A; boths letters share a horizontal line" />
                </div>
            </div>
        </div>
    );
};