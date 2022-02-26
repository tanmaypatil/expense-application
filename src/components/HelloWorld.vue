<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-row class="mb-4">
      <el-col :span="8">
        <el-input v-model="input" placeholder="Please input celsius temp" />
      </el-col>
    </el-row>

    <el-row class="mb-4">
      <el-button v-on:click="convert" id="convert" type="primary">Convert to fahrenheit</el-button>
    </el-row>
    <el-row class="mb-4">
      <el-col :span="8">
        <el-input v-model="output" disabled />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      input: 0,
      name: 'HelloWorld',
      output : 0
    }
  },
  methods: {
    convert() {
      console.log(`Hello ${this.name}!`);
      console.log(this.input);
      console.log('backend url' + process.env.VUE_APP_API_URL);
      let url = process.env.VUE_APP_API_URL;
      let obj = { celsius : this.input };
      axios( { method : 'post' ,
       headers: { 'Content-Type': 'application/json'  }, 
  
      url : url, data : obj})
    .then(response => {console.log(JSON.stringify(response)) ;
                      this.output = response.data.farenheit })
      //this.output = this.input * 1.8 + 32
      //console.log(this.output);
    }
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
