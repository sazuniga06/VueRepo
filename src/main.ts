import { createApp } from 'vue'
import App from './App.vue'

const app =createApp(App)

//Creacion de directivas personalizadas
app.directive('font-size', {
  beforeMount: (el, binding) => {
    el.style.fontSize = binding.value + 'px'
  }
})

app.directive('color', {
  beforeMount: (el, binding) => {
    let color = 'black'
    switch (binding.arg) {
        case 'red':
            color = 'red'
            break;
        case 'blue':
            color = 'blue'
            break;
        case 'green':
            color = 'green'
            break;
        default:
            color = 'black'
            break;  
    }
    el.style.color = color
  }
})

app.directive('background', {
  beforeMount: (el, binding) => {
    let color = 'white'
    if(binding.modifiers.yellow) {
        color = 'yellow'
    } else if(binding.modifiers.gray) {
        color = 'gray'
    } else if(binding.modifiers.pink) {
        color = 'pink'
    }
    el.style.backgroundColor = color

    let gradienta = 'to right'
    if(binding.modifiers.left) {
        gradienta = 'to left'
    } else if(binding.modifiers.top) {
        gradienta = 'to top'
    } else if(binding.modifiers.bottom) {
        gradienta = 'to bottom'
    }  

    if(binding.value) {
        el.style.backgroundImage = `linear-gradient(${gradienta}, ${binding.value})`
    }   

  }

})

app.mount('#app')


