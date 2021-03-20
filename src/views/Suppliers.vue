<template>
	<br>
	<div class="animated zoomIn">
	 <p align="left">
	 	Suppliers
	 </p>
	<div class="row">
	 <form>
	  <div class="form-group">
	    <input type="text" class="form-control input-lg" placeholder="Enter your API Key">
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
<!--End Fetch suppliers-->
</div>
</template>

<script>
	import axios from 'axios'
		export default {
			methods: {
				supplierSubmit(){
					axios.post('http://127.0.0.1:8000/api/suppliers/store', {
						supplier: this.supplier
					})
					.then(response=>{
						if (response.status==201) {
							this.supplier.name=""
						}
					})
					.catch(error=>{
						console.log(error)
					})
				}
			},
			data: function(){
				return {
					supplier: {
						name: "default name"
					}
				}
			}
		}
</script>