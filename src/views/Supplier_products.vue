<template>
	<br>
	<div class="animated zoomIn">
	 <p align="left">
	 	Supplier product
	 </p>
	<div class="row">
	 <form>
	  <div class="form-group">
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
	  	<button v-on:click="supplier_productSubmit()" type="button" class="btn btn-lg btn-primary pull-left">Submit</button>
	  </div>
	</form> 
</div>

<!--Fetch supplier product-->
	<div class="row">
	 <form>
	 <br>
	 <p align="left">Fetch supplier product</p>
	  <div class="form-group">
	    <input v-model="app_object.app_key" type="text" class="form-control input-lg" placeholder="Enter your API Key">
	  </div>
	  <div class="form-group">
	  	<button @click="getSupplier_products_List();" type="button" class="btn btn-lg btn-primary pull-left">Fetch</button>
	  </div>
	</form> 
	<table class="table" style="border-style: solid; border-color: transparent;">
	    <tbody>
			<tr class="Success">
				<td><p>Supply id</p></td>
				<td><p>Product id</p></td>
				<td><p>Action</p></td>
				<td><p>Action</p></td>
			</tr>
		</tbody>
		<tr v-for="(supplier_products, index) in supplier_product_list.supplier_product_array" :key="index">
			<td><p>{{supplier_products.supply_id}}</p></td>
			<td><p>{{supplier_products.product_id}}</p></td>
			<td><button @click="deleteSupplier_product(supplier_products.id)">Delete</button></td>
			<td><button @click="editSupplier_product(supplier_products.id)">Update</button></td>
		</tr>
	</table>		
	</div>
<!--End Fetch supplier product-->

</div>
</template>

<script>
	import axios from 'axios'
		export default {
			methods: {
				supplier_productSubmit(){
					this.$router.push('progress');
					axios.post('http://127.0.0.1:8000/api/supplier-products/store', {
						supplier_product: this.supplier_product
					},
					{
						headers: {
						    APP_KEY: this.app_object.app_key
						}
					})
					.then(response=>{
						if (response.status==201) {
							this.supplier_product.supply_id=""
							this.supplier_product.product_id=""
							this.$router.push('supplier-products');
						}
					})
					.catch(error=>{
					if (error=='Error: Request failed with status code 401') {
						this.$router.push('App_key_error');
					}
					console.log(error)
					})
				},
				getSupplier_products_List(){
					axios.get('http://127.0.0.1:8000/api/supplier-products',{
					headers: {
					    APP_KEY: this.app_object.app_key
					}
				})
					.then(response=>{
						this.supplier_product_list.supplier_product_array=response.data;
					})
					.catch(error=>{
						if (error=='Error: Request failed with status code 401') {
							this.$router.push('App_key_error');
						}
						console.log(error)
					})
				},
				deleteSupplier_product(id){
				axios.delete('http://127.0.0.1:8000/api/supplier-products/'+id,
				{
					headers: {
					    APP_KEY: this.app_object.app_key
					}
				})
				.then(response=>{
					if (response.status==200) {
					}
				})
				.catch(error=>{
					if (error=='Error: Request failed with status code 401') {
						this.$router.push('App_key_error');
					}
					console.log(error)
				})
				},
				editSupplier_product(id){
				 	this.$router.push({name: 'edit_Supplier_product', params: {id: id}});
				}
			},
			data: function(){
				return {
					supplier_product: {
						supply_id: "",
						product_id: ""
					},
					supplier_product_list: {
						supplier_product_array: []					
					},
					app_object: {
					app_key: ""
					}
				}
			}
		}
</script>