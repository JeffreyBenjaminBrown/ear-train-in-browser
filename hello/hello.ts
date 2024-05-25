import * as st from "./simpleTones.js"

// create a title
let heading = document.createElement('h1')
heading.textContent = 'Hello, World!'
document.body.appendChild(heading)

const button = document.createElement('button');
button.textContent = 'Click me'
button.addEventListener('click', () =>
    { console.log('Button clicked')
    } )
document.body.appendChild(button)
