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
  <div class="relative bg-[#F2F2F2] h-full w-full grid overflow-hidden logged-layout">
    <div class="size-full sga-content">
      <router-view></router-view>
    </div>
  </div>
</template>


<style scoped>

</style>
