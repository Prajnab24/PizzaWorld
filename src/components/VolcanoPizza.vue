<template>
    <div class="pizza-card">
        <div class="pizza-img">
            <img class="imgpizza" :src="`./assets/images/${imgurl}`" />
        </div>
        <div class="card-content">
            <h3 class="pizza-title">{{ name }}</h3>
            <p class="pizza-description">{{ desc }}</p>
            <p class="choises">Change Serves </p>
            <div v-for="s in size">
                <input type="radio" :name="name" :value="name+s">
                <label :for="s">{{ s }}</label>
            </div>
            <p class="choises">Change Crust</p>
            <input type="checkbox" name="size">Add Extra Cheese to Crust
            <p class="choises">Add Toppings</p>
            <div v-for="top in toppings">
                <input type="checkbox" :name="name" :value="name+s">
                <label :for="s">{{ top }}</label>
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
        },
        toppings: {
            type: Array
        },
        Cheese_Volcano_crust: {
            type: Boolean,
        }
    },
    computed: {

    }
}

</script>
<style scoped>
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
    width: 280px;
    margin: 20px;
    height: 800px;
    padding: 3px;
}
.pizza-img{
    
    width: 250px;
    overflow: hidden;
    height: 250px;
}
.imgpizza {
    padding: 10px;
    width: 250px;
    overflow: hidden;
    height: 250px;
    transition: transform .5s ease;
}
.pizza-img .imgpizza:hover{
    transform: scale(1.1);
    width: 250px;
    height: 250px;
    overflow: hidden;
}


</style>
