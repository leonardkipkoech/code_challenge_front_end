<template>
	<br>
	<div class="animated zoomIn">
	 <p align="left">
	 	Orders
	 </p>
	<div class="row">
	 <form>
	  <div class="form-group">
	    <input type="text" class="form-control input-lg" placeholder="Enter your API Key">
	  </div>
	  <div class="form-group">
	    <input v-model="order.order_number" type="text" class="form-control input-lg" placeholder="Enter order number">
	  </div>
	  <div class="form-group">
	  	<button v-on:click="orderSubmit()" type="button" class="btn btn-lg btn-primary pull-left">Submit</button>
	  </div>
	</form> 
</div>

<!--Fetch orders-->
	<div class="row">
	 <form>
	 <br>
	 <p align="left">Fetch orders</p>
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
<!--End Fetch orders-->

	</div>

</template>

<script>
import axios from 'axios'
	export default {
		methods: {
			orderSubmit(){
				axios.post('http://127.0.0.1:8000/api/orders/store', {
					order: this.order
				})
				.then(response=>{
					if (response.status==201) {
						this.order.order_number=""
					}
				})
				.catch(error=>{
					console.log(error)
				})
			}
		},
		data: function(){
			return {
				order: {
					order_number: 9
				}
			}
		}
	}
</script>