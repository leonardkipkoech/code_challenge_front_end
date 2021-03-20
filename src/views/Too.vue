<template>
  <div class="Too">
    <div class="row">
    	<div class="col-md-3">
    	</div>
    	<div class="col-md-6">
    		<input v-model="order_detail.order_id" type="integer" class="form-control"><br>
    		<input v-model="order_detail.product_id" type="integer" class="form-control"><br>
    		<button v-on:click="sendIt()" class="btn btn-primary">Submit</button>
    	</div>
    	<div class="col-md-3">
    	</div>
    </div>
  </div>
</template>

<style type="text/css"></style>

<script>
import axios from 'axios'
	export default {
		methods: {
			sendIt(){
				axios.post('http://127.0.0.1:8000/api/order-details/store', {
					order_detail: this.order_detail
				})
				.then(response=>{
					if (response.status==201) {
						this.order_detail.order_id=""
					}
				})
				.catch(error=>{
					console.log(error)
				})
			}
		},
		data: function(){
			return {
				order_detail: {
					order_id: 4,
					product_id: ""
				}
			}
		}
	}
</script>

