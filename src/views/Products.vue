<template>
	<br>
	<div class="animated zoomIn">
	 <p align="left">
	 	Products
	 </p>
	<div class="row">
	 <form>
	  <div class="form-group">
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
	  	<button v-on:click="productSubmit()"  type="button" class="btn btn-lg btn-primary pull-left">Submit</button>
	  </div>
	</form> 
</div>
<!--Fetch products-->
	<div class="row">
	 <form>
	 <br>
	 <p align="left">Fetch products</p>
	  <div class="form-group">
	    <input v-model="app_object.app_key" type="text" class="form-control input-lg" placeholder="Enter your API Key">
	  </div>
	  <div class="form-group">
	  	<button @click="getProduct_List();" type="button" class="btn btn-lg btn-primary pull-left">Fetch</button>
	  </div>
	</form> 
	<table class="table" style="border-style: solid; border-color: transparent;">
	    <tbody>
			<tr class="Success">
				<td><p>Name</p></td>
				<td><p>Description</p></td>
				<td><p>Quantity</p></td>
				<td><p>Action</p></td>
				<td><p>Action</p></td>
			</tr>
		</tbody>
		<tr v-for="(products, index) in products_list.products_array" :key="index">
			<td><p>{{products.name}}</p></td>
			<td><p>{{products.description}}</p></td>
			<td><p>{{products.quantity}}</p></td>
			<td><button @click="deleteProduct(products.id)">Delete</button></td>
			<td><button @click="editProduct(products.id)">Update</button></td>
		</tr>
	</table>		
	</div>
<!--End Fetch products-->

</div>
</template>

<script>
import axios from 'axios'
	export default {
		methods: {
			productSubmit(){
				this.$router.push('progress');
				axios.post('http://127.0.0.1:8000/api/products/store', {
					product: this.product
				},
				{
					headers: {
					    APP_KEY: this.app_object.app_key
					}
				})
				.then(response=>{
					if (response.status==201) {
						this.product.name=""
						this.product.description=""
						this.product.quantity=""
						this.$router.push('products');
					}
				})
				.catch(error=>{
					if (error=='Error: Request failed with status code 401') {
						this.$router.push('App_key_error');
					}
					console.log(error)
				})
			},
			 getProduct_List(){
			 	//this.$router.push('progress');
				axios.get('http://127.0.0.1:8000/api/products',{
					headers: {
					    APP_KEY: this.app_object.app_key
					}
				})
				.then(response=>{
					this.products_list.products_array=response.data;
					//this.$router.push('Orders');
				})
				.catch(error=>{
					console.log(error);
				})
			 },
			deleteProduct(id){
				axios.delete('http://127.0.0.1:8000/api/products/'+id,
				{
					headers: {
					    APP_KEY: this.app_object.app_key
					}
				})
				.then(response=>{
					if (response.status==200) {
						//this.$emit('itemChanged');
					}
				})
				.catch(error=>{
					if (error=='Error: Request failed with status code 401') {
						this.$router.push('App_key_error');
					}
					console.log(error)
				})
			},
			editProduct(id){
			 	//this.$emit('editorder-event');
			 	this.$router.push({name: 'edit_Product', params: {id: id}});
			}			
		},
		data: function(){
			return {
				product: {
					name: "",
					description: "",
					quantity: ""
				},
				products_list: {
					products_array: []					
				},
				app_object: {
					app_key: ""
				}
			}
		}
	}
</script>