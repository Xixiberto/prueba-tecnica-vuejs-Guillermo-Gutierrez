<template>
    <div class="content">
        <form>  
            <md-card-header>
                <h4 class="title">Login</h4>
                <p class="category">Utilice su correo y contraseña</p>
            </md-card-header>
            <md-card-content>
                <div class="md-layout">
                    <div class="md-layout-item md-small-size-100 md-size-33">
                        <md-field>
                        <label>Correo</label>
                        <md-input v-model="correo" type="email"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-33">
                        <md-field>
                        <label>Contraseña</label>
                        <md-input v-model="password" type="password"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-size-100 text-right">
                        <md-button @click="login" class="md-raised md-success">Ingresar</md-button>
                    </div>
                    <div class="md-layout-item md-size-100">
                        <p>¿Necesita una cuenta?</p>
                        <router-link to="/signup">Crear Cuenta</router-link>
                    </div>
                </div>
            </md-card-content>
        </form>
    </div>
</template>
<script>
import firebase from "firebase/compat/app";

export default {
  name: "login",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      correo: "",
      password: "",
    };
  },
  methods: {
       login: function(){
           firebase.auth()
           .signInWithEmailAndPassword(this.correo, this.password)
           .then(
               user => {
                   console.log(user.data);
                   alert('Login exitoso');
                   this.$router.push('/dashboard');
               } 
           )
           .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            });
           
       }
  },
};
</script>
<style></style>