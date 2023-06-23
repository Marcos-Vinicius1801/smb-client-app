<script setup>
import axios from 'axios'

defineProps(['name', '_email', "phone_number", "date_of_birth"])

const user = ''
const phone_number = ''
const email = ''
const date1 = ''
const date2 = ''


async function getUserName(name){
  const response = await axios.get(`http://localhost:8000/api/user/${name}`)
  const foundUser = response.data
  console.log(foundUser)
}


async function getUserEmail(email){
  const response = await axios.get(`http://localhost:8000/api/user/email/${email}`)
  console.log(response)
  const foundUser = response.data
  console.log(foundUser)
}


async function getUserDateOfBirth(date1, date2){
  const response = await axios.get(`http://localhost:8000/api/user/date1/${date1}/date2/${date2}`)
  //const response = await axios.get('http://localhost:8000/api/user/date1/1981-05-07/date2/1990-02-14')
  console.log(`date1 ${date1}`)
  console.log(`date2 ${date2}`)
  const foundUser = response.data
  console.log(foundUser)
}


</script>

<template>
   <div class="container row form">
    <form v-on:submit.prevent class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="first_name" type="text" class="validate" v-model="user"/>
          <label class="active" for="first_name"></label>
          <button @click="getUserName(user)">Pesquisar</button>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="phone" type="text" class="validate" v-model="phone_number">
          <label class="active" for="phone_number">Telefone</label>
        
    
        </div>
      </div>

      <div class="row">
        <div class="input-field col s6">
          <input id="email" type="email" class="validate" v-model="email">
          <label class="active" for="email">Email</label>
        
          <button @click="getUserEmail(email)">Pesquisar</button>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s3">
          <!-- <input type="text" class="datepicker" v-model="date1">-->
          <input type="date" v-model="date1">
          <label class="active" for="date">Data entrada</label>

        </div>
        <div class="input-field col s3">
        <!--  <input type="text" class="datepicker" v-model="date2">-->
          <input type="date" v-model="date2">
          <label class="active" for="date">Data Saída</label>
         
        </div>
        <button @click="getUserDateOfBirth(date1,date2)">enviar data</button>
      </div>
    </form>
  </div>
        
</template>

<style>
.form{
  margin-top: 50px;
}
</style>