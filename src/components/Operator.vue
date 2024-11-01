<template>
    <div>
      <button @click="handleClick">{{ operator }}</button>
    </div>
  </template>
  
  <script>
  export default {
    props: [
        'operator'
    ],

    methods: {
      handleClick() {
        this.$emit('button-click', this.operator);
      }
    }
  };
  </script>
  
  <style></style>