<template>

  <div v-if="isShowOrderList">
    <OrderLists :isShowOrderList="isShowOrderList" :orderlist="orderlist" :orderscount="orderscount"
      @updateShowOrderList="updateShowOrderList($event)" @updateCount="updateCount($event)" />
  </div>
  <div v-else>
    <Header />
    <div id="pizza-mania">

      <h3>Pizza Mania</h3>
      <div class="flex" v-for="(pizza, index) in pizzatypes">
        <div class="flex-container" v-if="pizza.type === 'Mania'">
          <pizza-mania :orderlist="orderlist" :orderscount="orderscount" :key="index" :name="pizza.name"
            :desc="pizza.desc" :fav="pizza.fav" :imgurl="pizza.imgurl" :price="pizza.price" :size="pizza.size"
            @updateFav="updateFav(index, $event)" @updateCount="updateCount($event)"
            @updateOrderList="updateOrderList($event)" />
        </div>
      </div>
    </div>
    <div id="pizza-volcano">
      <h3>Volcano Pizza</h3>
      <div class="flex" v-for="(pizza, index) in pizzatypes">
        <div class="flex-container" v-if="pizza.type === 'volcano'">
          <volcano-pizza :orderlist="orderlist" :orderscount="orderscount" :key="index" :name="pizza.name"
            :desc="pizza.desc" :fav="pizza.fav" :imgurl="pizza.imgurl"
            :Cheese_Volcano_crust="pizza.Cheese_Volcano_crust" :toppings="pizza.toppings" :size="pizza.size"
            :price="pizza.price" @updateFav="updateFav(index, $event)" @updateCount="updateCount($event)"
            @updateOrderList="updateOrderList($event)" />
        </div>
      </div>
    </div>
    <div id="pizza-specials">
      <h3>Our Specials</h3>
      <div class="flex" v-for="(pizza, index)  in pizzatypes">
        <div class="flex-container" v-if="pizza.type === 'specials'">
          <pizza-cards :orderlist="orderlist" :orderscount="orderscount" :key="index" :name="pizza.name"
            :desc="pizza.desc" :fav="pizza.fav" :imgurl="pizza.imgurl"
            :Cheese_Volcano_crust="pizza.Cheese_Volcano_crust" :toppings="pizza.toppings" :size="pizza.size"
            :price="pizza.price" @updateFav="updateFav(index, $event)" @updateCount="updateCount($event)"
            @updateOrderList="updateOrderList($event)" />
        </div>
      </div>
    </div>
    <Order :orderscount="orderscount" :isShowOrderList="isShowOrderList"
      @updateShowOrderList="updateShowOrderList($event)" />
  </div>
</template>
<script>

import Order from './components/Order.vue'
import OrderLists from './components/OrderLists.vue'

export default {
  components: {
    'Order': Order,
    'OrderLists': OrderLists,

  },
  data() {
    return {
      orderscount: 0,
      orderlist: [],
      isShowOrderList: false,
      pizzatypes: [
        { name: "Veg Extravaganza", desc: "A pizza that decidedly staggers under an overload of golden corn, exotic black olives, crunchy onions, crisp capsicum, succulent mushrooms, juicyfresh tomatoes and jalapeno - with extra cheese to go all around.", fav: false, imgurl: "Veg_Extravaganz.png", type: "specials", size: ["Regular(Serves 2)", " Medium(Serves4)", "Large(Serves 6)"], price: ["120 Rs", "210 Rs", "290 Rs"], toppings: ["Panner", "Black Olive", "Jalapeno", "Red Pepper",] },
        { name: "Veggie Paradise", desc: "Goldern Corn, Black Olives, Capsicum & Red Paprika", fav: true, imgurl: "Veggie_Paradise.png", type: "specials", size: ["Regular(Serves 2)", " Medium(Serves4)", "Large(Serves 6)"], price: ["130 Rs", "190 Rs", "270 Rs"], toppings: ["Panner", "Cilantro", "Black Olive", "Jalapeno", "Red Pepper", "Fresh Tomato", "Onion"] },
        { name: "Veg Loaded", desc: "Tomato | Grilled Mushroom |Jalapeno |Golden Corn | Beans in a fresh pan crust", fav: false, imgurl: "PrimeLoaded.png", type: "specials", size: ["Regular(Serves 2)", " Medium(Serves4)", "Large(Serves 6)"], price: ["140 Rs", "200 Rs", "280 Rs"], toppings: ["Green Peppers", "Black Olive", "Jalapeno", "Red Pepper", "Fresh Tomato", "Onion"] },
        { name: "Peppy Paneer", desc: "Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!", fav: false, imgurl: "Peppy_Paneer.png", type: "specials", size: ["Regular(Serves 2)", " Medium(Serves4)", "Large(Serves 6)"], price: ["130 Rs", "210 Rs", "260 Rs"], toppings: ["Panner", "Black Olive", "Jalapeno", "Red Pepper"] },
        { name: "Double Cheese Margherita", desc: "The ever-popular Margherita - loaded with extra cheese... oodies of it!", fav: false, imgurl: "Double_Cheese_Margherita.png", type: "specials", size: ["Regular(Serves 2)", " Medium(Serves4)", "Large(Serves 6)"], price: ["130 Rs", "190 Rs", "250 Rs"], toppings: ["Roasted Garlic", "Cheese"] },
        { name: "Farm House", desc: "A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes", fav: false, imgurl: "Farmhouse.png", type: "specials", size: ["Regular(Serves 2)", " Medium(Serves4)", "Large(Serves 6)"], price: ["130 Rs", "210 Rs", "290 Rs"], toppings: ["Broccoli", "Black Olive", "Jalapeno", "Red Pepper", "Fresh Tomato", "Mushrooms", "Cheese", "Fried Onion", "Corn"] },
        { name: "Mexican Green Wave", desc: "A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs", fav: false, imgurl: "Mexican_Green_Wave.png", type: "specials", size: ["Regular(Serves 2)", " Medium(Serves4)", "Large(Serves 6)"], price: ["150 Rs", "220 Rs", "270 Rs"], toppings: ["Lettuce", "Green Chilies", "Jalapeno", "Red Pepper", "Fresh Tomato", "Mushrooms", "Cheese", "Fried Onion", "Corn", "Avocado"] },
        { name: "Tandoori Paneer", desc: "It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum I red paprika I mint mayo", fav: false, imgurl: "TandooriPaneer.jpg", type: "specials", size: ["Regular(Serves 2)", " Medium(Serves4)", "Large(Serves 6)"], price: ["140 Rs", "200 Rs", "280 Rs"], toppings: ["Tandoori Paneer", "Grated Paneer", "Spinach", "Jalapeno", "Red Pepper", "Mushrooms", "Cheese", "Fried Onion", "Corn"] },
        { name: "Corn & Cheese", desc: "Cheese I Golden Corn | Cheese n Corn Pizza", fav: false, imgurl: "Corn_&_Cheese.png", type: "specials", size: ["Regular(Serves 2)", " Medium(Serves4)", "Large(Serves 6)"], price: ["130 Rs", "210 Rs", "290 Rs"], toppings: ["Cheese Dip", "Corn", "Cheddar Cheese", "Baby Corn", "Garlic"] },
        { name: "Deluxe Veggie", desc: "For a vegetarian looking for a BIG treat that goes easy on the spices, this one's got it all.. The onions, the capsicum, those delectable mushrooms - with paneer and golden corn to top it all.", fav: false, imgurl: "Deluxe_Veggie.png" },
        { name: "Paneer N Onion", desc: "Creamy Paneer I Onion", fav: false, imgurl: "Paneer_N_Onion.png", type: "Mania", size: ["Small", "Medium", "Large"], price: ["75 Rs", "90 Rs", "105 Rs"] },
        { name: "Cheese N Tomato", desc: "A delectable combination of cheese and juicy tomato", fav: false, imgurl: "cheese_and_tomato.png", type: "Mania", size: ["Small", "Medium", "Large"], price: ["70 Rs", "75 Rs", "85 Rs"] },
        { name: "Fresh Veggie", desc: "Onion & Capsicum", fav: false, imgurl: "Fresh_Veggie.png", type: "Mania", size: ["Small", "Medium", "Large"], price: ["65 Rs", "70 Rs", "85 Rs"] },
        { name: "Panner Makhani", desc: "Paneer and Capsicum on Makhani Sauce", fav: true, imgurl: "Paneer_Makhni.png", type: "Mania", size: ["Small", "Medium", "Large"], price: ["85 Rs", "100 Rs", "115 Rs"] },
        { name: "Golden Corn", desc: "Golden Corn - Sweet Corn Pizza", fav: true, imgurl: "golden_corn_veg.png", type: "Mania", size: ["Small", "Medium", "Large"], price: ["70 Rs", "95 Rs", "110 Rs"] },
        { name: "Cheese Volcano Peppy Paneer", desc: "Indulgent treat featuring a spicy, cheesy explosion with tender paneer and a crispy, flavorful crust", fav: false, imgurl: "Cheese Volcano Peppy Paneer.png", type: "volcano", size: ["Regular(Serves 2)", " Medium(Serves4)"], price: ["120 Rs", "210 Rs"], toppings: ["Panner", "Onion", "Black Olive", "Jalapeno", "Red Pepper", "Crisp Capsicum", "Fresh Tomato",], Cheese_Volcano_crust: false },
        { name: "Cheese Volcano Veg Paradise", desc: "molten cheese filling with a vibrant mix of fresh vegetables like bell peppers, onions, and olives, all topped on a perfectly baked crust for an explosion of flavors in every bite.", fav: true, imgurl: "Cheese Volcano Veg Paradise.png", type: "volcano", size: ["Regular(Serves 2)", " Medium(Serves4)"], price: ["135 Rs", "195 Rs"], toppings: ["Panner", "Onion", "Black Olive", "Jalapeno", "Red Pepper", "Crisp Capsicum", "Fresh Tomato",], Cheese_Volcano_crust: false },
        { name: "Cheese Volcano Farmhouse", desc: " Check out this mouth watering overload of crunchy olives, all topped on a perfectly baked crust for an explosion of flavors in every bite.", fav: false, imgurl: "Cheese Volcano Farmhouse.png", type: "volcano", size: ["Regular(Serves 2)", " Medium(Serves4)"], price: ["145 Rs", "220 Rs"], toppings: ["Panner", "Onion", "Black Olive", "Jalapeno", "Red Pepper", "Crisp Capsicum", "Fresh Tomato",], Cheese_Volcano_crust: false }

      ]
    }
  },
  methods: {
    updateFav(index, newFavValue) {
      this.pizzatypes[index].fav = newFavValue;
    },
    updateCount(newcount) {
      this.orderscount = newcount;
    },
    updateOrderList(newOrder) {
      for (let i = 0; i < this.orderlist.length; i++) {
        for (let j = 0; j < this.orderlist[i].length; j++) {
          if (this.orderlist[i][j].ordername == newOrder[0].ordername && this.orderlist[i][j].ordersize == newOrder[0].ordersize && JSON.stringify(this.orderlist[i][j].toppings) == JSON.stringify(newOrder[0].toppings) && this.orderlist[i][j].cheesecrust == newOrder[0].cheesecrust) {
            this.orderlist[i][j].ordercount = this.orderlist[i][j].ordercount + 1;
            return;
          }
        }
      }
      this.orderlist.push(newOrder);
     
    },
    updateShowOrderList(newShowOrderList) {
      if (this.orderscount == 0) {
        this.isShowOrderList = false;
      }
      else {
        this.isShowOrderList = newShowOrderList;
      }
    }
  }
}
</script>
<style>
body {
  font-family: 'Times New Roman', Times, serif;
  background-color: #f4f4f4;
}

.flex {
  display: inline-flex;
  flex-direction: column;
}

.flex-container {
  display: inline;
}

input[type="checkbox"],
input[type="radio"] {
  width: 15px;
  height: 15px;
  padding: 5px;
  margin: 3px;
  cursor: pointer;
  border: 3px solid #d35400;
  accent-color: #d35400;
}
</style>
