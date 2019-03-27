<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Tableau :_tab= "untableau"/>
  </div>
</template>

<script>

import Tableau from "@/components/Tableau.vue"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
       untableau : ['A', 'B', 'C']
    }
  },
  components : {
    Tableau
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
