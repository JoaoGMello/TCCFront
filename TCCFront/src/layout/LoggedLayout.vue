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
  <div class="logged-layout">
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>


<style scoped>
.logged-layout{
  position: relative;
  background: #F2F2F2;
  height: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
}

.content{
  height: 100%;
  width: 100%;
}
</style>
