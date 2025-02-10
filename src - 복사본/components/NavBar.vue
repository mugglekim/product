<template>
  <nav>
    <h1>맛있게냠냠😋</h1>
    <ul>
      <li v-for="(list,idx) in categories" :key="idx" @click="navClick(list)">{{ list }}</li>
    </ul>
  </nav>
</template>

<script setup>
  defineProps({
    categories:Array
  });
  const emit=defineEmits(['menu-click']);
  const navClick=(menu)=>{
    emit('menu-click',menu)
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
</style>