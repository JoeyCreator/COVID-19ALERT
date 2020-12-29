<template>
  <div>
    <div class="lg:max-w-5xl mx-auto md:px-4 p-4">
      <h1 class="text-4xl font-bold">Canada COVID-19 Health</h1>
      <h4 class="text-xs">
        Source:
        <a
          class="border-b border-dotted text-blue-600 border-blue-600 hover:text-blue-800 hover:border-blue-800"
          target="_blank"
          href="https://www.canada.ca/fr/sante-canada.html"
          >Canada Deptartment of Health</a
        >
        <p>Last updated: {{ currentDateTime() }}</p>
      </h4>
    </div>
    <div class="alert-banner" role="alert">
      <h4 class="md-ca">
        <i class="fas fa-exclamation-triangle"></i> Attention!
      </h4>
      <p>
        Several regions are now orange and red on Quebec’s COVID-19 alert
        system. you can
        <a
          class="col-2"
          href="https://www.quebec.ca/en/health/health-issues/a-z/2019-coronavirus/"
          >consult the information on COVID-19</a
        >
        or select one of the following options:<a
          class="col-3"
          href="https://www.quebec.ca/en/health/health-issues/a-z/2019-coronavirus/covid-19-symptom-self-assessment-tool/"
          >Symptom self-assessment tool</a
        >
        |
        <a
          class="col-4"
          href="https://www.quebec.ca/en/health/health-issues/a-z/2019-coronavirus/self-care-guide-covid-19/"
          >Self-Care Guides</a
        >
        |<a
          class="col-5"
          href="https://www.quebec.ca/en/health/health-issues/a-z/2019-coronavirus/#c46331"
        >
          Who should you contact if you display symptoms?</a
        >
      </p>
      <hr />
      <p class="mb-0">
        COVID-19 affects different people in different ways. Most infected
        people will develop mild to moderate illness and recover without
        hospitalization.
      </p>
    </div>
    <iframe
      src="https://experience.arcgis.com/experience/4ab8757241cc4d3fab81c8f86a501ce9"
      height="550"
      width="90%"
    ></iframe>
    <br />
    <iframe
      src="https://ourworldindata.org/grapher/total-cases-covid-19?tab=map"
      width="90%"
      height="550px"
    ></iframe>
    <div class="pb-4">
      <h4 class="text-xs">
        Developed by Joey Cadieux &middot;
        <a class="text-blue-600" href="mailto:joey@tech-center.com"
          >Contact Me</a
        >
        &middot;
        <a class="text-blue-600" href="https://forms.gle/aGjKprCfrrmNhtfa7"
          >Found an issue?</a
        >
      </h4>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  methods: {
    currentDateTime() {
      return moment().format("MMMM Do YYYY, h:mm:ss a");
    },
  },
};
</script>

<style scoped>
main {
  padding: 100px;
}
.alert-banner {
  background-color: rgb(219, 32, 32);
  color: white;
  padding-top: 1rem;
  padding-bottom: 40px;
  border-radius: 25px;
  margin: 90px;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: bold;
}
h4.md-ca {
  font-weight: bold;
  font-style: initial;
}
a.col-2 {
  color: rgb(208, 208, 223);
  text-decoration: underline;
}
a.col-3 {
  color: rgb(208, 208, 223);
  text-decoration: underline;
}
a.col-4 {
  color: rgb(208, 208, 223);
  text-decoration: underline;
}
a.col-5 {
  color: rgb(208, 208, 223);
  text-decoration: underline;
}
div.pb-4 {
  font-weight: Lato;
}
</style>