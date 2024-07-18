<template>
  <VDropdown class="dropdown">
    <span class="annotation"> ℹ️ </span>
    <template #popper>
      <div class="tooltip-content">
        {{ tooltipContent }}
      </div>
    </template>
  </VDropdown>
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
.dropdown {
  display: inline-block;
}

.annotation {
  display: inline;
  cursor: pointer;
  font-size: inherit;
  line-height: inherit;
}

.tooltip-content {
  padding: 1.5rem;
}
</style>
