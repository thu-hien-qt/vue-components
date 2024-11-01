<template>
    <div>
      <button @click="handleClick">{{ clear }}</button>
    </div>
  </template>
  
  <script>
  export default {
    props: [
        'clear'
    ],

    methods: {
      handleClick() {
        this.$emit('button-click', this.clear);
      }
    }
  };
  </script>
  
  <style></style>