/*
 * Filename: sophisticated_code.js
 * 
 * Description: This code implements a complex and interactive web application
 *              that showcases various modern features in JavaScript. It is
 *              designed for educational purposes and demonstrates best
 *              practices in coding, including modularization and interactivity.
 * 
 * Author: AI Assistant
 */

// Module: MathUtils
// Description: A collection of math utilities
const MathUtils = (function() {
  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero!');
    }
    return a / b;
  }

  return {
    add,
    subtract,
    multiply,
    divide
  };
})();

// Module: StringUtils
// Description: A collection of string manipulation utilities
const StringUtils = (function() {
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function reverse(string) {
    return string
      .split('')
      .reverse()
      .join('');
  }

  return {
    capitalize,
    reverse
  };
})();

// Module: DOMUtils
// Description: A collection of DOM manipulation utilities
const DOMUtils = (function() {
  function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
  }

  function appendToBody(element) {
    document.body.appendChild(element);
  }

  return {
    createParagraph,
    appendToBody
  };
})();

// Module: App
// Description: The main application module
const App = (function() {
  function initialize() {
    DOMUtils.appendToBody(
      DOMUtils.createParagraph('Welcome to the sophisticated code demo!')
    );
  }

  return {
    initialize
  };
})();

// On load, initialize the application
window.addEventListener('load', function() {
  App.initialize();
});
