<template>
	<br>
	 <p align="left">
	 	Orders
	 </p>
	<div class="row">
	 <form>
	  <div class="form-group">
		<input v-model="senddata.dadata" type="text" name="" class="form-control"><br>
	    <input v-model="app_object.app_key" type="text" class="form-control input-lg" placeholder="Enter your API Key">
	  </div>
	  <div class="form-group">
	    <input v-model="order.order_number" type="text" class="form-control input-lg" placeholder="Enter order number">
	  </div>
	  <div class="form-group">
	  	<button @click="updateOrder(order.id)" type="button" class="btn btn-lg btn-primary pull-left">Update</button>
	  	<!--<button @click="$emit('clickprogress')" type="button" class="btn btn-lg btn-primary pull-left">Submit</button>-->
	  </div>
	</form> 
</div>

</template>

<script>
import axios from 'axios'
	export default {
		data: function(){
			return {
				senddata: {
					dadata: this.$route.params.id
				},
				order: {
					id: this.$route.params.id,
					order_number: ""
				},
				app_object: {
					app_key: ""
				}
			}
		},
		methods: {
			updateOrder(order_id){
				this.$router.push('progress');
				axios.put('http://127.0.0.1:8000/api/orders/'+order_id, {
					order: this.order
				},
				{
					headers: {
					    APP_KEY: this.app_object.app_key
					}
				})
				.then(response=>{
					if (response.status==200) {
						this.$router.push('Orders');
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