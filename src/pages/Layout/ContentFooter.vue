<template>
  <footer class="footer">
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="https://www.creative-tim.com">Creative Tim</a>
          </li>
          <li>
            <a href="https://creative-tim.com/presentation"> About Us </a>
          </li>
          <li>
            <a href="http://blog.creative-tim.com"> Blog </a>
          </li>
          <li>
            <a href="https://www.creative-tim.com/license"> Licenses </a>
          </li>
          <li>
            
            <md-button @click="logout" class="md-raised md-success">Cerrar Sesión</md-button>

          </li>
        </ul>
      </nav>
      <div class="copyright text-center">
        &copy; {{ new Date().getFullYear() }}
        <a href="https://www.creative-tim.com/?ref=mdf-vuejs" target="_blank"
          >Creative Tim</a
        >, made with <i class="fa fa-heart heart"></i> for a better web
      </div>
    </div>
  </footer>
</template>
<script>
import firebase from "firebase/compat/app";
import router from "vue-router";

export default {
  name: "logout",
  methods: {
    logout: function(){
      firebase.auth()
      .signOut()
      .then(() => {
        alert('Usted ha salido del sitio');
        this.$router.push('/login');
      });
    }} 
    
};
</script>
<style></style>
