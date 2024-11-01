<template>
  <h1>Calculator</h1>

  <div class="row">
    <display :value="displayValue"
      :display = "displayValue"/>
  </div>

  <div class="row">
    <parentheses 
      v-for="p in parentheses"
      :key="p"
      :parentheses="p"
      @button-click="handleButton"
    />

    <operator
      v-for="o in operator[0]"
      :key="o"
      :operator="o"
      @button-click="handleButton"
    />

    <clear
      :clear="clear"
      @button-click="handleClearButton"
    />
  </div>

  <div class="row">
    <number 
      v-for="n in number[1]"
      :key="n"
      :number="n"
      @button-click="handleButton"
    />

    <operator
      v-for="o in operator[1]"
      :key="o"
      :operator="o"
      @button-click="handleButton"
    />
  </div>

  <div class="row">
    <number 
      v-for="n in number[2]"
      :key="n"
      :number="n"
      @button-click="handleButton"
    />

    <operator
      v-for="o in operator[2]"
      :key="o"
      :operator="o"
      @button-click="handleButton"
    />
  </div>

  <div class="row">
    <number 
      v-for="n in number[3]"
      :key="n"
      :number="n"
      @button-click="handleButton"
    />

    <operator
      v-for="o in operator[3]"
      :key="o"
      :operator="o"
      @button-click="handleButton"
    />
  </div>

  <div class="row">
    <number 
      v-for="n in number[4]"
      :key="n"
      :number="n"
      @button-click="handleButton"
    />

    <operator
      v-for="o in operator[4]"
      :key="o"
      :operator="o"
      @button-click="handleButton"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        displayValue: 0,
        currentInput: '',

        number: [
          [],
          [7, 8, 9],
          [4, 5, 6],
          [1, 2, 3],
          [0, "."]
        ],

        operator: [
          ["%"],
          ["+"],
          ["-"],
          ["*"],
          ["=", "/"]
        ],

        clear: "AC",

        parentheses: ["(",")"]
      };
    },

    methods: {
      handleButton(button) {
        if (button === '=') {
          try {
            this.displayValue = eval(this.currentInput);
          } catch {
            this.displayValue = 'Error';
          }
          this.currentInput = '';
        } else {
          this.currentInput += button
          this.displayValue = this.currentInput;
        }
      },

      handleClearButton() {
        this.currentInput = '';
        this.displayValue = 0;
      }
    }

  }
</script>

<style>
#app > div {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}

button {
  width: 50px;
  margin: 2px 0;
}
</style>