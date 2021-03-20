<template>
	<br>
	<div class="animated zoomIn">
	 <p align="left">
	 	Products
	 </p>
	<div class="row">
	 <form>
	  <div class="form-group">
	    <input type="text" class="form-control input-lg" placeholder="Enter your API Key">
	  </div>
	  <div class="form-group">
	    <input v-model="product.name" type="text" class="form-control input-lg" placeholder="Enter product Name">
	  </div>
	  <div class="form-group">
	    <input v-model="product.description" type="text" class="form-control input-lg" placeholder="Enter description">
	  </div>
	  <div class="form-group">
	    <input v-model="product.quantity" type="number" class="form-control input-lg" placeholder="Enter Quantity">
	  </div>
	  <div class="form-group">
	  	<button v-on:click="productSubmit()"  type="button" class="btn btn-lg btn-primary pull-left">Submit</button>
	  </div>
	</form> 
</div>
<!--Fetch products-->
	<div class="row">
	 <form>
	 <br>
	 <p align="left">Fetch products</p>
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
<!--End Fetch products-->

</div>
</template>

<script>
import axios from 'axios'
	export default {
		methods: {
			productSubmit(){
				axios.post('http://127.0.0.1:8000/api/products/store', {
					product: this.product
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
				product: {
					name: "",
					description: "",
					quantity: 77
				}
			}
		}
	}
</script>