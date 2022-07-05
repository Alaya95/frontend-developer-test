<template>
  <div class="content">
    <AddProduct />
    <ProductCards />
  </div>
</template>

<script>
import AddProduct from './components/AddProduct.vue';
import ProductCards from './components/ProductCards.vue';

export default {
    name: "App",
  components: { AddProduct, ProductCards }
};
</script>

<style >
html {
  font-size: 62.5%;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  color: #2c3e50;
}

html,
body {
  height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

#app {
  width: 1440px;
  height: 100%;
  margin: 0 auto; 
}

.content {
  height: 100%;
  margin: 0 32px;
  display: flex;
}
</style>
