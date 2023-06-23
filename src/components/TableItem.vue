<script setup>
import axios from 'axios'
import ButtonTable from '../components/ButtonTable.vue';
import InputItem from '../components/InputItem.vue';

const labels = ['Atualizar', 'Excluir']

const response = await axios.get('http://localhost:8000/api/user')
const users = response.data

const data = {
  name:"marcos brasilino 5",
  phone_number: "12-8873326",
  email:"marcos@gmail.com",
  date_of_birth:"1990-05-10"
}

async function createtUser(){
  const response = await axios.post('http://localhost:8000/api/user')
  console.log(response)
  const foundUser = response.data
  console.log(foundUser)
}


</script>

<template>

   <div class="create">
   <InputItem :name="data.name" :_email="data.email" :phone_number="data.phone_number" :date_of_birth="data.date_of_birth"/>
   <button @click="createtUser()">Criar usuário</button>
   </div>
   <table class="container striped responsive-table">
        <thead>
          <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Data de nascimento</th>
              <th>Ações</th>
          </tr>
        </thead>

        <tbody>
        <tr v-for="item in users">
            <td>{{ item.name }}</td>
            <td>{{ item.phone_number }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.date_of_birth }}</td>
            <td><span v-for="label in labels"><ButtonTable @click="$emit('test')" :label= "label"/></span></td>

          </tr>
        </tbody>
      </table>
</template>
<style>
.create{
  outline:1px solid red;
}
</style>