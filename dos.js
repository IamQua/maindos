const button = document.querySelector("button");

window.addEventListener("scroll", () => {
  const rect = button.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  
  if (rect.top < windowHeight && rect.bottom >= 0) {
    button.style.transform = "scale(1.2)";
  } else {
    button.style.transform = "scale(1)";
  }
});



// DOM Elements

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;


// Apply the cached theme on reload

const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add('solar');
}

// Button Event Handlers

darkButton.onclick = () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
};

lightButton.onclick = () => {
  body.classList.replace('dark', 'light');

  localStorage.setItem('theme', 'light');
};

solarButton.onclick = () => {

  if (body.classList.contains('solar')) {
    
    body.classList.remove('solar');
    solarButton.style.cssText = `
      --bg-solar: var(--yellow);
    `

    solarButton.innerText = 'Rogue';

    localStorage.removeItem('isSolar');

  } else {

    solarButton.style.cssText = `
      --bg-solar: white;
    `

    body.classList.add('solar');
    solarButton.innerText = 'normalize';

    localStorage.setItem('isSolar', true);
  }
};

const form = document.getElementById('exampleForm')
const submitButton = document.querySelector('.submit')
const successMessage = document.getElementById('form-submitted-msg')


const formElements = [ ...form.elements ]

const allInputsValid = () => {
  const valid = formElements.every((element) => {
    if (element.nodeName === 'SELECT') {
      return element.value !== 'Please select an option'
    } else {
      return element.checkValidity()
    }
  })


  return valid
}


const handleChange = () => {
  formElements.forEach((element) => {
    if (!element.checkValidity()
          && element.nodeName !== 'BUTTON'
          && element.nodeName !== 'SELECT'  
          && element.type !== 'checkbox'
          && element.type !== 'radio'
    ) {
      element.style.borderColor = 'white'
      element.nextElementSibling.style.color = 'orange'
      element.nextElementSibling.style.display = 'block'
      element.previousElementSibling.style.color = 'orange'
    }

    if (element.checkValidity()
          && element.nodeName !== 'BUTTON'
          && element.nodeName !== 'SELECT'
          && element.type !== 'checkbox'
          && element.type !== 'radio'
    ) {
      element.style.borderColor = '#CED4DA'
      element.nextElementSibling.style.color = '#CED4DA'
      element.nextElementSibling.style.display = 'none'
      element.previousElementSibling.style.color = '#19ec1b'
    }
    if (!element.checkValidity()
          && (element.type === 'checkbox'
              || element.type === 'radio')
    ) {
      element.style.borderColor = 'orange'
      element.nextElementSibling.style.color = 'orange'
    }

    if (element.checkValidity()
          && (element.type === 'checkbox'
              || element.type === 'radio')
    ) {
      element.style.borderColor = '#CED4DA'
      element.nextElementSibling.style.color = '#19ec1b'
    }

    if (element.nodeName === 'SELECT'
          && element.value === 'Please select an option'
    ) {
      element.style.borderColor = 'orange'
      element.nextElementSibling.style.color = 'orange'
      element.nextElementSibling.style.display = 'block'
      element.previousElementSibling.style.color = 'orange'
    }

    if (element.nodeName === 'SELECT'
          && element.value !== 'Please select an option'
    ) {
      element.style.borderColor = '#19ec1b'
      element.nextElementSibling.style.color = '#19ec1b'
      element.nextElementSibling.style.display = 'none'
      element.previousElementSibling.style.color = '#19ec1b'
    }
  })

  if (allInputsValid()) {
    submitButton.removeAttribute('disabled', '')
  } else {
    submitButton.setAttribute('disabled', '')
  }
}

const handleSubmit = (e) => {
  e.preventDefault()
  if (allInputsValid()) {
    successMessage.style.display = 'block'
    form.reset()
    submitButton.setAttribute('disabled', '')

   
    setTimeout(() => {
      successMessage.style.display = 'none'
    }, 3000)
  }
}

formElements.forEach((element) => {
  element.addEventListener('change', handleChange)
})

form.addEventListener('submit', (e) => handleSubmit(e))