import React from 'react';

// import works
import work01 from '../../../assets/home/work/work01.png';
import work02 from '../../../assets/home/work/work02.png';
import work03 from '../../../assets/home/work/work03.png';

function Work() {
    return (
        <div id="work">
            <section id="fh5co-work" data-section="work">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 section-heading text-center">
                            <h2 class="to-animate">Work</h2>
                            <div class="row">
                                <div class="col-md-8 col-md-offset-2 subtext to-animate">
                                    <h3>"Talk is cheap. Show me the code!"</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row row-bottom-padded-sm">
                        <div class="col-md-4 col-sm-6 col-xxs-12">
                            <a href={work01} class="fh5co-project-item image-popup to-animate">
                                <img src={work01} alt="Image" class="img-responsive" />
                                <div class="fh5co-text">
                                    <h2>Project planning</h2>
                                    <span>Requirements and system architecure</span>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xxs-12">
                            <a href={work02} class="fh5co-project-item image-popup to-animate">
                                <img src={work02} alt="Image" class="img-responsive" />
                                <div class="fh5co-text">
                                    <h2>Landing page</h2>
                                    <span>Current web page, made with React</span>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xxs-12">
                            <a href={work03} class="fh5co-project-item image-popup to-animate">
                                <img src={work03} alt="Image" class="img-responsive" />
                                <div class="fh5co-text">
                                    <h2>Project setup</h2>
                                    <span>GitLab repositories</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Work;