<template>
  <div>
    <NavBar />
    <Header />
    <SkillsSection />
    <WorkSection />
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import Header from './components/Header';
import SkillsSection from './components/SkillsSection';
import WorkSection from './components/WorkSection';

export default {
  name: 'App',

  components: {
    NavBar,
    Header,
    SkillsSection,
    WorkSection
  },

  data: () => ({
    //
  }),
};
</script>
