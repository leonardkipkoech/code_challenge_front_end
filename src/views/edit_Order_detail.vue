<template>
	<br>
	<div class="animated zoomIn">
	 <p align="left">
	 	Order details
	 </p>
	<div class="row">
	 <form>
	  <div class="form-group">
	  	<input v-model="received_id.id" type="text" name="" class="form-control"><br>
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
	  	<button v-on:click="updateOrder_detail(received_id.id)" type="button" class="btn btn-lg btn-primary pull-left">Submit</button>
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
				order_detail: {
					order_id: this.$route.params.id,
					product_id: ""
				},
				app_object: {
					app_key: ""
				}
			}
		},
		methods: {
			updateOrder_detail(id){
				this.$router.push('progress');
				axios.put('http://127.0.0.1:8000/api/order-details/'+id, {
					order_detail: this.order_detail
				},
				{
					headers: {
					    APP_KEY: this.app_object.app_key
					}
				})
				.then(response=>{
					if (response.status==200) {
						this.$router.push('order-details');
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