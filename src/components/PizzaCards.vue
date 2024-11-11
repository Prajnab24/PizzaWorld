<template>
    <div class="pizza-card"> 
        <div class="pizza-img">
        <img class="imgpizza" :src="`./assets/images/${imgurl}`" />
        </div>
      <div class="card-content">
        <h3 class="pizza-title">{{name}}</h3>
        <p class="pizza-description">{{ desc }}</p>
        <p class="pizza-price">$12.99</p>
        <button class="order-btn">Add</button>
        
       
      </div>
    </div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
        },
        desc: {
            type: String
        },
        fav:{
            type:Boolean,
        },
        imgurl: {
            type: String,
            required: true
        }
    }
}

</script>
<style>
.pizza-card{
  background-color: #f1f1f1;
  width: 200px;
  margin:20px;
  padding:3px;
}
.pizza-img{
    padding:10px;
    width:180px;
    height:180px;
}


</style>
