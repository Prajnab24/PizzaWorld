<template>
  <Header />

  <div id="pizza-mania">
    <h3>Pizza Mania</h3>
  <div class="flex"  v-for="pizza in pizzatypes">
    <div class="flex-container" v-if="pizza.type === 'Mania'">
      <pizza-mania :name="pizza.name" :desc="pizza.desc" :fav="pizza.fav" :imgurl="pizza.imgurl" :size="pizza.size" />
    </div>
  </div>
  </div>
  <div id="pizza-volcano">
    <h3>Volcano Pizza</h3>
  <div  class="flex" v-for="pizza in pizzatypes">
    <div  class="flex-container" v-if="pizza.type === 'volcano'">
      <volcano-pizza :name="pizza.name" :desc="pizza.desc" :fav="pizza.fav" :imgurl="pizza.imgurl"
        :Cheese_Volcano_crust="pizza.Cheese_Volcano_crust" :toppings="pizza.toppings" :size="pizza.size" />
    </div>
    </div>
  </div>
  <div id="pizza-specials">
    <h3>Our Specials</h3>
  <div class="flex" v-for="pizza in pizzatypes">
    <div class="flex-container" v-if="pizza.type === 'specials'">
      <pizza-cards :name="pizza.name" :desc="pizza.desc" :fav="pizza.fav" :imgurl="pizza.imgurl" />
    </div>
  </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      pizzatypes: [
        { name: "Veg Extravaganza", desc: "A pizza that decidedly staggers under an overload of golden corn, exotic black olives, crunchy onions, crisp capsicum, succulent mushrooms, juicyfresh tomatoes and jalapeno - with extra cheese to go all around.", fav: false, imgurl: "Veg_Extravaganz.png",type:"specials" },
        { name: "Veggie Paradise", desc: "Goldern Corn, Black Olives, Capsicum & Red Paprika", fav: false, imgurl: "Veggie_Paradise.png" ,type:"specials"},
        { name: "Veg Loaded", desc: "Tomato | Grilled Mushroom |Jalapeno |Golden Corn | Beans in a fresh pan crust", fav: false, imgurl: "PrimeLoaded.png" ,type:"specials" },
        { name: "Peppy Paneer", desc: "Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!", fav: false, imgurl: "Peppy_Paneer.png",type:"specials" },
        { name: "Double Cheese Margherita", desc: "The ever-popular Margherita - loaded with extra cheese... oodies of it!", fav: false, imgurl: "Double_Cheese_Margherita.png",type:"specials" },
        { name: "Farm House", desc: "A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes", fav: false, imgurl: "Farmhouse.png" ,type:"specials"},
        { name: "Mexican Green Wave", desc: "A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs", fav: false, imgurl: "Mexican_Green_Wave.png" ,type:"specials"},
        { name: "Tandoori Paneer", desc: "It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum I red paprika I mint mayo", fav: false, imgurl: "TandooriPaneer.jpg",type:"specials" },
        { name: "Corn & Cheese", desc: "Cheese I Golden Corn | Cheese n Corn Pizza", fav: false, imgurl: "Corn_&_Cheese.png" ,type:"specials"},
        { name: "Deluxe Veggie", desc: "For a vegetarian looking for a BIG treat that goes easy on the spices, this one's got it all.. The onions, the capsicum, those delectable mushrooms - with paneer and golden corn to top it all.", fav: false, imgurl: "Deluxe_Veggie.png" },
        { name: "Paneer N Onion", desc: "Creamy Paneer I Onion", fav: false, imgurl: "Paneer_N_Onion.png", type: "Mania", size: ["Small", "Medium", "Large"] },
        { name: "Cheese N Tomato", desc: "A delectable combination of cheese and juicy tomato", fav: false, imgurl: "cheese_and_tomato.png", type: "Mania", size: ["Small", "Medium", "Large"] },
        { name: "Fresh Veggie", desc: "Onion & Capsicum", fav: false, imgurl: "Fresh_Veggie.png", type: "Mania", size: ["Small", "Medium", "Large"] },
        { name: "Panner Makhani", desc: "Paneer and Capsicum on Makhani Sauce", fav: true, imgurl: "Paneer_Makhni.png", type: "Mania", size: ["Small", "Medium", "Large"] },
        { name: "Golden Corn", desc: "Golden Corn - Sweet Corn Pizza", fav: false, imgurl: "golden_corn_veg.png", type: "Mania", size: ["Small", "Medium", "Large"] },
        { name: "Cheese Volcano Peppy Paneer", desc: "Indulgent treat featuring a spicy, cheesy explosion with tender paneer and a crispy, flavorful crust", fav: false, imgurl: "Cheese Volcano Peppy Paneer.png", type: "volcano", size: ["Regular(Serves 2)", " Medium(Serrves4)"], toppings: ["Panner", "Onion", "Black Olive", "Jalapeno", "Red Pepper", "Crisp Capsicum", "Fresh Tomato",], Cheese_Volcano_crust: false },
        { name: "Cheese Volcano Veg Paradise", desc: "molten cheese filling with a vibrant mix of fresh vegetables like bell peppers, onions, and olives, all topped on a perfectly baked crust for an explosion of flavors in every bite.", fav: true, imgurl: "Cheese Volcano Veg Paradise.png", type: "volcano", size: ["Regular(Serves 2)", " Medium(Serrves4)"], toppings: ["Panner", "Onion", "Black Olive", "Jalapeno", "Red Pepper", "Crisp Capsicum", "Fresh Tomato",], Cheese_Volcano_crust: false },
        { name: "Cheese Volcano Farmhouse", desc: " Check out this mouth watering overload of crunchy olives, all topped on a perfectly baked crust for an explosion of flavors in every bite.", fav: false, imgurl: "Cheese Volcano Farmhouse.png", type: "volcano", size: ["Regular(Serves 2)", " Medium(Serrves4)"], toppings: ["Panner", "Onion", "Black Olive", "Jalapeno", "Red Pepper", "Crisp Capsicum", "Fresh Tomato",], Cheese_Volcano_crust: false }

      ]
    }
  }
}

</script>
<style>
body {
  font-family: 'Times New Roman', Times, serif;
  background-color: #f4f4f4;
}

.flex{
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
