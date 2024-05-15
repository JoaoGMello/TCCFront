<script>
import { defineComponent } from "vue";
const name = 'LoggedLayout'

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
  <main class="main">
    <div class="container">
      <div class="menu">
        <!-- menu -->
      </div>

      <div class="content home-padding">
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>


<style scoped>
.main{
  overflow: scroll;
  display: flex;
  width: 100%;
  height:100vh;
  background: #F2F2F2;
}

.container{
  display: flex;
  flex-direction: column;
}

.home-padding{
  padding: 0px;
}
@media (min-width: 350px) {
  .router-view{
    max-width: 100vw;
    padding: 0 10px 20px 10px;
  }
}
@media (min-width: 1024px) {
}
@media (min-width: 768px) {
  .router-view{
    max-width: 100vw;
    padding: 0 80px 20px 80px;
  } 
}
@m
</style>
