<script setup>
import {ref} from 'vue'
import axios from 'axios'
import AppDialog from './AppDialog.vue';

const data = ref({
  name: '',
  email:'',
  phone:'',
  date_of_birth:'',
})

const response = await axios.get('http://localhost:8000/api/user/')
const foundUser = response.data

</script>

<template>
  <v-container class="container">
    <v-row justify="end">
      <a href="#"> <v-btn variant="text" icon="mdi-account" path=""><AppDialog/></v-btn></a>
      <a href="/user"> <v-btn variant="text" icon="mdi-account" path=""></v-btn></a>
      <a href="/users"> <v-btn variant="text" icon="mdi-account-group" path=""></v-btn></a>  
      <a href="/create"> <v-btn variant="text" icon="mdi-account-plus" path=""></v-btn></a>  
  <component :is="currentView" />
     
   
    </v-row>
    <v-row>
 
    <v-col> 
 
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
    <tr v-for="user in foundUser">
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