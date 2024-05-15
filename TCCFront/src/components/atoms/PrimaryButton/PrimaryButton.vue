<script>
import files from "@/shared/files/files";
import { defineComponent } from "vue";
const name = 'PrimaryButton'

export default defineComponent({
  name,

  components: { }, 

  props: {
    preIcon: {
      type: String,
      default: '--'
    },
    buttonWidth: {
      type: String,
      default: '200px'
    },
    buttonHeight: {
      type: String,
      default: ''
    },
    borderRadius: {
      type: String,
      default: '10px'
    },
    padding: {
      type: String,
      default: '0.375rem'
    },
    text: {
      type: String,
      default: ''
    },
  },

  mounted () { },

  updated () { },

  data () {
    return { }
  },

  methods: { },

  computed: { 
    returnIconPrePath(){
      return files.returnURLImage(this.preIcon)
    }
  }, 

});
</script>

<template>
  <div class="button"
  :class="{ upper: !lowerCase, bold: bold }"
  >
    <div class="pre-icon" v-if="preIcon != '--'">
      <img :src="returnIconPrePath">
    </div>
    {{ text }}
  </div>
</template>


<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: v-bind('buttonWidth');
  height: v-bind('buttonHeight');
  background: #0d72d5 0% 0% no-repeat padding-box;
  border-radius: v-bind('borderRadius');
  padding: v-bind('padding');
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
  letter-spacing: 0px;
  color: #FFFFFF;
  font-weight: bold;
  text-transform: uppercase;
}
.pre-icon {
  margin-right: 5px;
}
</style>
