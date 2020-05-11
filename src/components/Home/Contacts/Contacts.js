import React from 'react';

function Contacts() {
    return (
        <div id='contacts'>
            <section id="fh5co-contact" data-section="contact">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 section-heading text-center">
                            <h2 class="to-animate">Get In Touch</h2>
                            <div class="row">
                                <div class="col-md-8 col-md-offset-2 subtext to-animate">
                                    <h3>You can contact our team through any of the following options:</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row row-bottom-padded-md">
                        <div class="col-md-6 to-animate">
                            <h3>Contact Info</h3>
                            <ul class="fh5co-contact-info">
                                <li class="fh5co-contact-address ">
                                    <i class="icon-home"></i>
                                    DETI - Departamento de Eletrónica, Telecomunicações e Informática <br />Universidade de Aveiro - Aveiro, Portugal
						</li>
                                <li><i class="icon-globe"></i> <a href="tqs-domus.gitlab.io" target="_blank">tqs-domus.gitlab.io</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 to-animate">
                            <h3>Contact Form</h3>
                            <div class="form-group ">
                                <label for="name" class="sr-only">Name</label>
                                <input id="name" class="form-control" placeholder="Name" type="text" />
                            </div>
                            <div class="form-group ">
                                <label for="email" class="sr-only">Email</label>
                                <input id="email" class="form-control" placeholder="Email" type="email" />
                            </div>
                            <div class="form-group ">
                                <label for="phone" class="sr-only">Phone</label>
                                <input id="phone" class="form-control" placeholder="Phone" type="text" />
                            </div>
                            <div class="form-group ">
                                <label for="message" class="sr-only">Message</label>
                                <textarea name="" id="message" cols="30" rows="5" class="form-control" placeholder="Message"></textarea>
                            </div>
                            <div class="form-group ">
                                <input class="btn btn-primary btn-lg" value="Send Message" type="submit" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="map" class="to-animate"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12111.403040827674!2d-8.6594933!3d40.6331731!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb7479e7acd5edb6e!2sDETI%20-%20Departamento%20de%20Electr%C3%B3nica%2C%20Telecomunica%C3%A7%C3%B5es%20e%20Inform%C3%A1tica!5e0!3m2!1spt-PT!2spt!4v1589234059394!5m2!1spt-PT!2spt" width="100%" height="600" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>
            </section>
        </div >
    );
}

export default Contacts;