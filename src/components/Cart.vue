<template>
  <div class="cart">
    <OpenModal :isOpen="isOpenModal" @closeModal="closeModal"/>
    <div class="cart-list">
      <h2>장바구니</h2>
      <h4 v-if="cart.length===0">장바구니가 비었습니다.</h4>
      <ul v-else>
        <li v-for="list in cart" :key="list.id">
          <img :src="list.image" :alt="list.name+'이미지'">
          <h4>{{ list.name }}</h4>
          <p>가격 : {{ list.price }}</p>
          <p>수량 : {{ list.count }}</p>
          <button @click="removeCart(list.id)">삭제</button>
        </li>
      </ul>
    </div>
    <div class="order-list">
      <h2>주문내역</h2>
      <div class="total">
        <p>상품금액 : {{ totalPrice }}원</p>
        <p>배송비 : {{ fee===0? "무료":`${fee}원` }}</p>
        <p>(배송비 3000원 / 5만원 이상 구매시 무료배송)</p>
        <p>총 결제금액 : {{ payment }}원</p>
        <button @click="handleOpen">주문결제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import OpenModal from './OpenModal.vue';
import { useRouter } from 'vue-router';

  const isOpenModal=ref(false);
  
  //라우터 인스턴스 생성
  const router=useRouter();
  
  const handleOpen=()=>{
    isOpenModal.value=true;
  }
  const closeModal=(value)=>{
    isOpenModal.value=value;
    emit('clear-cart',true);
    router.push('/'); //상품목록 페이지로 이동
  }
  const props = defineProps({
    cart:Array
  });
  const emit=defineEmits(['remove-cart-id','clear-cart']);
  const removeCart=(cartId)=>{
    emit('remove-cart-id',cartId);
  }
  const totalPrice=computed(()=>{
    // let sum=0;
    // props.cart.forEach((item)=>{
    //   sum+=(item.price*item.count);
    // });
    // return sum;

    //배열 객체 사용

    let result=props.cart.reduce((sum,item)=>{
      return sum+= item.price*item.count
    },0);
    return result;
  });
  const fee=computed(()=>{
    return totalPrice.value>=50000 ? 0:3000;
  })
  const payment=computed(()=>{
    return totalPrice.value+fee.value;
  })

</script>

<style lang="scss" scoped>
  .cart{
    display: flex;
    padding: 2rem 5rem;
    gap: 1rem;
    .cart-list, .order-list{
      flex: 1;
      border: 1px solid #222;
      border-radius:8px;
      padding: 2rem;
    }
    .cart-list{
      h4{
        color: #888;
        text-align: center;
      }
      ul{
        li{
          display: flex;
          gap: 1rem;
          align-items: center;
          padding: 1rem 0;
          img{
          width: 100px; height: 100px;
          object-fit: cover;
          }
        }
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
    .order-list{
      .total{
        padding: 1rem 0;
        p{
          margin: 1rem 0;
        }
      }
      button{
        font-size: 16px;
        width: 100%;
        background-color: #000;
        color: #fff;
        border: none;
        padding: 0.8rem 1rem;
        border-radius: 4px;
        margin-top: 4px;
      }
    }
  }
</style>