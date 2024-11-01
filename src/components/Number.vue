<template>
    <div>
      <button @click="handleClick">{{ number }}</button>
    </div>
  </template>
  
  <script>
  export default {
    props: [
        'number'
    ],

    methods: {
      handleClick() {
        this.$emit('button-click', this.number);
      }
    }
  };
  </script>
  
  <style></style>