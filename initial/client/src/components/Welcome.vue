<template>
  <div>
    <div class="navbar navbar-default navbar-static-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/#">
            <img src="../assets/images/grails.svg" alt="Grails Logo"/>

          </a>
        </div>
        <div class="navbar-collapse collapse" aria-expanded="false" style="height: 0.8px;">
          <ul class="nav navbar-nav navbar-right">

            <dropdown tag="li">
              <btn type="primary" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                   aria-expanded="false">Application Status <span class="caret"></span></btn>
              <template slot="dropdown">
                <li v-if="serverInfo"><a href="#">Environment: {{serverInfo.environment}}</a></li>
                <li v-if="serverInfo"><a href="#">App profile: {{serverInfo.appprofile}}</a></li>

                <li role="separator" class="divider"></li>
                <li v-if="serverInfo"><a href="#">Grails version: {{serverInfo.grailsversion}}</a></li>
                <li v-if="serverInfo"><a href="#">Groovy version: {{serverInfo.groovyversion}}</a></li>
                <li v-if="serverInfo"><a href="#">JVM version: {{serverInfo.jvmversion}}</a></li>
                <li role="separator" class="divider"></li>
                <li v-if="serverInfo"><a href="#">Reloading active: {{serverInfo.reloadingagentenabled ? 'true' :
                  'false' }}</a></li>
              </template>
            </dropdown>
            <dropdown tag="li">
              <btn type="primary" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                   aria-expanded="false">Artefacts <span class="caret"></span></btn>
              <template slot="dropdown" v-if="serverInfo">
                <li v-if="serverInfo.artefacts"><a href="#">Controllers: {{serverInfo.artefacts.controllers}}</a></li>
                <li v-if="serverInfo.artefacts"><a href="#">Domains: {{serverInfo.artefacts.domains}}</a></li>
                <li v-if="serverInfo.artefacts"><a href="#">Services: {{serverInfo.artefacts.services}}</a></li>
              </template>
            </dropdown>
            <dropdown tag="li">
              <btn type="primary" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                   aria-expanded="false">Installed Plugins <span class="caret"></span></btn>
              <template slot="dropdown" v-if="serverInfo">
                <li v-for="plugin in serverInfo.plugins" :key="plugin.name">
                  <a href="#">{{ plugin.name }} - {{ plugin.version }}</a>
                </li>

              </template>
            </dropdown>

          </ul>
        </div>
      </div>
    </div>

    <div class="svg" role="presentation">
      <div class="grails-logo-container">
        <img src="../assets/images/grails-cupsonly-logo-white.svg" class="grails-logo"/>
        <span class="plus-logo">+</span>
        <img src="../assets/logo.png" class="hero-log"/>
      </div>
    </div>

    <div id="content" role="main">
      <section class="row colset-2-its">
        <h1>Welcome to Grails</h1>

        <p>
          Congratulations, you have successfully started your Grails & Vue.js application!
          While in development mode, changes will be loaded automatically when you edit your Vue.js app, without even
          refreshing the page.
          Below is a list of controllers that are currently deployed in
          this application, click on each to execute its default action:
        </p>

        <div id="controllers" role="navigation">
          <h2>Available Controllers:</h2>
          <ul v-if="serverInfo">

            <li v-if="serverInfo.controllers" v-for="controller in serverInfo.controllers" :key="controller.name">
              <a :href="serverURL + '/' + controller.logicalPropertyName">{{controller.name }}</a></li>
          </ul>
        </div>
      </section>
    </div>

    <div class="footer" role="contentinfo"></div>

  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Welcome to Your Grails & Vue.js App',
      serverInfo: null,
      showLinks: false,
      serverURL: process.env.SERVER_URL
    }
  },
  methods: {
    toggleLinks: function () {
      this.showLinks = !this.$data.showLinks
    }
  },
  created: function () {
    fetch(`${this.$data.serverURL}/application`)
      .then(response => response.json())
      .then(json => {
        this.serverInfo = json
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .navbar-nav li button {
    background: transparent;
    border: none;
    line-height: 20px;
    font-size: 18px;
    color: white;
    padding: 25px 15px;
  }

  .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {
    background-color: #e7e7e7;
  }

  button span.caret {
    margin-left: 2px;
  }

  .plus-logo {
    font-size: 10rem;
    margin-left: -100px;
    margin-right: -13px;
  }

  .hero-logo {
    width: 161px;
    margin-right: -161px;
    margin-bottom: 88px;
  }
</style>
