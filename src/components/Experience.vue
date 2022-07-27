<template>
  <div>
    <h2>Experience</h2>
    <div class="timeline">
      <div class="year-container">
        <span class="year">2020</span>
      </div>
      <ul>
        <br /><br /><br />
        <li>
          <div class="content">
            <h3>A-HOST</h3>
            <h5>Software Developer</h5>
            <div class="grey">August 2020 - December 2020</div>
            <br />
            <p>
              - Develop Web Application and report using PHP & Laravel Framework
              for Backend and using VUEJS for Frontend
              <br /><br /><br />
              - Designing Web Application and Database
              <br /><br /><br />
              - Develop and customize report using Oracle database and Oracle
              EBS
            </p>
          </div>
        </li>
        <br />
        <br />
      </ul>
      <div class="year-container">
        <span class="year">2021</span>
      </div>
      <ul>
        <br />
        <br />
        <br />
        <li>
          <div class="content align-left">
            <a href="https://seclogic.io" target="_blank">
              <h3>A-HOST</h3>
              <h5>Software Developer</h5>
              <div class="grey">January 2021 - December 2021</div>
              <br />
              <p>
                - Trained and supervised new staff members and co-op students.
                <br /><br /><br />
                - Develop web application for show employee expenses in graph
                using Vuejs and nuxtjs
                <br /><br /><br />
                - Design a database to suit the work of the web application
                Proof of concept Microsoft power platforms and DevOps such as
                Power app, Power Automate, and Azure DevOps.
              </p>
            </a>
          </div>
        </li>
      </ul>
      <div class="year-container">
        <span class="year">2022</span>
      </div>
      <ul>
        <br />
        <br />
        <br />
        <li>
          <div class="content align-left">
            <a href="https://seclogic.io" target="_blank">
              <h3>A-HOST</h3>
              <h5>Software Developer</h5>
              <div class="grey">January 2022 - March 2022</div>
              <br />
              <p>
                - Develop ERP report for customer using Oracle e business suite
                and Sql developer
                <br /><br /><br />
                - Develop API Management for interface data from third party to
                destination and can save data into database
                <br /><br /><br />
              </p>
            </a>
          </div>
        </li>
      </ul>
      <div class="year-container">
        <span class="present">Present</span>
      </div>
      <ul>
        <br />
        <br />
        <br />
        <li>
          <div class="content align-left">
            <h3>Integra8t</h3>
            <h5>Software Developer</h5>
            <div class="grey">March 2022 - Present</div>
            <br />
            <p>- Develop Web Application E-commerce Using Vuejs and Nuxtjs</p>
          </div>
        </li>
      </ul>
      <div class="green-dot"></div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Experience",
};
</script>
<style scoped>
h2 {
  font-weight: 500;
  color: white;
  font-size: 1.8rem;
  border-bottom: 10px solid green;
  line-height: 0.4;
  width: 60px;
  transition: all ease 0.3s;
  margin-bottom: 2rem;
}

strong {
  font-weight: 500;
  color: #1db954;
}

a {
  color: white;
  border: none;
  text-decoration: none;
}

.green-dot {
  width: 16px;
  height: 16px;
  background: #1db954;
  border-radius: 50%;
  margin-left: -0.45em;
}

.year-container {
  position: absolute;
  margin: 0 -2.25em;
  z-index: 9999;
}

.year {
  color: white;
  font-weight: 500;
  font-size: 1.5rem;
  background: #1db954;
  border-radius: 16px;
  padding: 0.5rem;
}
.present {
  color: white;
  font-weight: 500;
  font-size: 1.5rem;
  background: -webkit-linear-gradient(45deg, #09009f, #00ff95 80%);
  border-radius: 16px;
  padding: 0.5rem;
}

h2:hover {
  font-size: 1.8rem;
  font-weight: 500;
  color: white;
  border-bottom: 10px solid #1db954;
  line-height: 0.4;
  width: 100px;
  transition: all ease 0.3s;
}

div {
  color: white;
  font-family: "canada-type-gibson" !important;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "canada-type-gibson", sans-serif;
  perspective: 800px;
}

.grey {
  color: #ddd;
  font-size: 0.9rem;
}

body {
  display: flex;
}

.timeline {
  width: 100%;
  background-color: #1a202c;
  color: #fff;
  padding: 30px 20px;
  word-wrap: normal;
}

.timeline ul {
  list-style-type: none;
  border-left: 2px solid white;
  padding: 10px 5px;
}

.timeline ul li {
  padding: 20px 20px;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
}

.timeline ul li span {
  display: inline-block;
  border-radius: 25px;
  padding: 2px 5px;
  font-size: 15px;
  text-align: center;
}

.timeline ul li .content h3 {
  color: #1db954;
  font-size: 1.6rem;
  padding-top: 5px;
  font-weight: 500;
  margin-bottom: 0.2rem;
}

h5 {
  font-size: 1.2rem;
  padding-top: 5px;
  font-weight: 500;
  margin-bottom: 8px;
}

.timeline ul li .content p {
  padding: 5px 0px 15px 0px;
  font-size: 15px;
}

.timeline ul li:before {
  position: absolute;
  content: "";
  width: 10px;
  height: 10px;
  background-color: lawngreen;
  border-radius: 50%;
  left: -11px;
  top: 28px;
  transition: 0.5s;
  margin: 0;
}

.timeline ul li:hover {
  background-color: #1b405e;
  border-radius: 8px;
}

.timeline ul li:hover:before {
  background-color: #0f0;
  box-shadow: 0px 0px 10px 2px #0f0;
}

@media (max-width: 300px) {
  .timeline {
    width: 100%;
    padding: 30px 5px 30px 10px;
  }

  .timeline ul li .content h3 {
    color: #1db954;
    font-size: 15px;
  }
}
</style>