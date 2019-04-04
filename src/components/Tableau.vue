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
    maxRows : Number(2)
  }, 
  mounted() {
    if (this._tab) {
      this.tableau = this._tab
    } else {
      this.tableau = []
    }
  },
  computed : {
     tab : {
       get: function() {
         return UtilTab.toHtmlTab(this.tableau, this.maxRows)
       },
       set(value) {
          this.tableau = value 
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

