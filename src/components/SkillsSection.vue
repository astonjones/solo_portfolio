<template>
    <section id="skills" class="skills-section">
        <b-container>
        <div class="skills-content">
            <div class="section-title">
              <div class="title-side"></div>
              <h1>SKILLS</h1>
              <div class="title-side"></div>
            </div>
            <!-- Table of Skills -->
            <table class="ui blue celled table">
              <thead>
                <tr><th>Skill</th>
                <th>Years</th>
                <th>Desc</th>
              </tr></thead>
              <tbody>
                <tr>
                  <td data-label="Name">Java</td>
                  <td data-label="Age">3 years</td>
                  <td data-label="Job">My first and best programming language. I picked it up in college and still use it for algorithm design</td>
                </tr>
                <tr>
                  <td data-label="Name">Javascript</td>
                  <td data-label="Age">2.5 years</td>
                  <td data-label="Job">My second programming language and most popular. Great use for internet relations</td>
                </tr>
                <tr>
                  <td data-label="Name">React</td>
                  <td data-label="Age">&lt; 1 year</td>
                  <td data-label="Job">An overall amazing tool to make websites with. Concept of re-using components make the framework very powerful</td>
                </tr>
                <tr>
                  <td data-label="Name">MongoDB</td>
                  <td data-label="Age">2 years</td>
                  <td data-label="Job">MongoDB has great potential for what it is worth. Easy for smaller projects that I work with</td>
                </tr>
                <tr>
                  <td data-label="Name">RESTful APIs</td>
                  <td data-label="Age">2 years</td>
                  <td data-label="Job">Building web databases with REST architecture is always an interesting project, something I'd like to dig more into</td>
                </tr>
                <tr>
                  <td data-label="Name">Kotlin</td>
                  <td data-label="Age">&lt; 1 year</td>
                  <td data-label="Job">Kotlin is the most recent language I picked up, it's an efficient substitute for Java in Android Studio</td>
                </tr>
                <tr>
                  <td data-label="Name">Android Studio</td>
                  <td data-label="Age">&lt; 1 year</td>
                  <td data-label="Job">I am slowly diving into building android apps and would love to have it apart of my toolkit</td>
                </tr>
                <tr>
                  <td data-label="Name">Vue</td>
                  <td data-label="Age">&lt; 1 year</td>
                  <td data-label="Job">This is my newest pick up from my line of programming. This is by far my most favorite frondend framework</td>
                </tr>
              </tbody>
            </table>
        </div>
        </b-container>
      </section>
</template>

<script>
export default {
    name: 'SkillsSection'
}
</script>

<style scoped>

</style>