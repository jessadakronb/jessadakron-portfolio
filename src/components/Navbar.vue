<template>
  <nav>
    <div class="name" id="name">
      <h1>Jessadakron Borisut</h1>
    </div>
    <ul>
      <a
        href="https://github.com/jessadakronb"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li><i class="fab fa-github fa-lg"></i></li>
      </a>
      <a
        href="https://www.linkedin.com/in/jessadakron-borisut-724b70229"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li class="last">
          <i class="fab fa-linkedin fa-lg"></i>
        </li>
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        <li><i class="fab fa-twitter fa-lg"></i></li>
      </a>
    </ul>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
};
</script>

<style scoped>
nav {
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.name {
  display: flex;
  align-items: flex-end;
}

.name h1 {
  margin: 0 0 0 0;
  font-size: 1.8rem;
  font-weight: 600;
  background: -webkit-linear-gradient(45deg, #09009f, #00ff95 80%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
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

.fa-github {
  color: #fff;
}

.fa-linkedin {
  color: #fff;
}

.fa-twitter {
  color: #fff;
}

@media screen and (max-width: 1250px) {
  nav {
    flex-direction: column;
    margin-top: 3rem;
  }

  li {
    margin-left: 0;
    margin-right: 2rem;
  }

  ul {
    justify-content: flex-start;
    align-items: flex-start;
    padding-inline-start: 0;
    margin-top: 2rem;
  }
}

@media screen and (max-width: 570px) {
  ul {
    width: 100%;
    justify-content: space-between;
  }

  li {
    margin-left: 0;
    margin-right: 1rem;
  }

  .first {
    margin-right: 1rem;
    margin-left: 0;
  }

  .last {
    margin: 0;
  }
}

@media screen and (max-width: 410px) {
  li {
    margin-right: 0.5rem;
  }

  .first {
    margin-right: 0.5rem;
    margin-left: 0;
  }

  .last {
    margin: 0;
  }

  i {
    height: 80%;
  }
}
</style>
