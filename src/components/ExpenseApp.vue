<template>
 <h1> Submit a expense </h1>
  <el-form :model="form" label-width="120px" style="max-width: 460px">
    <el-form-item label="Expense date">
      <el-col :span="11">
        <el-date-picker v-model="form.expense_date" type="date" placeholder="Pick a date" 
         format="YYYY/MM/DD"
        value-format="YYYY-MM-DD" style="width: 100%" />
      </el-col>
    </el-form-item>
    <el-form-item label="Exepnse type">
      <el-select v-model="form.expense_type" placeholder="please select expense type">
        <el-option label="food" value="food" />
        <el-option label="movie" value="movie" />
        <el-option label="travelling" value="movie" />
        <el-option label="books" value="movie" />
      </el-select>
    </el-form-item>
    <el-form-item label="Expense amount">
    <el-input-number v-model="form.num" :min="1" :max="1000"  />
    </el-form-item>
    <el-form-item label="Expense details">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">submit expense</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" label="expense Date" width="180" />
    <el-table-column prop="desc" label="Expense Desc" width="180" />
    <el-table-column prop="amount" label="amount" />
  </el-table>

</template>

<script>

import axios from 'axios';
import { ElMessage } from 'element-plus'
export default {
  name: 'ExpenseApp',
  props: {
    msg: String
  },
  data() {
    return {
      form: {},
      tableData : [
  {
    date: '2016-05-03',
    desc: 'Tom',
    amount: 100,
  },
  {
    date: '2016-05-02',
    desc: 'Tom',
    amount : 200,
  },
  {
    date: '2016-05-04',
    desc: 'Tom',
    amount : 300,
  },

      ],
  }},
  methods: {
    mounted() {
      console.log('inside ExpenseApp');
    },
    onSubmit() {
      console.log("doSubmit" + JSON.stringify(this.form));
      ElMessage('expense submitted');
    },
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

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 600px;
}
</style>
