<script>
import { defineComponent } from "vue";
const name = 'Login'

export default defineComponent({
  name,

  components: { }, 

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
      </div>
    </div>
  </div>
</template>


<style scoped>
.template-login{
	width: 100vw;
	height: 100vh;
	background: #F2F2F2;
	box-sizing: content-box;
	overflow: auto;
}

.input-container{
	width: 100%;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	gap: 2rem;
}
</style>
