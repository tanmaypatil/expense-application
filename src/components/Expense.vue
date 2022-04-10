<template>
  <div class="hello">
    <h1>Submit a expense</h1>
  
    <el-row class="mb-4">
      <el-col :span="4">
        <label>Enter expense date</label>
      </el-col>
      <el-col :span="8">
        <el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
      </el-col>
    </el-row>

    <el-row class="mb-4">
      <el-col :span="4">
        <label>Enter expense type</label>
      </el-col>
      <el-col :span="8">
        <el-select v-model="expenseOpt" class="m-2" placeholder="Select" size="small">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
    </el-row>
  <el-row class="mb-4">
      <el-col :span="4">
        <label>Enter expense amount</label>
      </el-col>
      <el-col :span="8">
        <el-input v-model="amount" size="small" placeholder="Enter amount" />
      </el-col>
    </el-row>
    <el-row class="mb-4">
      <el-col :span="4">
        <el-button v-on:click="convert" id="submit" type="primary">Submit expense</el-button>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ExpenseApp',
  props: {
    msg: String
  },
  data() {
    return {
      input: 0,
      expenseOpt: 'food',
      name: 'Expense',
      value1: "2022/04/11",
      output: 0,
      amount : 0,
      options: [
        {
          value: 'food',
          label: 'food',
        },
        {
          value: 'travelling',
          label: 'travelling',
        },
        {
          value: 'movie',
          label: 'movie',
        },
        {
          value: 'clothes',
          label: 'clothes',
        },
        {
          value: 'books',
          label: 'books',
        },
      ]
    }
  },
  methods: {
    convert() {
      console.log(`Hello ${this.name}!`);
      console.log(this.input);
      console.log('backend url' + process.env.VUE_APP_API_URL);
      let url = process.env.VUE_APP_API_URL;
      let obj = { celsius: this.input };
      axios({
        method: 'post',
        headers: { 'Content-Type': 'application/json' },

        url: url, data: obj
      })
        .then(response => {
          console.log(JSON.stringify(response));
          this.output = response.data.farenheit
        })
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
