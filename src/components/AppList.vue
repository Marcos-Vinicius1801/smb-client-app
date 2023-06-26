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

async function getUserName(name){

  console.log(name)
  const response = await axios.get(`http://localhost:8000/api/user/${name}`)
  data.value = response.data

}


</script>

<template>
  <v-container class="container">
    <v-row justify="end">
  
      <a href="/user"> <v-btn variant="text" icon="mdi-account" path=""></v-btn></a>
      <a href="/users"> <v-btn variant="text" icon="mdi-account-group" path=""></v-btn></a>  
      <a href="/create"> <v-btn variant="text" icon="mdi-account-plus" path=""></v-btn></a>  
  <component :is="currentView" />
    </v-row>
    
 
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
   <tr>
    <td>{{ data.name }}</td>
    <td>{{ data.email }}</td>
    <td>{{ data.phone_number }}</td>
    <td>{{ data.date_of_birth }}</td>
   </tr>
  </tbody>
</v-table>
 </v-col>
 
  
  
</v-container>

</template>
 