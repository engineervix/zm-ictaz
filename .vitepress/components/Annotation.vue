<template>
  <span class="annotation" v-tooltip="tooltipContent"> ℹ️ </span>
</template>

<script>
export default {
  name: "Annotation",
  props: {
    tooltipContent: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.annotation {
  display: inline;
  position: relative;
  cursor: pointer;
  font-size: inherit;
  line-height: inherit;
}
</style>
