<script>
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton.vue";
import { defineComponent } from "vue";
const name = 'Login'

export default defineComponent({
  name,

  components: { 
    PrimaryButton
  }, 

  props: { },

  mounted () { },

  updated () { },

  data () {
    return { }
  },

  methods: { },

  computed: { }, 

});
</script>

<template>
  <div class="template-login">
    <div class="left-login">
      <h1>Faça Login<br>E descubra a solução perfeita para manter sua casa limpa e organizada.</h1>
      <img src="" class="left-login-image"/>
    </div>
    <div class="right-login">
      <div class="card-login">
        <h1>LOGIN</h1>
        <div class="textfield">
          <label for="usuario">Usuário</label>
          <input type="text" name="usuario" placeholder="Usuário">
        </div>
        <div class="textfield">
          <label for="senha">Senha</label>
          <input type="password" name="senha" placeholder="Senha">
        </div>
        <PrimaryButton
          text="Login"
          button-width="100%"
        />
      </div>
    </div>
  </div>
</template>


<style scoped>
.template-login{
	width: 100vw;
	height: 100vh;
	background: #FFFFFF;
	box-sizing: content-box;
	overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-login {
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.left-login-image{
  width: 35vw;
}

.left-login > h1 {
  font-size: 3vw;
  color: #0d72d5;
}

.right-login {
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-login {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 35px;
  background-color: #9ad1ff;
  border-radius: 20px;
  box-shadow: 0px 10px 40px #00000056;
}

.card-login > h1 {
  color: #0d72d5;
  font-weight: 800;
  margin: 0;
}

.textfield {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 10px 0px;
}

.textfield > input {
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 15px;
  font-size: 12pt;
  box-shadow: 0px 10px 40px #00000056;
}

@media only screen and (max-width: 950px){
  .card-login {
    width: 85%;
  }
}

@media only screen and (max-width: 600px){
  .template-login {
    flex-direction: column;
  }

  .left-login > h1 {
    display: none;
  }

  .left-login {
    width: 100%;
    height: auto;
  }

  .right-login {
    width: 100%;
    height: auto;
  }

  .left-login-image {
    width: 50vw;
  }

  .card-login {
    width: 90%;
  }
}
</style>
