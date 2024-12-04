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
            <p class="choises">Change Size</p>
            <div v-for="(s, index) in size">
                <input type="radio" :name="name" v-model="pizzaprice" :value="price[index] ">
                <label :for="s"><span v:model="pizzasize">{{ s }}</span><span style="float: right; margin-right:5px;">{{ price[index]
                        }}</span></label>
            </div>
            <button class="order-btn" @click="addpizza">Add</button>
            <button v-show="fav" @click="toggleFav" class="fav"><i class="fa fa-heart"
                    style="font-size:20px;color:white"></i></button>
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
            //console.log(order_size,order_prize);
            this.isAlertVisible=false
            this.$emit('updateCount', (this.orderscount + 1));
            this.pizzaprice = "";
            this.orders=[];
            this.orders.push({ ordername: this.name, 
                ordersize: order_size, 
                orderprice: order_prize,
                imgurl: this.imgurl ,
                toppings:[],
                cheesecrust:false,
                ordercount:1});
            this.$emit('updateOrderList', this.orders);

        }

    }
}
</script>
<style>
.header {
    display: flex;
    align-items: stretch;
}

template {
    display: flex;
}

.pizza-title {
    font-size: 20px;

}

.pizza-description {
    font-size: 15px;

}

.choises {
    font-size: 13px;
}

.pizza-card {
    background-color: #f1f1f1;
    width: 250px;
    margin: 20px;
    height: 500px;
    position: relative;
    padding: 3px;
    box-shadow: 5px 5px 3px #aaaaaa;
}

label {
    font-size: 12px;
}

.pizza-img {

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

.pizza-img .imgpizza:hover {
    transform: scale(1.1);
    width: 200px;
    height: 200px;
    overflow: hidden;
}

.fav {
    background-color: #159f56;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 0;
}

.add-fav {
    background-color: #e67e22;
    border: none;
    cursor: pointer;
    padding: 4px 10px;
    margin-left: 50px;
    align-self: center;
    text-align: right;
    transition: background-color 0.9s ease-out;
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
    width: 100%;
    transition: background-color 0.9s ease-out;
}

.order-btn:hover,
.add-fav {
    background-color: #d35400;
}
</style>
