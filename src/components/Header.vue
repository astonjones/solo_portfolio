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
                    I was born and raised in a small town of Vidor, TX. I am currently a Junior at Lamar University in Beaumont, TX.
                    I strive to one day become a software engineer and I am working at it everyday.
                    I say that I have a passion for learning and a knack for building and making things come to life.
                    I thouroughly enjoy engaging in projects with a team and seeing the accomplishment through.
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
        width: var(--size12);
        border-radius: var(--md-b-rad);
    }
    h1{
        font-size: var(--size8);
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
</style>