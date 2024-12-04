<template>
  <div class="custom-alert">
    <div>Select the Size of pizza</div>
    <div class="btn" @click="toggleshowAlert"><i class="fa fa-close" style="font-size:18px"></i></div>
  </div>
</template>
<script>
export default {
  props: {
    isAlertVisible: {
      type: Boolean
    }
  },
  methods: {
    toggleshowAlert() {
      this.$emit('updateshowAlert', !this.isAlertVisible);
    }
  }
}

</script>
<style scoped>
.custom-alert {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 0px;
  background-color: #d35400b0;
  color: #fff;
  border: 1px solid #d35400;
  border-radius: 2px;
  font-weight: bolder;
  overflow: hidden;
  z-index: 2;
}

.btn {
  padding: 5px 5px;
  background-color: #d35400;
  color: #fff;
  border: none;
  float: right;
  cursor: pointer;
}

.btn:hover {
  color: #d35400;
  background-color: white;
}
</style>