<template>
  <div class="modal-overlay" v-if="isOpen">
    <div class="modal">
      <h2>주문완료</h2>
      <p>주문이 성공적으로 완료되었습니다.</p>
      <button @click="handleClose">확인</button>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    isOpen:Boolean
  })
  const emit=defineEmits(['closeModal']);
  const handleClose=()=>{
    emit('closeModal',false);
  }
</script>

<style lang="scss" scoped>
  .modal-overlay{
    border: none;
    border-radius: 0;
    position: fixed;
    top:0; left: 0;
    width: 100%; height: 100vh;
    background-color: rgba($color: #000000, $alpha: 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    .modal{
      background-color: #fff;
      padding: 3rem 5rem;
      p{
        margin: 1rem 0;
      }
    }
  }
</style>