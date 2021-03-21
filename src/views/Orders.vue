<template>
	<br>
	<div class="animated zoomIn">
	 <p align="left">
	 	Orders
	 </p>
	<div class="row">
	 <form>
	  <div class="form-group">
	    <input v-model="app_object.app_key" type="text" class="form-control input-lg" placeholder="Enter your API Key">
	  </div>
	  <div class="form-group">
	    <input v-model="order.order_number" type="text" class="form-control input-lg" placeholder="Enter order number">
	  </div>
	  <div class="form-group">
	  	<button @click="orderSubmit();" type="button" class="btn btn-lg btn-primary pull-left">Submit</button>
	  </div>
	</form> 
</div>

<!--Fetch orders-->
	<div class="row">
	 <form>
	 <br>
	 <p align="left">Fetch orders</p>
	  <div class="form-group">
	    <input v-model="app_object.app_key" type="text" class="form-control input-lg" placeholder="Enter your API Key">
	  </div>
	  <div class="form-group">
	  	<button @click="getOrderList();" type="button" class="btn btn-lg btn-primary pull-left">Fetch</button>
	  </div>
	</form> 
	<table class="table" style="border-style: solid; border-color: transparent;">
	    <tbody>
			<tr class="Success">
				<td><p>Order number</p></td>
				<td><p>Action</p></td>
				<td><p>Action</p></td>
			</tr>
		</tbody>
		<tr v-for="(orderList2, index) in dalist.orderList" :key="index">
			<td><p>{{orderList2.order_number}}</p></td>
			<td><button @click="deleteOrder(orderList2.id)">Delete</button></td>
			<td><button @click="editOrder(orderList2.id)">Update</button></td>
		</tr>

	</table>		
	</div>
<!--End Fetch orders-->

	</div>

</template>

<script>
import axios from 'axios'

	export default {
		components: {
		},
		methods: {
			 editOrder(order_id){
			 	//this.$emit('editorder-event');
			 	this.$router.push({name: 'orders_edit', params: {id: order_id}});
			 },
			 getOrderList(){
			 	//this.$router.push('progress');
				axios.get('http://127.0.0.1:8000/api/orders',{
					headers: {
					    APP_KEY: this.app_object.app_key
					}
				})
				.then(response=>{
					this.dalist.orderList=response.data;
				})
				.catch(error=>{
					if (error=='Error: Request failed with status code 401') {
						this.$router.push('App_key_error');
					}
					console.log(error)
				})
			 },
			 orderSubmit(){
			 	this.$router.push('progress');
				 axios.post('http://127.0.0.1:8000/api/orders/store', {
					order: this.order
				},
				{
					headers: {
					    APP_KEY: this.app_object.app_key
					}
				}
				)
				.then(response=>{
					if (response.status==201) {
						this.order.order_number="";
			 			this.$router.push('Orders');
					}
				})
				.catch(error=>{
					if (error=='Error: Request failed with status code 401') {
						this.$router.push('App_key_error');
					}
					console.log(error)
				})
			},
			deleteOrder(daid){
				axios.delete('http://127.0.0.1:8000/api/orders/'+daid,
				{
					headers: {
					    APP_KEY: this.app_object.app_key
					}
				})
				.then(response=>{
					if (response.status==200) {
						this.$emit('itemChanged');
					}
				})
				.catch(error=>{
					if (error=='Error: Request failed with status code 401') {
						this.$router.push('App_key_error');
					}
					console.log(error)
				})
			}
		},
		data: function(){
			return {
				order: {
					order_number: ""
				},
				dalist: {
					orderList: []					
				},
				app_object: {
					app_key: ""
				}
			}
		}
	}
</script>