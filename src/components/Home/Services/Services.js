import React from 'react';

function Services() {
    return (
        <div id="services">
            <section id="fh5co-services" data-section="services">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 section-heading text-left">
                            <h2 class=" left-border to-animate">Services</h2>
                            <div class="row">
                                <div class="col-md-8 subtext to-animate">
                                    <h3>A brief description of the services we plan to implement.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-sm-6 fh5co-service to-animate">
                            <i class="icon to-animate-2 fas fa-laptop"></i>
                            <h3>Web application</h3>
                            <p>We will be using <strong>React</strong> to develop our web application. </p>
                        </div>
                        <div class="col-md-6 col-sm-6 fh5co-service to-animate">
                            <i class="icon to-animate-2 fas fa-mobile"></i>
                            <h3>Mobile and Web applications</h3>
                            <p>For our mobile application we will be using <strong>React Native,</strong> that could be executed in Android or iOS devices.</p>
                        </div>

                        <div class="clearfix visible-sm-block"></div>
                        <div class="col-md-6 col-sm-6 fh5co-service to-animate">
                            <i class="icon to-animate-2 fas fa-cloud-meatball"></i>
                            <h3>Service layer REST API</h3>
                            <p>This module is the core of our information system, responsible to communicate with all the other components. This <strong>REST API</strong>, built in <strong>Spring Boot</strong>, will do CRUD operations to a <strong>MySQL</strong> database and send data to the clients applications.</p>
                        </div>
                        <div class="col-md-6 col-sm-6 fh5co-service to-animate">
                            <i class="icon to-animate-2 fas fa-sync-alt"></i>
                            <h3>Continuous Integration / Continuous Deployment</h3>
                            <p>We will be using the <strong>CI/CD</strong> practise to develop and deploy all our components. For that, we will be using <strong>Docker containers</strong> and also <strong>Gitlab pipelines.</strong></p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;