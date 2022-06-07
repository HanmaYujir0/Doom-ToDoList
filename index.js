const input = document.querySelector('#input');
const but = document.querySelector('#but');
const result = document.querySelector('#result');
const total = document.querySelector('#total');
let i = 0;

but.addEventListener('click', (e) => {
  if (input.value === '') return
  createDeleteElements(input.value)
  input.value = ''
})

const createDeleteElements = (value) => {
  i++

  const li = document.createElement('li')
  li.className = 'li'
  li.textContent = value

  const btn = document.createElement('button')
  btn.className = 'btn'
  btn.textContent = 'add'
  li.appendChild(btn)

  btn.addEventListener('click', (e) => {
    i--
    total.textContent = i
    result.removeChild(li)
    
  })

  li.addEventListener('click', (e) => {
    li.classList.toggle('li-active')
  })

  total.textContent = i

  result.appendChild(li)
}