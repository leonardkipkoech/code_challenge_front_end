<template>
	<br>
	<div class="animated zoomIn">
	 <p align="left">
	 	Suppliers
	 </p>
	<div class="row">
	 <form>
	  <div class="form-group">
	    <input v-model="app_object.app_key" type="text" class="form-control input-lg" placeholder="Enter your API Key">
	  </div>
	  <div class="form-group">
	    <input v-model="supplier.name" type="text" class="form-control input-lg" placeholder="Enter supplier name">
	  </div>
	  <div class="form-group">
	  	<button  v-on:click="supplierSubmit()" type="button" class="btn btn-lg btn-primary pull-left">Submit</button>
	  </div>
	</form> 
</div>

<!--Fetch suppliers-->
	<div class="row">
	 <form>
	 <br>
	 <p align="left">Fetch suppliers</p>
	  <div class="form-group">
	    <input v-model="app_object.app_key" type="text" class="form-control input-lg" placeholder="Enter your API Key">
	  </div>
	  <div class="form-group">
	  	<button @click="getSupplier_List();" type="button" class="btn btn-lg btn-primary pull-left">Fetch</button>
	  	<span v-if="app_object.isHidden" style="color: white; font-size: 2em;">
	  		{{app_object.progress_display}}
	  	</span>
	  </div>
	</form> 
	<table class="table" style="border-style: solid; border-color: transparent;">
	    <tbody>
			<tr class="Success">
				<td><p>Supplier name</p></td>
				<td><p>Action</p></td>
				<td><p>Action</p></td>
			</tr>
		</tbody>
		<tr v-for="(supplierss, index) in suppliers_list.suppliers_array" :key="index">
			<td><p>{{supplierss.name}}</p></td>
			<td><button @click="deleteSupplier(supplierss.id)">Delete</button></td>
			<td><button @click="editSupplier(supplierss.id)">Update</button></td>
		</tr>
	</table>		
	</div>
<!--End Fetch suppliers-->
</div>
</template>

<script>
	import axios from 'axios'
		export default {
			methods: {
				supplierSubmit(){
					this.$router.push('progress');
					axios.post('http://127.0.0.1:8000/api/suppliers/store', {
						supplier: this.supplier
					},
					{
						headers: {
						    APP_KEY: this.app_object.app_key
						}
					})
					.then(response=>{
						if (response.status==201) {
							this.supplier.name=""
							this.$router.push('suppliers');
						}
					})
					.catch(error=>{
						if (error=='Error: Request failed with status code 401') {
							this.$router.push('App_key_error');
						}
						console.log(error)
					})
				},
				getSupplier_List(){
				 	this.app_object.progress_display="Fetching. Please wait...";
				 	this.app_object.isHidden=true;
					axios.get('http://127.0.0.1:8000/api/suppliers',{
					headers: {
					    APP_KEY: this.app_object.app_key
					}
				})
					.then(response=>{
						this.suppliers_list.suppliers_array=response.data;
						this.app_object.isHidden=false;
					})
					.catch(error=>{
						if (error=='Error: Request failed with status code 401') {
							this.$router.push('App_key_error');
						}
						console.log(error)
					})
				 },
				 deleteSupplier(id){
				 	this.app_object.progress_display="Please wait. Deleting...";
				 	this.app_object.isHidden=true;
					axios.delete('http://127.0.0.1:8000/api/suppliers/'+id,
					{
						headers: {
						    APP_KEY: this.app_object.app_key
						}
					})
					.then(response=>{
						if (response.status==200) {
						 	this.app_object.isHidden=false;
						 	this.getSupplier_List();
						}
					})
					.catch(error=>{
						if (error=='Error: Request failed with status code 401') {
							this.$router.push('App_key_error');
						}
						console.log(error)
					})
				},
				editSupplier(id){
				 	//this.$emit('editorder-event');
				 	this.$router.push({name: 'edit_Supplier', params: {id: id}});
				}
			},
			data: function(){
				return {
					supplier: {
						name: ""
					},
					suppliers_list: {
						suppliers_array: []					
					},
					app_object: {
						app_key: "",
						isHidden: false,
						progress_display: ""
					}
				}
			}
		}
</script>