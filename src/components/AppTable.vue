<script setup>
import {ref} from 'vue'
import axios from 'axios'

const data = ref({
  name: '',
  email:'',
  phone:'',
  date_of_birth:'',
})

let searchName = ref('')
//<template v-slot:append-inner><v-btn @click="getUserName(searchName)" icon="mdi-magnify"/></template>

async function getUserName(name){

  const response = await axios.get(`http://localhost:8000/api/user/${name}`)
  const foundUser = response.data
  console.log(foundUser)
}
</script>

<template>
  <v-container class="container">
    <v-row justify="end">
      <v-btn variant="text" icon="mdi-account" @click="getUserName(searchName)"></v-btn>
      <v-btn variant="text" icon="mdi-account-group" @click="getUserName(searchName)"></v-btn>
      <v-btn variant="text" icon="mdi-account-plus"> </v-btn>
    </v-row>
    <v-row>
 
    <v-col> 
      <v-text-field
      v-model="searchName"  
      v-on="getUserName(searchName)"
    
      label="Pesquisa" 
      variant="outlined"> 
      </v-text-field>
 

 
   
  <v-table width="200">
  <thead>
    <tr>
      <th class="">Nome</th>
      <th class="">Email</th>
      <th class="">Telefone</th>
      <th class="">Data de nascimento</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in allUsers">
      <td>{{user.name}}</td>
      <td>{{user.email}}</td>
      <td>{{user.phone_number}}</td>
      <td>{{user.date_of_birth}}</td>
   </tr>
  </tbody>
</v-table>
 </v-col>
</v-row>
  
  
</v-container>

</template>
<style>

 
 
</style>