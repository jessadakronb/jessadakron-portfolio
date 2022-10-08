<template>
  <div class="hero">
    <div class="image-holder">
      <img
        src="../assets/my-pic.jpg"
        alt="Image of Jessadakron"
        lazy="loading"
      />
      <!-- <video width="160" muted autoplay loop id="video-container">
        <source src="../assets/emoji.mp4" type="video/mp4" />
      </video> -->
    </div>
    <div class="text">
      <div class="top-text">
        <h2>Hi, I'm Jessadakron Borisut! 👋</h2>
        <h3>
          I'm a
          <span
            ><vue-typer
              :text="['Frontend', 'Developer']"
              :repeat="Infinity"
              :shuffle="false"
              initial-action="typing"
              :pre-type-delay="70"
              :type-delay="70"
              :pre-erase-delay="2000"
              :erase-delay="250"
              erase-style="select-all"
              :erase-on-complete="false"
              caret-animation="blink"
            ></vue-typer
          ></span>
        </h3>
      </div>
      <div class="bottom-text">
        <p class="b-margin">
          I'm Information Technology student at Burapha University
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="green"
            href="https://www.informatics.buu.ac.th"
            >Informatics Buu</a
          >
        </p>
        <p class="b-margin">
          I have experience of
          <span class="custom-text">Web Frontend Development</span> develop and
          designing using basic figma.I am an avid book reader and music
          listener.
        </p>
        <p>My favourite anime is <span class="color">One Piece</span>.</p>
      </div>
      <div class="contact">
        <a href="./pdf/Jessadakron-resume.pdf" target="_blank">
          <div class="contact-me">Resume</div>
        </a>
      </div>
      <br />
      <p class="center">
        View some of my projects
        <a
          rel="noopener noreferrer"
          class="green"
          href="#projects"
          style="margin-left: 1px; margin-right: 1px"
          >here</a
        >.
      </p>
    </div>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Profile",
  components: {
    VueTyper,
  },
  data() {
    return {
      // pdf: "./assets/pdf/Jessadakron-resume.pdf",
    };
  },
};
</script>

<style scoped>
.color {
  /* border-bottom: 4px solid #1da7ea; */
  color: lawngreen;
}

ul {
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
}

li {
  margin-left: 2rem;
  padding: 10px;
  display: flex;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: #1b405e;
  transition: all ease 0.2s;
}

li:hover {
  background-color: #18d26e;
  transform: translateY(-5px);
  transition: all ease 0.2s;
}

::v-deep .typed {
  color: lawngreen !important;
}

::v-deep .custom.caret {
  background-color: green !important;
}

.fa-twitter {
  color: #fff;
}

.fa-instagram {
  color: #fff;
}

.fa-facebook {
  color: #fff;
}

.green {
  color: #18d26e;
  text-decoration: none;
  font-weight: bolder;
  margin: 5px;
  transition: siz;
}

.custom-text {
  background: -webkit-linear-gradient(rgb(11, 173, 237), rgb(252, 250, 250));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.green:hover {
  color: lawngreen;
  text-decoration: none;
  font-weight: bolder;
  margin: 5px;
  transition: siz;
}

.center {
  text-align: center;
}

img {
  height: 400px;
  border-radius: 8px;
}

.b-margin {
  margin-bottom: 1rem;
}

.image-holder {
  height: 100px;
}

.hero {
  display: flex;
  margin-bottom: 2rem;
}

.text {
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  margin-left: 2rem;
  margin-bottom: 4rem;
}

a {
  text-decoration: none;
}

.contact {
  margin-top: 2rem;
}

.contact-me {
  font-size: 1.1rem;
  font-weight: 500;
  /* background-color: #18d26e; */
  background: -webkit-linear-gradient(45deg, #09009f, #00ff95 80%);
  color: white;
  border-radius: 8px;
  text-align: center;
  padding: 10px;
  vertical-align: center;
  transition: all ease 0.3s;
}

.contact-me:hover {
  transform: translateY(-5px);
  transition: all ease 0.2s;
}

h2,
p {
  margin: 0;
}

h2 {
  font-weight: 500;
  font-size: 1.8rem;
}

h3 {
  font-weight: 480;
  font-size: 1.4rem;
}

p {
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.3;
  /* text-align: justify; */
}

.fa-linkedin {
  color: white;
}
a {
  pointer-events: none;
  cursor: default;
}
@media screen and (max-width: 1258px) {
  .hero {
    flex-direction: column;
    margin-bottom: 0rem;
  }

  img {
    height: 150px;
    width: auto;
    clip-path: circle(60px at center);
    position: relative;
    top: -20px;
    margin: 0;
  }

  .text {
    margin-left: 0;
    height: auto;
    margin-bottom: 0.5rem;
  }

  h2 {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  li {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }

  .contact {
    margin-top: 16px;
  }
}
</style>
