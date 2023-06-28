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
  
	let searchName = ref('')

	async function getUserName(name){
		const response = await axios.get(`http://localhost:8000/api/user/${name}`)
		data.value = response.data
		return (data.value)
	} 
</script>

<template>
  <v-container class="container">
    <v-row justify="end">
      <a href="#"> 
        <v-btn variant="text" icon="mdi-account-plus"  color="#424242" path="">
					<AppDialog/>
				</v-btn>
			</a>
    </v-row>
    <v-row>
			<v-col> 
				<v-card-title>
				<v-text-field
				label="Pesquisa" 
				variant="outlined" 
				
				v-model="searchName"
				append-inner-icon="mdi-magnify"
				v-on="getUserName(searchName)">
			</v-text-field>
		</v-card-title>
			<v-btn 
					variant="text" 
					color="#424242" 
					path="">
				</v-btn>
		<v-table width="200" hover="true" items-per-page="10">
		<thead>
			<tr>
				<th>Nome</th>
				<th>E-mail</th>
				<th>Telefone</th>
				<th>Data de nascimento</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="data in data">
				<td>{{ data.name}}</td>
				<td>{{ data.email}}</td>
				<td>{{data.phone_number}}</td>
				<td>{{data.date_of_birth}}</td>
		</tr>
		</tbody>
	</v-table>
			</v-col>
		</v-row>
	</v-container>
</template>
