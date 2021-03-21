<template>
  <!--<div id="nav">
    
  </div>-->

<div class="row">
  <div class="col-md-2">
    <p align="center" style="position: absolute; top 50em;"><img src="../public/laptop.png"> </p><br><br><br><br><br><br><br><br><br>
      <router-link to="/"><button class="btn btn-lg btn-primary btn-block">Home</button></router-link><br>
      <!--<router-link to="/about"><button class="btn btn-lg btn-primary btn-block">About</button></router-link><br>
      <router-link to="/mrtoo"><button class="btn btn-lg btn-primary btn-block">Too</button></router-link><br>-->

      <router-link to="/orders">
        <button class="btn btn-lg btn-primary btn-block">Orders</button>
      </router-link><br>
      <router-link to="/order-details"><button class="btn btn-lg btn-primary btn-block">Order details</button></router-link><br>
      <router-link to="/products">
        <button class="btn btn-lg btn-primary btn-block">Products</button>
      </router-link><br>
      <router-link to="/suppliers">
        <button class="btn btn-lg btn-primary btn-block">Suppliers</button>
      </router-link><br>
      <router-link to="/supplier-products">
        <button class="btn btn-lg btn-primary btn-block">Supplier products</button>
      </router-link><br>

  </div>
  <div class="col-md-8">
    <router-view/>    
  </div>
  <div class="col-md-2">
  </div>
</div>

</template>


<style>
.btn.btn-primary.btn-block{
  border-radius: 0em;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
