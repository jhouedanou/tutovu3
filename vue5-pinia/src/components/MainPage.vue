<template>
  <h1>Panier</h1>

  Total : {{ getTotalPrice }} €
  <br />
  <p>Produits dans le panier :</p>
  <ul>
    <li v-for="p in cart" :key="p.id">
      {{ p.name }} ({{ p.quantity }})
      <button @click="deleteProduct(p.id)">X</button>
    </li>
  </ul>
  <button @click="addProduct1">Ajouter produit 1 (10€)</button><br />
  <button @click="addProduct2">Ajouter produit 2 (10€)</button>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";

const storeCart = useCartStore();

const { getCart, getTotalPrice, cart } = storeToRefs(storeCart);
const { addProduct } = storeCart;

const product1 = {
  id: 2,
  name: "produit1",
  quantity: 1,
  price: 10,
};

const product2 = {
  id: 3,
  name: "produit2",
  quantity: 1,
  price: 20,
};

const addProduct1 = () => {
  addProduct(product1);
  storeCart.refreshKey++;
};

const addProduct2 = () => {
  storeCart.addProduct(product2);
  storeCart.refreshKey++;
};

const deleteProduct = (id: number) => {
  storeCart.deleteProduct(id);
  storeCart.refreshKey++;
  console.log(storeCart.cart);
};
</script>
