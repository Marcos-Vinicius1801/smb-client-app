<script setup>
import { ref } from 'vue';
import axios from 'axios';
const data = ref({ 
      name: "",  
      email:"", 
      dataNascimento:"",
      telefone:"",
      
  })

 
  const dialog = ref('false')
   


  async function createUser(){
     
    await axios.post('http://localhost:8000/api/user', 
    {
      name: data.value.name,
      phone_number: data.value.telefone,
      email: data.value.email,
      date_of_birth: data.value.dataNascimento
    })
  }

</script>

<template>
 <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      width="720"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          icon="mdi-account"
          v-bind="props"
        >
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Novo Usuário</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="12"
                md="12"
              >
                <v-text-field
                  label="Nome*"
                  v-model="data.name"
                  clearable
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
              
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="E-mail*"
                  v-model="data.email"
                  clearable
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Telefone*"
                  type="tel"
                  v-model="data.telefone"
                  clearable
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Data de nascimento*"
                  v-model="data.dataNascimento"
                  clearable
                  type="date"
                  required
                ></v-text-field>
              </v-col>
          
              
            </v-row>
          </v-container>
          <small>* Campos obrigatórios</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn         
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            
            @click="createUser(data)"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
