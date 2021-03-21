<template>
	<br>
	<div class="animated zoomIn">
	 <p align="left">
	 	Products
	 </p>
	<div class="row">
	 <form>
	  <div class="form-group">
	  	<input v-model="received_id.id" type="text" name="" class="form-control"><br>
	    <input v-model="app_object.app_key" type="text" class="form-control input-lg" placeholder="Enter your API Key">
	  </div>
	  <div class="form-group">
	    <input v-model="product.name" type="text" class="form-control input-lg" placeholder="Enter product Name">
	  </div>
	  <div class="form-group">
	    <input v-model="product.description" type="text" class="form-control input-lg" placeholder="Enter description">
	  </div>
	  <div class="form-group">
	    <input v-model="product.quantity" type="number" class="form-control input-lg" placeholder="Enter Quantity">
	  </div>
	  <div class="form-group">
	  	<button v-on:click="editProductSubmit(received_id.id)"  type="button" class="btn btn-lg btn-primary pull-left">Submit</button>
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
				product: {
					name: "",
					description: "",
					quantity: ""
				},
				app_object: {
					app_key: ""
				}
			}
		},
		methods: {
			editProductSubmit(id){
				this.$router.push('progress');
				axios.put('http://127.0.0.1:8000/api/products/'+id, {
					product: this.product
				},
				{
					headers: {
					    APP_KEY: this.app_object.app_key
					}
				})
				.then(response=>{
					if (response.status==200) {
						this.$router.push('products');
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