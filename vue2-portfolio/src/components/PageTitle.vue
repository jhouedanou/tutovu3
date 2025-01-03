<script setup></script>

<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-2 col-sm-12">
        <img
          id="profile-img"
          src="../assets/me.jpeg"
          alt="Jean Luc Houédanou"
          class="img-fluid rounded"
          width="100px"
          height="100px"
        />
      </div>
      <div class="col-md-10 col-sm-12">
        <div id="line">
          <p class="mb-0">
            Je suis
            <span class="text-highlight-1">Jean Luc houedanou</span><br />
            Développeur web
          </p>
          <div id="social">
            <a
              href="https://github.com/votre-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github fa-2x mx-2"></i>
            </a>
            <a
              href="https://linkedin.com/in/votre-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin fa-2x mx-2"></i>
            </a>
            <a
              href="https://twitter.com/votre-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-twitter fa-2x mx-2"></i>
            </a>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#profile-img {
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
#line {
  border-left: 2px solid #fff;
  padding-left: 20px;
}
#line p {
  font-size: 2em;
}
#social {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.text-highlight-1 {
  font-weight: bold;
}
</style>
