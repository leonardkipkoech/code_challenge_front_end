<template>
	<br>
	<div class="animated zoomIn">
	 <p align="left">
	 	Order details
	 </p>
	<div class="row">
	 <form>
	  <div class="form-group">
	    <input type="text" class="form-control input-lg" placeholder="Enter your API Key">
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

<!--Fetch order detail-->
	<div class="row">
	 <form>
	 <br>
	 <p align="left">Fetch order details</p>
	  <div class="form-group">
	    <input type="text" class="form-control input-lg" placeholder="Enter your API Key">
	  </div>
	  <div class="form-group">
	  	<button type="button" class="btn btn-lg btn-primary pull-left">Fetch</button>
	  </div>
	</form> 
	<table class="table">
	    <tbody>
			<tr class="Success">
				<td>id</td>
				<td>Order number</td>
			</tr>
		</tbody>
	</table>		
	</div>
<!--Fetch order detail-->

</div>
</template>

<script>
import axios from 'axios'
	export default {
		methods: {
			order_detailSubmit(){
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