import React from 'react';

function Intro() {

    return (
        <div id="intro">
            <section id="fh5co-intro">
                <div class="container">
                    <div class="row row-bottom-padded-lg">
                        <div class="fh5co-block to-animate">
                            <div class="overlay-darker"></div>
                            <div class="overlay"></div>
                            <div class="fh5co-text">
                                <i class="fh5co-intro-icon fas fa-search"></i>
                                <h2>Find houses</h2>
                                <p>With domus, you can find houses that are available for rental with low effort.</p>
                            </div>
                        </div>
                        <div class="fh5co-block to-animate" >
                            <div class="overlay-darker"></div>
                            <div class="overlay"></div>
                            <div class="fh5co-text">
                                <i class="fh5co-intro-icon fas fa-home"></i>
                                <h2>Publish houses</h2>
                                <p>If you want to rent your house, you can publish it in our system for potential customers.</p>
                            </div>
                        </div>
                        <div class="fh5co-block to-animate">
                            <div class="overlay-darker"></div>
                            <div class="overlay"></div>
                            <div class="fh5co-text">
                                <i class="fh5co-intro-icon fas fa-balance-scale"></i>
                                <h2>House comparison</h2>
                                <p>In order to choose the best house that suits your needs, compare two or more houses!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Intro;