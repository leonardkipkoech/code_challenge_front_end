<template>
	<br>
	<div class="animated zoomIn">
	 <p align="left">
	 	Supplier product
	 </p>
	<div class="row">
	 <form>
	  <div class="form-group">
	  	<input v-model="received_id.id" type="text" name="" class="form-control"><br>
	    <input v-model="app_object.app_key" type="text" class="form-control input-lg" placeholder="Enter your API Key">
	  </div>
	  <div class="form-group">
	    <select v-model="supplier_product.supply_id" class="form-control input-lg">
	    	<option>Select supply id</option>
	    	<option>3</option>
	    	<option>4</option>
	    	<option>5</option>
	    </select>
	  </div>
	  <div class="form-group">
	    <select v-model="supplier_product.product_id" class="form-control input-lg">
	    	<option>Select product id</option>
	    	<option>6</option>
	    	<option>7</option>
	    	<option>8</option>
	    </select>
	  </div>
	  <div class="form-group">
	  	<button v-on:click="editSupplier_productSubmit(received_id.id)" type="button" class="btn btn-lg btn-primary pull-left">Submit</button>
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
				supplier_product: {
					supply_id: 8,
					product_id: 2
				},
				app_object: {
					app_key: ""
				}
			}
		},
		methods: {
			editSupplier_productSubmit(id){
				this.$router.push('progress');
				axios.put('http://127.0.0.1:8000/api/supplier-products/'+id, {
					supplier_product: this.supplier_product
				},
				{
					headers: {
					    APP_KEY: this.app_object.app_key
					}
				})
				.then(response=>{
					if (response.status==200) {
						this.$router.push('supplier-products');
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