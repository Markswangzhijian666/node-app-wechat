<template>
  <button
    class="btn-out"
    :class="{'is-disabled':disabled}"
    :type="type"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "btn",
  props: {
    type: String,
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.btn-out {
  width: 100%;
  display: inline-block;
  line-height: 1;
  text-align: center;
  background-color: #20af0e;
  color: #fff;
  border: none;
  border-color: #20af0e;
  outline: 0;
  border-radius: 0.3rem;
  cursor: pointer;
  white-space: nowrap;
  box-sizing: border-box;
  padding: 0.6rem 1rem;
  font-size: 0.8rem;
}
.allow-click,
.allow-click:focus,
.allow-click:hover {
  color: #fff;
  background-color: #75b56c;
  border-color: #75b56c;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
