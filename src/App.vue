<template>

  <div class="box" v-drag="'zzq'">
    <div v-for="item in 4" class="item" :key="item">{{ item }}</div>
  </div>

</template>
<script setup>


</script>
<style  scoped>
.box {
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
}

.zzq {
  border: 2px dashed black;
}

.item {
  flex: 1;
  text-align: center;
  line-height: 100px;
  background-color: aquamarine;
}
</style>