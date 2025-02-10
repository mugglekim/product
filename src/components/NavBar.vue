<template>
  <nav>
    <h1>맛있다냠냠😋</h1>
    <ul>
      <li v-for="(list,idx) in categories" :key="idx" @click="navClick(list)">{{ list }}</li>
    </ul>
  </nav>
  <div class="router-link">
      <router-link to="/">상품목록</router-link>
      <router-link to="/cart">장바구니</router-link>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

  defineProps({
    categories:Array
  });
  const router=useRouter();
  const emit=defineEmits(['menu-click']);
  const navClick=(menu)=>{
    emit('menu-click',menu);
    router.push('/');
  }
</script>

<style lang="scss" scoped>
  nav{
    padding: 2rem 5rem;
    display: flex;
    justify-content: space-between;
    ul{
      display: flex;
      gap: 2rem;
      li{
        cursor: pointer;
        &:hover{
          text-decoration: underline;
          color: saddlebrown;
        }
      }
    }
  }
  .router-link{
    padding: 1rem 5rem;
    display: flex;
    justify-content: center;
    gap: 10px;
    a{
      text-decoration: none;
      color: #fff;
      background-color: saddlebrown;
      padding: 0.5rem 1rem;
      border-radius: 50px;
      &:hover{
        background-color: rgb(119, 55, 10);
      }
    }
  }
</style>