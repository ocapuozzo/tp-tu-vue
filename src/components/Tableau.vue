<template>
  <div class="table table-striped ">
    <p class="centre">Tableau généré</p>
    <div v-html="tab"/>    
  </div>
</template>

<script>
import UtilTab from "@/models/UtilTab.js"

export default {
  name: 'Tableau',
  props: {
    _tab: Array,
    maxRows : 2
  }, 
  mounted() {
    if (this._tab) {
      this.tab = this._tab
    }
  },
  computed : {
     tab : {
       get: function() {
         return UtilTab.toHtmlTab(this.tabhtml, this.maxRows)
       },
       set(value) {
          this.tabhtml = value 
       }
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.table {
   margin: auto;
   width: 20% !important; 
}
.centre {
  text-align: center;
}
</style>

