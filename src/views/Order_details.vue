<template>
	<br>
	<div class="animated zoomIn">
	 <p align="left">
	 	Order details
	 </p>
	<div class="row">
	 <form>
	  <div class="form-group">
	    <input v-model="app_object.app_key" type="text" class="form-control input-lg" placeholder="Enter your API Key">
	  </div>
	  <div class="form-group">
	    <select v-model="order_detail.order_id" class="form-control input-lg">
	    	<option>Select order id</option>
	    	<option>1</option>
	    	<option>2</option>
	    	<option>3</option>
	    </select>
	  </div>
	  <div class="form-group">
	    <input v-model="order_detail.product_id" type="text" class="form-control input-lg" placeholder="Enter product ID">
	  </div>
	  <div class="form-group">
	  	<button v-on:click="order_detailSubmit()" type="button" class="btn btn-lg btn-primary pull-left">Submit</button>
	  </div>
	</form> 
</div>


<!--Fetch orders details-->
	<div class="row">
	 <form>
	 <br>
	 <p align="left">Fetch orders details</p>
	  <div class="form-group">
	    <input v-model="app_object.app_key" type="text" class="form-control input-lg" placeholder="Enter your API Key">
	  </div>
	  <div class="form-group">
	  	<button @click="getOrder_details_List();" type="button" class="btn btn-lg btn-primary pull-left">Fetch</button>
	  	<span v-if="app_object.isHidden" style="color: white; font-size: 2em;">
	  		{{app_object.progress_display}}
	  	</span>
	  </div>
	</form> 
	<table class="table" style="border-style: solid; border-color: transparent;">
	    <tbody>
			<tr class="Success">
				<td><p>Order id</p></td>
				<td><p>Product id</p></td>
				<td><p>Action</p></td>
				<td><p>Action</p></td>
			</tr>
		</tbody>
		<tr v-for="(order_details_list, index) in order_details_list.order_detail_array" :key="index">
			<td><p>{{order_details_list.order_id}}</p></td>
			<td><p>{{order_details_list.product_id}}</p></td>
			<td><button @click="deleteOrder_detail(order_details_list.id)">Delete</button></td>
			<td><button @click="editOrder_detail(order_details_list.id)">Update</button></td>
		</tr>

	</table>		
	</div>
<!--End Fetch orders details-->


</div>
</template>

<script>
import axios from 'axios'
	export default {
		methods: {
			order_detailSubmit(){
				this.$router.push('progress');
				axios.post('http://127.0.0.1:8000/api/order-details/store', {
					order_detail: this.order_detail
				},
				{
					headers: {
					    APP_KEY: this.app_object.app_key
					}
				})
				.then(response=>{
					if (response.status==201) {
						this.order_detail.order_id=""
						this.$router.push('order-details');
					}
				})
				.catch(error=>{
					console.log(error)
				})
			},
			 getOrder_details_List(){
			 	this.app_object.progress_display="Fetching. Please wait...";
			 	this.app_object.isHidden=true;
				axios.get('http://127.0.0.1:8000/api/order-details',{
					headers: {
					    APP_KEY: this.app_object.app_key
					}
				})
				.then(response=>{
					this.order_details_list.order_detail_array=response.data;
					this.app_object.isHidden=false;
				})
				.catch(error=>{
					console.log(error);
				})
			 },
			deleteOrder_detail(id){
			 	this.app_object.progress_display="Please wait. Deleting...";
			 	this.app_object.isHidden=true;
				axios.delete('http://127.0.0.1:8000/api/order-details/'+id,
				{
					headers: {
					    APP_KEY: this.app_object.app_key
					}
				})
				.then(response=>{
					if (response.status==200) {
					 	this.app_object.isHidden=false;
					 	this.getOrder_details_List();
					}
				})
				.catch(error=>{
					if (error=='Error: Request failed with status code 401') {
						this.$router.push('App_key_error');
					}
					console.log(error)
				})
			},
			editOrder_detail(id){
			 	//this.$emit('editorder-event');
			 	this.$router.push({name: 'edit_Order_detail', params: {id: id}});
			}
		},
		data: function(){
			return {
				order_detail: {
					order_id: "",
					product_id: ""
				},
				order_details_list: {
					order_detail_array: []					
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