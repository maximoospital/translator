<template>
  <div class="container">
    <div class="app">
      <h1>traductor</h1>
      <p>app para traducir tweets en codigo lol.</p>
      <input type="text" placeholder="texto a traducir" class="text-input" v-model="text" />
      <p class="output">{{ translatedText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      text: '',
      placeholderText: 'traduccion aqui'
    }
  },
  computed: {
    translatedText() {
      return this.text === '' ? this.placeholderText : this.translate(this.text);
    }
  },
  methods: {
    translate(text) {
      let inputText = text;
      for(let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        if(char === '+') {
          inputText = inputText.replace('+', 'a');
        } else if(char === '=') {
          inputText = inputText.replace('=', 't');
        }
      }
      let outputText = text === '' ? '' : inputText;
      return outputText;
    }
  }
}
</script>

<style>
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #121212;
    color: #e0e0e0;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #121212;
  }
  .app {
    text-align: center;
    padding: 30px;
    border-radius: 10px;
    background-color: #1e1e1e;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  h1, p {
    margin: 0;
  }
  h1 {
    margin-bottom: 10px;
  }
  .text-input {
    width: 100%;
    padding: 10px 0px 10px 10px;
    margin-top: 10px;
    border: 1px solid #333;
    border-radius: 5px;
    background-color: #333;
    color: #e0e0e0;
  }
  .text-input::placeholder {
    color: #e0e0e0;
  }
  
  .text-input:focus {
    outline: none;
  }
  .output {
    margin-top: 10px;
  }
</style>