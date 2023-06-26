<template>
  <v-container>
    <v-row justify="end">
  
  <a href="/user"> <v-btn variant="text" icon="mdi-account" path=""></v-btn></a>
  <a href="/users"> <v-btn variant="text" icon="mdi-account-group" path=""></v-btn></a>  
  <a href="/create"> <v-btn variant="text" icon="mdi-account-plus" path=""></v-btn></a>  
<component :is="currentView" />


    </v-row>
    <v-form ref="form"  @submit.prevent="onSubmit">
      <v-text-field
          v-model="data.name"
          :counter="10"
          label="Nome"
          required
          clearable
          >
      </v-text-field>

          <v-text-field
          v-model="data.email"
          :counter="10"
          label="E-mail"
          type="email"
          required
          >
      </v-text-field>

          <v-text-field
          v-model="data.telefone"
          :counter="10"
          label="Telefone"
          type="tel" 
          required>
      </v-text-field>

          <v-text-field
          v-model="data.dataNascimento"
          type="date"
           clearable
          required>
      </v-text-field>
      <v-btn
       
       class="btn variant-elevated indigo"
       label="Criar"
       @click="createUser()">
       Criar usuário
       
      </v-btn>  
    </v-form>
  </v-container>
</template>

<script setup>
 
import { ref } from 'vue';
import axios from 'axios';


const data = ref({ 
      name: "",  
      email:"", 
      dataNascimento:"",
      telefone:"",
      
  })

   

  async function createUser(){
    
    await axios.post('http://localhost:8000/api/user', 
    {
      name: data.value.name,
      phone_number: data.value.telefone,
      email: data.value.email,
      date_of_birth: data.value.dataNascimento
    })
  }

/*function validateField(value) {
  if (!value) {
    return 'this field is required';
  }

  if (value.length < 8) {
    return 'this field must contain at least 8 characters';
  }

  return true;
}*/

 
 

</script>

<style>
input,
span {
  display: block;
  font-size: 16px;
}

.btn{
  color:#fff;
}
</style>
