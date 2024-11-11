<template>
    <div class="pizza-card">
        <div class="pizza-img">
        <img class="imgpizza" :src="`./assets/images/${imgurl}`" />
        </div>
        <div class="card-content">
            <h3 class="pizza-title">{{ name }}</h3>
            <p class="pizza-description">{{ desc }}</p>
            <p class="choises">Change Size</p>
            <div v-for="s in size">
                <input type="radio" :name="name" :value="name+s">
                <label :for="s">{{ s }}</label>
            </div>
            <button class="order-btn">Add</button>
            <button v-show="fav" class="fav">🤍</button>
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
        fav: {
            type: Boolean,
        },
        imgurl: {
            type: String,
            required: true
        },
        size: {
            type: Array
        }
    },
    computed: {
        
    }
}

</script>
<style>
template{
    display: flex;
}
.pizza-title{
    font-size: 20px;
    
}
.pizza-description{
    font-size: 15px;

}
.choises{
    font-size: 13px;
}
.pizza-card {
    background-color: #f1f1f1;
    width: 250px;
    margin: 20px;
    height:450px;
    position: relative;
    padding: 3px;
    box-shadow: 5px 5px 3px #aaaaaa;
}
label{
    font-size: 12px;
}
.pizza-img{
    
    width: 200px;
    overflow: hidden;
    height: 200px;
}
.imgpizza {
    padding: 10px;
    width: 200px;
    overflow: hidden;
    height: 200px;
    transition: transform .5s ease;
}
.pizza-img .imgpizza:hover{
    transform: scale(1.1);
    width: 200px;
    height: 200px;
    overflow: hidden;
}
.fav{
    background-color: #159f56;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;  
    position: absolute;
    top: 10px;
    right: 0;
}
.order-btn {
    background-color: #e67e22;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 13px;
    position: absolute;
    bottom: 0px;
    right: 0;
    width:100%;
    transition: background-color 0.3s ease;
}

.order-btn:hover {
    background-color: #d35400;
}
</style>
