<template>
  <div class="product-list">
    <div class="card" v-for="list in products" :key="list.id">
      <img :src="list.image" :alt="list.name+'이미지'">
      <p>가격 : {{ list.price }}</p>
      <button @click="addToList(list)">🛒장바구니추가</button>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    products:Array,
  });
  const emit=defineEmits(['add-to-cart']);
  const addToList=(list)=>{
    emit('add-to-cart',list);
  }
</script>

<style lang="scss" scoped>
  .product-list{
    display: flex;
    gap:2rem;
    justify-content: center;
    flex-wrap: wrap;
    padding: 3rem 0;
    .card{
      width: 200px;
      text-align: center;
      img{
      width: 100%;
      height: 200px;
      object-fit: cover;
      }
      button{
        font-size: 12px;
        color: #555;
        border: none;
        padding: 0.3rem 0.5rem;
        border-radius: 4px;
        margin-top: 4px;
        &:hover{
          background-color: #ddd;
        }
      }
    }
  }
</style>