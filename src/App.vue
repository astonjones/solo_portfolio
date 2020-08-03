<template>
  <div>
    <NavBar />
    <Header />
    <SkillsSection />
    <WorkSection />
    <HomeContactSection />
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import Header from './components/Header';
import SkillsSection from './components/SkillsSection';
import WorkSection from './components/WorkSection';
import HomeContactSection from './components/HomeContactSection';

export default {
  name: 'App',

  components: {
    NavBar,
    Header,
    SkillsSection,
    WorkSection,
    HomeContactSection
  },

  data: () => ({
    //
  }),
};
</script>
