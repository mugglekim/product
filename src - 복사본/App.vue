<template>
  <div class="app">
    <NavBar :categories="categories" @menu-click="selectCategory"/>
    <!-- <List :products="products" @add-to-cart="AddToCart"/> -->
    <List :products="filterProducts" @add-to-cart="AddToCart"/>
    <Cart :cart="cartList" @remove-cart-id="removeCart" @clear-cart="clearCart"/>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { products, categories } from './assets/products.js';
import Cart from './components/Cart.vue';
import List from './components/List.vue';
import NavBar from './components/NavBar.vue';


//장바구니 상태
const cartList=ref([]);
const selectedMenu=ref('');

const AddToCart=(list)=>{
  // console.log(cartList);
  //1. list가 된 내용이 cart에 있는지 없는지 확인
  const findItem=cartList.value.find((item)=>{
    return item.id===list.id;
  });
  // console.log(findItem);
  //2. 있으면 기존 있는 것에 수량만 하나 증가
  if(findItem){
    findItem.count+=1;
  } else{
    //3. 없으면 cart에 수량1개로 푸쉬
    cartList.value.push({...list, count:1});
  }
}
const removeCart=(cartId)=>{
  //cartList 항목이 새로 생성 : cartId가 없는 데이터로
  cartList.value=cartList.value.filter((item)=>{
    return item.id !== cartId;
  })
}
const clearCart=(value)=>{
  if(value){
    cartList.value=[];
  }
}
const selectCategory=(menu)=>{
  // console.log(menu);
  // if(menu==='All'){
  //   selectedMenu.value=null;
  // } else{
  //   selectedMenu.value=menu;
  // }
  // selectedMenu.value=item;
  selectedMenu.value = menu==='All'? null:menu;
}
const filterProducts=computed(()=>{
  const item=products.filter((list)=>{
    return list.category===selectedMenu.value;
  });
  return selectedMenu.value? item:products;
});
</script>

<style lang="scss" scoped>

</style>