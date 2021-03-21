<template>
	<br>
	<div class="animated zoomIn">
	 <p align="left">
	 	Suppliers
	 </p>
	<div class="row">
	 <form>
	  <div class="form-group">
	    <input v-model="received_id.id" type="text" class="form-control input-lg">
	    <input v-model="app_object.app_key" type="text" class="form-control input-lg" placeholder="Enter your API Key">
	  </div>
	  <div class="form-group">
	    <input v-model="supplier.name" type="text" class="form-control input-lg" placeholder="Enter supplier name">
	  </div>
	  <div class="form-group">
	  	<button  v-on:click="editSupplierSubmit()" type="button" class="btn btn-lg btn-primary pull-left">Update</button>
	  </div>
	</form> 
</div>
</div>
</template>
<script>
import axios from 'axios'
	export default {
		data: function(){
			return {
				received_id: {
					id: this.$route.params.id
				},
				supplier: {
					name: ""
				},
				app_object: {
					app_key: ""
				}
			}
		},
		methods: {
			editSupplierSubmit(id){
				this.$router.push('progress');
				axios.put('http://127.0.0.1:8000/api/suppliers/'+this.$route.params.id, {
					supplier: this.supplier
				},
				{
					headers: {
					    APP_KEY: this.app_object.app_key
					}
				})
				.then(response=>{
					if (response.status==200) {
						this.$router.push('suppliers');
					}
				})
				.catch(error=>{
					if (error=='Error: Request failed with status code 401') {
						this.$router.push('App_key_error');
					}
					console.log(error)
				})
			}

		}
	}
</script>