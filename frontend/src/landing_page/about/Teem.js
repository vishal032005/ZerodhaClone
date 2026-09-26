import React, {useState} from 'react';



function Teem() {
    const [showBioNK, setShowBioNK] = useState(false);
    const [showBioKaN, setShowBioKaN] = useState(false);
    const [showBioVM, setShowBioVM] = useState(false);
    const [showBioSP, setShowBioSP] = useState(false);
    const [showBioKR, setShowBioKR] = useState(false);
    const [showBioAP, setShowBioAP] = useState(false);
    return (
        <div className='container text-muted p-4'>
            <div className='row mt-5 mb-5'>
                <div >
                    <h4 className='text-center mb-5'>People</h4>
                    <div className='row mt-5'>
                        <div className='col-2'></div>
                        <div className='col-3 text-center'>
                            <img src='media/images/Vishal.jpeg' className='about-img' ></img>
                            <p className='mt-4'>Vishal Kumar</p>
                            <p>Devloper</p>
                        </div>
                        <div className='col p-4'>
                            <p> Vishal is a Computer Science & Engineering student who enjoys turning ideas into practical software projects. He is currently exploring Java, Data Structures & Algorithms, Web Development, React, and AI/ML while building projects to strengthen his skills.</p>

                            <p>He believes in learning by building — experimenting with new technologies, solving problems, and continuously improving his understanding of software development.</p>

                            <p>Coding is his way of turning curiosity into creation..</p>

                            <p>Connect on LinkedIn / GitHub / Portfolio</p>
                        </div>
                        <div className='col-1'></div>
                    </div>
                </div>
            </div>
            <div className='row mt-5 text-center mb-5 p-4'>
                <div className='col-1 '></div>
                <div className='col text-center'>
                    <img src='media/images/Nikhil.jpg' className='about-img-e'></img>
                    <h5>Nikhil Kamath</h5>
                    <p>Co-founder & CFO</p>
                  
                    <p className="text-grey show-bio">
                        <a 
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setShowBioNK(!showBioNK);
                            }}
                        >
                            Bio
                            <i className={showBioNK ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"}></i>
                        </a>
                    </p>

                    <div
                        className="team-featured-desc "
                        style={{ display: showBioNK ? "block" : "none" }}
                    >
                        <p >
                            Nikhil is an astute and experienced investor, and he heads
                            financial planning at Zerodha. An avid reader, he always
                            appreciates a good game of chess.
                        </p>
                    </div>

                </div>
                <div className='col'>
                    <img src='media/images/Kailash.jpg ' className='about-img-e'></img>
                    <h5>Dr. Kailash Nadh</h5>
                    <p>CTO</p>
                    <p className="text-grey show-bio">
                        <a 
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setShowBioKaN(!showBioKaN);
                            }}
                        >
                            Bio
                            <i className={showBioKaN ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"}></i>
                        </a>
                    </p>

                    <div
                        className="team-featured-desc "
                        style={{ display: showBioKaN ? "block" : "none" }}
                    >
                        <p >
                            Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.
                        </p>
                    </div>
                </div>
                <div className='col'>
                    <img src='media/images/Venu.jpg' className='about-img-e'></img>
                    <h5>Venu Madhav</h5>
                    <p>COO</p>
                    <p className="text-grey show-bio">
                        <a 
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setShowBioVM(!showBioVM);
                            }}
                        >
                            Bio
                            <i className={showBioVM ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"}></i>
                        </a>
                    </p>

                    <div
                        className="team-featured-desc "
                        style={{ display: showBioVM ? "block" : "none" }}
                    >
                        <p >
                            Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.
                        </p>
                    </div>
                </div>
                <div className='col-1'></div>

            </div>
            <div className='row mt-5 text-center mb-5 p-4'>
                <div className='col-1'></div>
                <div className='col'>
                    <img src='media/images/Seema.jpg' className='about-img-e'></img>
                    <h5>Seema Patil</h5>
                    <p>Director</p>
                    <p className="text-grey show-bio">
                        <a 
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setShowBioSP(!showBioSP);
                            }}
                        >
                            Bio
                            <i className={showBioSP ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"}></i>
                        </a>
                    </p>

                    <div
                        className="team-featured-desc "
                        style={{ display: showBioSP ? "block" : "none" }}
                    >
                        <p >
                           Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.
                        </p>
                    </div>
                </div>
                <div className='col'>
                    <img src='media/images/Karthik.jpg' className='about-img-e'></img>
                    <h5>Karthik Rangappa</h5>
                    <p>Chief of Education</p>
                    <p className="text-grey show-bio">
                        <a 
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setShowBioKR(!showBioKR);
                            }}
                        >
                            Bio
                            <i className={showBioKR ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"}></i>
                        </a>
                    </p>

                    <div
                        className="team-featured-desc "
                        style={{ display: showBioKR ? "block" : "none" }}
                    >
                        <p >
                           Karthik "Guru" Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.
                        </p>
                    </div>
                </div>
                <div className='col'>
                    <img src='media/images/Austin.jpg' className='about-img-e'></img>
                    <h5>Austin Prakesh</h5>
                    <p>Director Strategy</p>
                    <p className="text-grey show-bio">
                        <a 
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setShowBioAP(!showBioAP);
                            }}
                        >
                            Bio
                            <i className={showBioAP ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"}></i>
                        </a>
                    </p>

                    <div
                        className="team-featured-desc "
                        style={{ display: showBioAP ? "block" : "none" }}
                    >
                        <p >
                            Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches.
                        </p>
                    </div>
                </div>
                <div className='col-1'></div>

            </div>
        </div>
    );
}

export default Teem;