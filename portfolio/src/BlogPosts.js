import AHLogoLight from './images/AH_coding_logo.png';
const BlogLogo = {
    name: 'AHLogoLight',
    imageUrl: AHLogoLight,
    imageHeight: 200,
    imageWidth: 200,
};


export default function BlogPosts(){
    return(
<div className="vh-100 d-flex align-items-middle justify-content-center" id="BlogSection">
    <div className="px-4 py-5 my-5 ">

        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse  g-5 py-5">

                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Blog</h1>
                        <div>
                            <p>See my most recent posts about web development on Hashnode.</p>
                            <button className="btn btn-outline-light"><i class="fa-brands fa-hashnode"></i><a href="https://alyssah.hashnode.dev/" target="_blank" rel="noreferrer">blog</a></button>
                        </div>
                </div>

                <div className="col-10 col-sm-8 col-lg-6">
                        <div className="row g-0">
                            <div className="col-md-12">
                                <img src={BlogLogo.imageUrl}
                                height={BlogLogo.imageHeight}
                                width={BlogLogo.imageWidth}
                                alt="Alyssa Holbert coding logo; a pink hexagon"/>
                            </div>
                        </div>
                </div>

    </div>
    </div>

</div>
</div>
    )
}