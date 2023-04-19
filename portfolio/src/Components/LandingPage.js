import logo from '../images/AH_coding_logo.png'
const brandLogo = {
    name: 'brandLogo',
    imageUrl: logo,
};


export const LandingPage = () => {
    return ( 
        <div id="landingpage" className="container vh-100 w-100 mx-auto">
            <div className="row align-items-center vh-100">

                <div id="landingtext" className="col-8">
                    <h1>Hi, I'm Alyssa</h1>
                    <p>a full stack developer with a passion for creating engaging user experiences and elegant applications.</p>
                    <p>Currently searching for new opportunities.</p>
                </div>

                <div id="landingicon" className="col-4">
                    <img className="w-100" src={brandLogo.imageUrl} alt="a dark pink hexagon inside with is Alyssa Holbert's brand logo, a small letter H inside of a large letter A; boths letters share a horizontal line" />
                </div>
            </div>
        </div>
    );
};