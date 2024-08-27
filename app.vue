<template>
  <div class="container">
    <div class="app">
      <h1>traductor</h1>
      <p>app para traducir tweets en codigo lol.</p>
      <input type="text" placeholder="texto a traducir" class="text-input" v-model="text" />
      <p class="output">{{ translatedText }}</p>
      <input type="text" placeholder="texto encriptado" class="text-input" v-model="text2" />
      <p class="output">{{ translatedText2 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      text: '',
      text2: '',
      placeholderText: 'traduccion aqui'
    }
  },
  computed: {
    translatedText() {
      return this.text === '' ? this.placeholderText : this.translate(this.text);
    },
    translatedText2() {
      return this.text2 === '' ? this.placeholderText : this.encrypt(this.text2);
    }
  },
  methods: {
    translate(text) {
      let inputText = text;
      for(let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        switch (char) {
          case '+':
            inputText = inputText.replace(char, 'a');
            break;
          case '!':
            inputText = inputText.replace(char, 'b');
            break;
          case '#':
            inputText = inputText.replace(char, 'c');
            break;
          case '™':
            inputText = inputText.replace(char, 'd');
            break;
          case '_':
            inputText = inputText.replace(char, 'e');
            break;
          case '{':
            inputText = inputText.replace(char, 'f');
            break;
          case '÷':
            inputText = inputText.replace(char, 'g');
            break;
          case '?':
            inputText = inputText.replace(char, 'h');
            break;
          case ':':
            inputText = inputText.replace(char, 'i');
            break;
          case '§':
            inputText = inputText.replace(char, 'j');
            break;
          case '/':
            inputText = inputText.replace(char, 'k');
            break;
          case '€':
            inputText = inputText.replace(char, 'l');
            break;
          case '¢':
            inputText = inputText.replace(char, 'm');
            break;
          case '~':
            inputText = inputText.replace(char, 'n');
            break;
          case '£':
            inputText = inputText.replace(char, 'o');
            break;
          case '^':
            inputText = inputText.replace(char, 'p');
            break;
          case '∆':
            inputText = inputText.replace(char, 'q');
            break;
          case '|':
            inputText = inputText.replace(char, 'r');
            break;
          case '‡':
            inputText = inputText.replace(char, 's');
            break;
          case '=':
            inputText = inputText.replace(char, 't');
            break;
          case '&':
            inputText = inputText.replace(char, 'u');
            break;
          case '*':
            inputText = inputText.replace(char, 'v');
            break;
          case '¥':
            inputText = inputText.replace(char, 'w');
            break;
          case 'π':
            inputText = inputText.replace(char, 'x');
            break;
          case ']':
            inputText = inputText.replace(char, 'y');
            break;
          case '•':
            inputText = inputText.replace(char, 'z');
            break;
          default:
            break;
        }
      }
      let outputText = text === '' ? '' : inputText;
      return outputText;
    },
    encrypt(text) {
      let inputText = text;
      for(let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        switch (char) {
          case 'a':
            inputText = inputText.replace(char, '+');
            break;
          case 'b':
            inputText = inputText.replace(char, '!');
            break;
          case 'c':
            inputText = inputText.replace(char, '#');
            break;
          case 'd':
            inputText = inputText.replace(char, '™');
            break;
          case 'e':
            inputText = inputText.replace(char, '_');
            break;
          case 'f':
            inputText = inputText.replace(char, '{');
            break;
          case 'g':
            inputText = inputText.replace(char, '÷');
            break;
          case 'h':
            inputText = inputText.replace(char, '?');
            break;
          case 'i':
            inputText = inputText.replace(char, ':');
            break;
          case 'j':
            inputText = inputText.replace(char, '§');
            break;
          case 'k':
            inputText = inputText.replace(char, '/');
            break;
          case 'l':
            inputText = inputText.replace(char, '€');
            break;
          case 'm':
            inputText = inputText.replace(char, '¢');
            break;
          case 'n':
            inputText = inputText.replace(char, '~');
            break;
          case 'o':
            inputText = inputText.replace(char, '£');
            break;
          case 'p':
            inputText = inputText.replace(char, '^');
            break;
          case 'q':
            inputText = inputText.replace(char, '∆');
            break;
          case 'r':
            inputText = inputText.replace(char, '|');
            break;
          case 's':
            inputText = inputText.replace(char, '‡');
            break;
          case 't':
            inputText = inputText.replace(char, '=');
            break;
          case 'u':
            inputText = inputText.replace(char, '&');
            break;
          case 'v':
            inputText = inputText.replace(char, '*');
            break;
          case 'w':
            inputText = inputText.replace(char, '¥');
            break;
          case 'x':
            inputText = inputText.replace(char, 'π');
            break;
          case 'y':
            inputText = inputText.replace(char, ']');
            break;
          case 'z':
            inputText = inputText.replace(char, '•');
            break;
          default:
            break;
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