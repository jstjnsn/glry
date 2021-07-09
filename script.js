const $ = document.querySelector.bind(document)

const gallery = $('#gallery')
const popup = $('#popup')
const selectedImage = $('#selectedImage')

const imageIndexes = [1, 2, 3, 4, 5, 6]
const selectedIndex = null

for (let index of imageIndexes) {
  const image = document.createElement('img')
  image.src = `/images/img${index}.png`
  image.alt = `Gallery image ${index}`
  image.classList.add('galleryImage')

  image.addEventListener('click', () => {
    popup.style.transform = 'translateY(0)'
    popup.style.opacity = '1'
    selectedImage.src = `/images/img${index}.png`
    selectedImage.alt = `Gallery image ${index}`
  })

  gallery.appendChild(image)
}

popup.addEventListener('click', () => {
  popup.style.opacity = '0'
  setTimeout(() => {
    popup.style.transform = 'translateY(100%)'
  }, 250)
  popup.src = ''
  popup.alt = ''
})
