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
            <li v-for="workItem in workItems" :key="workItem.id" class="work-item">
              <a :href="workItem.link" class="card-link">
              <div>
                    <b-card
                    :title="workItem.title"
                    :img-src="workItem.img"
                    img-alt="Image"
                    img-top
                    class="card-image">
                          <b-card-text>
                              {{ workItem.text }}
                          </b-card-text>

                          <b-button variant="primary" :href="workItem.link">Go To Project</b-button>
                    </b-card>
              </div>
              </a>
            </li>
          </ul>
        </div>
        </b-container>
      </section>
</template>

<script>

export default {
    name: 'WorkSection',
    data: function(){
      return{
        workItems: [
          {
            title: 'YelpCamp',
            link: 'https://secret-bayou-18204.herokuapp.com',
            img: require('../assets/images/yelpcampPic.png'),
            text: 'Yelp for campgrounds. Sign in, post and comment on different campgrounds. Built with a RESTful API that I made, that also uses MongoDB. Give it a try, sign up and post a campground!'
          },
          {
            title: 'Exercise Tracker',
            link: 'https://floating-cliffs-22487.herokuapp.com',
            img: require('../assets/images/exerciseTrackerPic.png'),
            text: 'A simple REACT app that logs exercises. Also built with MongoDB and a RESTful API that I made. Go ahead and log some exercises!'
          },
          {
            title: 'Artist Website',
            link: 'https://www.keithcarterphotographs.com/',
            img: require('../assets/images/carterSite.png'),
            text: 'This is a website I regularly do maintanence on. The client is the renowned artist "Keith Carter."'
          },
          {
            title: 'Arcade Machine',
            link: 'https://imgur.com/gallery/1JoO7Gf',
            img: require('../assets/images/arcadeMachine.png'),
            text: 'Built from scratch, and powered by raspberry pi. Not too much on the programming side, but was still a fun project.'
          }
        ]
      }
    }
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
    .card img{
      height: var(--size13);
      width: 100%;
      object-fit: cover;
    }
    .card-link{
      color: black;
      z-index: 1;
    }
    .section-subtext{
      font-size: var(--size4);
        margin: var(--size6) 0;
        text-align: center;
    }
    .work-item{
        width: var(--size13);
        margin: var(--size4);
        /* z-index: -1; */
    }
</style>