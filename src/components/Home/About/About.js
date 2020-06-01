import React from 'react';

// import team pictures
import team02 from '../../../assets/home/team/team02.jpg';
import team03 from '../../../assets/home/team/team03.jpg';
import team04 from '../../../assets/home/team/team04.jpg';
import team05 from '../../../assets/home/team/team05.jpg';

function About() {
    return (
        <div id="about">
            <section id="fh5co-about" data-section="about">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 section-heading text-center">
                            <h2 class="to-animate">Our team</h2>
                            <div class="row">
                                <div class="col-md-8 col-md-offset-2 subtext to-animate">
                                    <h3>These are the actors of domus project.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-4">
                            <div class="fh5co-person text-center to-animate">
                                <figure><img src={team05} alt="Image" /></figure>
                                <h3>Vasco Ramos</h3>
                                <span class="fh5co-position">Team Manager</span>
                                <ul class="social social-circle">
                                    <li><a href="https://vascoalramos.me/"><i class="icon-globe"></i></a></li>
                                    <li><a href="https://linkedin.com/in/vascoalramos"><i class="icon-linkedin"></i></a></li>
                                    <li><a href="https://github.com/vascoalramos"><i class="icon-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="fh5co-person text-center to-animate">
                                <figure><img src={team02} alt="Image" /></figure>
                                <h3>João Vasconcelos</h3>
                                <span class="fh5co-position">Product Owner</span>
                                <ul class="social social-circle">
                                    <li><a href="https://jmnmv12.github.io/AboutMePT"><i class="icon-globe"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/joão-vasconcelos/"><i class="icon-linkedin"></i></a></li>
                                    <li><a href="https://github.com/jmnmv12"><i class="icon-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-2"></div>
                        <div class="col-md-2"></div>
                        <div class="col-md-4">
                            <div class="fh5co-person text-center to-animate">
                                <figure><img src={team03} alt="Image" /></figure>
                                <h3>Tiago Mendes</h3>
                                <span class="fh5co-position">DevOps Master</span>
                                <ul class="social social-circle">
                                    <li><a href="https://tiagocmendes.github.io/"><i class="icon-globe"></i></a></li>
                                    <li><a href="https://pt.linkedin.com/in/tiagocmendes"><i class="icon-linkedin"></i></a></li>
                                    <li><a href="https://github.com/tiagocmendes"><i class="icon-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="fh5co-person text-center to-animate">
                                <figure><img src={team04} alt="Image" /></figure>
                                <h3>Francisco Aires</h3>
                                <span class="fh5co-position">Quality engineer</span>
                                <ul class="social social-circle">
                                    <li><a><i class="icon-globe"></i></a></li>
                                    <li><a><i class="icon-linkedin"></i></a></li>
                                    <li><a><i class="icon-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default About;