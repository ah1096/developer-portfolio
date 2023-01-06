import him from './images/him.jpg';

const fillerpic = {
    name: 'fillerpic',
    imageUrl: him,
    imageHeight: 300,
    imageWidth: 300,
};


export default function BlogPosts(){
    return(
<div className="vh-100" id="BlogSection">
    <div className="px-4 py-5 my-5 ">

        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse  g-5 py-5">

                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Blog Posts</h1>
                        <div>
                            <p>Follow my journey in learning web development.</p>
                            <p>See my most recent post on the left, or click the link below to view previous entries.</p>
                        </div>

                        <button id="linkbutton">
                        see more posts
                        </button>
                </div>

                <div className="col-10 col-sm-8 col-lg-6">
                    <div id="blogTeaseCard" className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={fillerpic.imageUrl} className="img-fluid rounded-start" alt="..."></img>
                            </div>

                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">This week's post: Post Title</h5>
                                    <p className="card-text">wfegrhtjykulio;hgrfd 
                                    gdhfgjhjkdasfdgfhghjsfdgfhgjh
                                    wdsfdghjhjdsfghjswdsfhgjsdfgh...</p>
                                    <a className="card-text"><small className="text-muted" href="#">Read more</small></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    </div>
    </div>

</div>
</div>
    )
}