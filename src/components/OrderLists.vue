<template>
    <div>
        <div>
            <div class="btn" @click="closeShowOrderList"><i class="fa fa-close" style="font-size:18px"></i></div>
            <div style="padding: 30px;">
                <h2>List of Orders</h2>
            </div>

            <div class="orderscontainer">
                <div class="orderscontainerinside" v-for="(orders) in orderlist">
                    <div class="individualorder" v-for="(order) in orders">
                        <div class="deleteeorder" @click="deleteorder(order)">
                            <i class="fa fa-trash"></i>
                        </div>
                        <div class="incrementdecrement">
                            <button class="incremenet" @click="incremenetvalue(order)"> &#43;</button>
                            <button class="incremenetvalue" disabled>{{ order.ordercount }}</button>
                            <button class="decrement" @click="decrementvalue(order)">&#x2212;</button>
                        </div>
                        <div>
                            <img class="imgpizzaorder" :src="`./assets/images/${order.imgurl}`" />
                        </div>
                        <div class="orderdetails">
                            <p style="font-size: 16px;font-family:Verdana, Geneva, Tahoma, sans-serif;font-weight: bolder;">{{ order.ordername }}</p>
                            <p style="font-size:12px ;">{{ order.ordersize }}</p>
                            <p v-if="order.cheesecrust" style="font-size:12px ;margin-bottom: 5px;font-weight:bold;">Extra Cheese Crust <span>+35 Rs</span></p>
                            <p v-if="order.toppings.length > 0" style="font-size:12px ;margin-bottom: 3px;font-weight:900;">Toppings : +25 Rs each</p>
                            <label v-for="toppings in order.toppings" :key="index">
                                {{ toppings }},
                            </label>
                            <p style="font-weight: bold;">{{ order.orderprice }}</p>
                        </div>

                    </div>
                </div>

            </div>
            <button class="generatebill" @click="generateBill()">Generate Bill <i class="fa fa-list-alt"
                    style="padding:5px"></i></button>
        </div>
    </div>
    <div>
        <div v-if="bill">
            <FinalBill :total="total" :gst="gst" />
        </div>
    </div>

</template>
<script>

import FinalBill from './FinalBill.vue'

export default {
    components: {
        'FinalBill': FinalBill,
    },
    data() {
        return {
            bill: false,
            total: 0,
            gst: 0.11,
        }
    },
    props: {
        isShowOrderList: {
            type: Boolean
        },
        orderlist: {
            type: Array
        },
        orderscount: {
            type: Number,
        }
    },
    methods: {
        generateBill() {
            this.bill = true;
            this.total = 0;
            this.gst = 0.11;
            for (let i = 0; i < this.orderlist.length; i++) {
                for (let j = 0; j < this.orderlist[i].length; j++) {
                    {
                        this.total = this.total + Number((this.orderlist[i][j].orderprice.split(" ")[0])) * (Number(this.orderlist[i][j].ordercount));

                    }
                }
            }
            this.gst = (Number(this.total) * Number(this.gst));
        },
        closeShowOrderList() {
            console.log(this.orderlist);
            this.$emit('updateShowOrderList', false);
        },
        incremenetvalue(order) {
            order.ordercount = order.ordercount + 1;
            this.$emit('updateCount', (this.orderscount + 1));
            this.generateBill();
        },
        decrementvalue(order) {
            if (order.ordercount > 1) {
                order.ordercount = order.ordercount - 1;
                this.$emit('updateCount', (this.orderscount - 1));
                this.generateBill();
            }
        },
        deleteorder(order) {
            let newcount = order.ordercount
            for (let i = 0; i < this.orderlist.length; i++) {
                for (let j = 0; j < this.orderlist[i].length; j++) {
                    if (this.orderlist[i][j] === order) {
                        this.orderlist[i].splice(j, 1);
                    }
                }
            }
            this.$emit('updateCount', (this.orderscount - newcount))
            this.generateBill();
            this.$emit('updateShowOrderList', true);

        }
    },

}


</script>
<style scoped>
.btn {
    padding: 10px 10px;
    background-color: #d35400;
    color: #fff;
    border: none;
    float: right;
    cursor: pointer;
}

.btn:hover {
    color: #d35400;
    background-color: white;
    border: 2px solid #d35400;
}

.orderscontainer {
    display: flex; 
    flex-wrap: wrap;   
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 30px;
    background-color: white;
}

.orderscontainerinside {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.individualorder {
    position: relative;
    background-color: white;
    padding: 20px;
    margin: 5px 20px;
    width: 280px;
    border: 1px dotted gray;
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
}

.imgpizzaorder {
    display: flex;    
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 80px;
    transition: 0.9s ease-out;

}

.imgpizzaorder:hover {
    rotate: 30deg;
}

.orderdetails {
    font-family: 'Courier New', Courier, monospace;
    font-weight: 200;
    font-size: 15px;
    margin: 5px;
}

.incrementdecrement {
    position: absolute;
    bottom: 0px;
    float: right;
    right: 0px;
    display: flex;
    flex-direction: row;

}

.deleteeorder {
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 5px;
    color: rgb(255, 71, 71);
    cursor: pointer;
}

.deleteeorder:hover {
    transform: scale(1.1);
}

.incremenet,
.decrement {
    background-color: #159f56;
    color: white;
    font-weight: bolder;
    border: 1px solid #159f56;
    padding: 5px;
    height: fit-content;
    cursor: pointer;
    font-size: 10px;
    transition: background-color 0.9s ease-out;

}

.incremenetvalue {
    background-color: White;
    color: #159f56;
    font-weight: bolder;
    border: 1px solid #159f56;
    padding: 5px;
    height: fit-content;
    font-size: 10px;
}

.generatebill {
    background-color: #d35400;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    float: right;
    margin-right: 20px 20px;
}
</style>