<template>
    <div class="pizza-card">
        <div v-if="isAlertVisible">
            <AlertMessage :isAlertVisible="isAlertVisible" @updateshowAlert="updateshowAlert($event)" />
        </div>
        <div class="pizza-img">
            <img class="imgpizza" :src="`./assets/images/${imgurl}`" />
        </div>
        <div class="card-content">
            <div class="header">
            <h3 class="pizza-title">{{ name }}</h3>
            <button v-if="fav == false" class="add-fav" @click="toggleFav"><i class="fa fa-heart"
                style="font-size:15px;color:white"></i></button>
             </div>
            <p class="pizza-description">{{ desc }}</p>
            <p class="choises">Change Serves </p>
            <div v-for="(s, index) in size">
                <input type="radio" :name="name" v-model="pizzaprice" :value="price[index] ">
                <label :for="s"><span v:model="pizzasize">{{ s }}</span><span style="float: right; margin-right:5px;">{{ price[index]
                        }}</span></label>
            </div>
            <p class="choises">Add Toppings</p>
            <div v-for="top in toppings">
                <input type="checkbox" v-model="selectedtoppings" :value="top">
                <label :for="s"><span v:model="selectedtoppings">{{ top }}</span>  <span style="float: right;">+25 RS</span></label>
            </div>
            <button class="order-btn" @click="addpizza">Add</button>
            
            <button v-show="fav"  @click="toggleFav"  class="fav"><i class="fa fa-heart" style="font-size:20px;color:white"></i></button>
        </div>
    </div>
</template>
<script>
import AlertMessage from './AlertMessage.vue'
export default {
    components: {
        'AlertMessage': AlertMessage,
    },
    data() {
        return {
            cheesecrust:false,
            selectedtoppings:[],
            s: null,
            pizzaprice: "",
            pizzanae:"",
            pizzasize:"",
            isAlertVisible: false,
            orders: [],
            bill: false,
        }
    },
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
        price: {
            type: Array
        },
        toppings: {
            type: Array
        },
        Cheese_Volcano_crust: {
            type: Boolean,
        },
        orderscount: {
            type: Number
        },
        orderlist:{
            type:Object
        }
    },
    computed: {

    },
    methods: {
        showAlert() {
            this.isAlertVisible = true;
        },
        updateshowAlert(newshowValue) {
            this.isAlertVisible = newshowValue;
      
        },
        toggleFav() {
            this.$emit('updateFav', !this.fav);
        },
        addpizza() {
            if (this.pizzaprice.length == 0) {
                this.showAlert();
                return
            }
            //console.log(this.pizzaprice,this.name,this.size[this.price.indexOf((this.pizzaprice))]);
            let order_size=this.size[this.price.indexOf((this.pizzaprice))];
            let order_prize=this.pizzaprice;
            let finaltoppings=this.selectedtoppings;
            let cheesecrust=this.cheesecrust;
            console.log(cheesecrust)
            finaltoppings.sort();
            order_prize=Number(order_prize.replace("Rs",""))+(25*finaltoppings.length);
            if (cheesecrust==true){
                order_prize+=35;
            }
            console.log(order_prize);
            this.isAlertVisible=false
            this.$emit('updateCount', (this.orderscount + 1));
            this.pizzaprice = "";
            this.selectedtoppings=[];
            this.orders=[];
            this.cheesecrust=false;
            this.orders.push({ ordername: this.name, 
                ordersize: order_size, 
                orderprice: order_prize+" Rs",
                imgurl: this.imgurl ,
                toppings: finaltoppings,
                cheesecrust:cheesecrust,
                ordercount:1});
            this.$emit('updateOrderList', this.orders);

        }

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
    height: 850px;
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
