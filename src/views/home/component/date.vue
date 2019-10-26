<template>
  <!-- 时间组件 -->
  <van-popup
    v-if="showchild.show"
    v-model="showchild.show"
    position="bottom"
    :style="{ height: '30%' }"
  >
    <van-datetime-picker @confirm="dateOk" type="date" />
  </van-popup>
</template>
<script>
export default {
  props: {
    showchild: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatter(type, value) {
        console.log(value)
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      }
      return value;
    },
    dateOk(e) {
     
      this.$emit('parentFn',e)
    }
  }
};
</script>
<style lang="scss">
</style>