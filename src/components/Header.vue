<template>
      <header>
        <b-container>
            <div class="hero-title-content">
                <div class="hero-img">
                    <img src="@/assets/images/AlsoMeCopy.jpg" />
                </div>
                <h1 class="hero-title">
                        Hi,
                <br>  I'm Aston
                </h1>
            </div>
            <div class="bio">
                <p>
                    I am a <b>junior fullstack developer</b> and a <b>software engineer</b> in the making.
                    I can help fill programming needs and solve any problems that come my way. I help build,
                    and maintain <b>websites</b>, deal with <b>APIs</b>, and supply <b>backend</b> business logic in applications.
                    I lack creative design work, but can put together front end material with an exisitng clear picture built.
                    <br>
                    <br>
                    I am currently attending Lamar University to get my degree in Computer Science and Mathematics.
                    I am passionate about learning and solving problems. In my freetime, I am working on projects
                    or learning new things to add to my toolkit.
                </p>
            </div>
            <!-- text break -->
            <hr>
            <div class="social">
                <a href="https://www.linkedin.com/in/aston-jones">
                    <i class="fab fa-linkedin"></i>
                </a>
            </div>
        </b-container>
      </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header{
        margin: var(--size9) 0;
    }
    .hero-title-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .hero-img img{
        width: var(--size9);
        border-radius: var(--md-b-rad);
    }
    h1{
        font-size: var(--size6);
        font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    }
    .bio{
        margin: var(--size6) 0;
        font-size: var(--size4);
    }
    .social{
        font-size: var(--size6);
        text-align: center;
    }

    /* RESPONSIVENESS */
    /* Small devices and up */
    @media only screen and (min-width: 576px) {
        .hero-img img{
            width: var(--size10);
        }
        h1 {
            font-size: var(--size7);
        }
    }

    /* mid sizes and up */
    @media only screen and (min-width: 991px) {
        .hero-img img{
            width: var(--size12);
        }
        h1 {
            font-size: var(--size8);
        }
    }
</style>