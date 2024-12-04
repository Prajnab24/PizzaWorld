<template>
    <div class="order" @click="openShowOrderList">
        <div class="orders">
            <div>
                <img src="\assets\images\pizzalogo.svg" style="padding:5px;"> <span id="ordercounted">{{ orderscount
                    }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        orderscount: {
            type: Number,
        },
        isShowOrderList: {
            type: Boolean
        }
    },
    methods: {
        openShowOrderList() {

            this.$emit('updateShowOrderList', true);;
        }
    }
}
</script>
<style scoped>
.order {
    margin: auto;
    width: 30%;
}

.orders {
    position: fixed;
    bottom: 0px;
    width: 30%;
    border-radius: 20px 20px 0px 0px;
    background-color: #159f56;
    color: white;
    transition: transform .30s ease-in-out;
}

.orders:hover {
    transform: scale(1.05, 1.08);
    cursor: pointer;
}

#ordercounted {
    position: absolute;
    right: 20px;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    font-size: 25px;
}
</style>