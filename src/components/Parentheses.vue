<template>
    <div>
      <button @click="handleClick">{{ parentheses }}</button>
    </div>
  </template>
  
  <script>
  export default {
    props: [
        'parentheses'
    ],

    methods: {
      handleClick() {
        this.$emit('button-click', this.parentheses);
      }
    }
  };
  </script>
  
  <style></style>