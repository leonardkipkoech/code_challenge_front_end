<template>
	<br>
	<div class="animated zoomIn">
	 <p align="left">
	 	Supplier product
	 </p>
	<div class="row">
	 <form>
	  <div class="form-group">
	    <input type="text" class="form-control input-lg" placeholder="Enter your API Key">
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
	  	<button   v-on:click="supplier_productSubmit()" type="button" class="btn btn-lg btn-primary pull-left">Submit</button>
	  </div>
	</form> 
</div>

<!--Fetch supplier product-->
	<div class="row">
	 <form>
	 <br>
	 <p align="left">Fetch supplier product</p>
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
<!--End Fetch supplier product-->

</div>
</template>

<script>
	import axios from 'axios'
		export default {
			methods: {
				supplier_productSubmit(){
					axios.post('http://127.0.0.1:8000/api/supplier-products/store', {
						supplier_product: this.supplier_product
					})
					.then(response=>{
						if (response.status==201) {
							this.supplier_product.supply_id=""
							this.supplier_product.product_id=""
						}
					})
					.catch(error=>{
						console.log(error)
					})
				}
			},
			data: function(){
				return {
					supplier_product: {
						supply_id: "",
						product_id: ""
					}
				}
			}
		}
</script>