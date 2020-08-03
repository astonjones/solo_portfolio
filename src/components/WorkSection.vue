<template>
    <section id="work" class="work-section">
        <b-container>
        <div class="work-content">
          <div class="section-title">
            <div class="title-side"></div>
            <h1>PROJECTS</h1>
            <div class="title-side"></div>
          </div>
          <div class="section-subtext">
            Excuse the load time for my project links, they take a few moments. I am using a non-paid hosting service for them. Sorry for the inconvenience!
          </div>
          <ul class="work-list">

            <!-- YelpCamp -->
            <li class="work-item">
              <!-- <a href="https://secret-bayou-18204.herokuapp.com"> -->
              <div>
                  <b-card
                  title="Yelp Camp"
                  :img-src="require('../assets/images/yelpcampPic.png')"
                  img-alt="Image"
                  img-top
                  tag="article"
                  class="card-image">
                        <b-card-text>
                            Yelp for campgrounds. Sign in, post and comment on different campgrounds. Built with a RESTful API that I made, that also uses MongoDB. Give it a try, sign up and post a campground!
                        </b-card-text>

                        <b-button variant="primary" href="https://floating-cliffs-22487.herokuapp.com/">Go To Project</b-button>
                  </b-card>
              </div>
            <!-- </a> -->
            </li>

            <!-- Exercise Tracker -->
            <li class="work-item">
              <div>
                  <b-card
                  title="Exercise Tracker"
                  :img-src="require('../assets/images/exerciseTrackerPic.png')"
                  img-alt="Image"
                  img-top
                  class="card-image">
                    <!-- <a href="https://floating-cliffs-22487.herokuapp.com/" class="image">
                        <img src="/exerciseTrackerPic.png">
                    </a> -->
                        <b-card-text>
                            A simple REACT app that logs exercises. Also built with MongoDB and a RESTful API that I made. Go ahead and log some exercises!
                        </b-card-text>

                        <b-button variant="primary" href="https://floating-cliffs-22487.herokuapp.com/">Go To Project</b-button>
                  </b-card>
              </div>
            </li>

            <!-- Arcade Machine Build -->
              <li class="work-item">
                <div>
                  <b-card
                  title="Arcade Machine"
                  :img-src="require('../assets/images/arcadeMachine.png')"
                  img-alt="Image"
                  img-top
                  class="card-image">
                        <b-card-text>
                            Built from scratch, and powered by raspberry pi. Not too much on the programming side, but was still a fun project.
                        </b-card-text>

                        <b-button variant="primary" href="https://floating-cliffs-22487.herokuapp.com/">Go To Project</b-button>
                  </b-card>
                </div>
              </li>
          </ul>
        </div>
        </b-container>
      </section>
</template>

<script>
// import yelpcampPic from '@/assets/images/yelpcampPic.png';
// import exerciseTrackerPic from '@/assets/images/exerciseTrackerPic.png';

export default {
    name: 'WorkSection',
}
</script>

<style scoped>
    .work-list{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0;
        padding: 0;
    }
    .section-subtext{
        margin: var(--size6) 0;
        text-align: center;
    }
    .work-item{
        width: var(--size13);
        margin: var(--size4);
        z-index: -1;
    }
</style>