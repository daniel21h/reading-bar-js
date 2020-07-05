// Get the text container
const postWrap = document.querySelector('.post-wrap')

// Create bar
let bar = document.createElement('div')

// Bar style
bar.style.height = '5px'
bar.style.width = '0'
bar.style.backgroundColor = '#6633cc'
bar.style.position = 'fixed'
bar.style.top = '0'
bar.style.left = '0'
bar.style.zIndex = '9999'

// Add bar in html body
document.body.append(bar)

// Update bar

// Check scroll movement
document.addEventListener('scroll', () => {
  // Size of the box containing the text
  // console.log(postWrap.offsetHeight)
  const textHeight = postWrap.offsetHeight

  // Check which page position I am in
  // console.log(window.pageYOffset)
  const pagePositionY = window.pageYOffset

  // Rule of 3
  const updatedBar = textHeight * 100 / pagePositionY

  console.log(updatedBar)
})