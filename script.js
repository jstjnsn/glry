const $ = document.querySelector.bind(document)
const $$ = (s) => Array.from(document.querySelectorAll(s))

const gallery = $('#gallery')
const popup = $('#popup')
const selectedImage = $('#selectedImage')

const imageIndexes = [1, 2, 3, 4, 5, 6]
const selectedIndex = null

for (let index of imageIndexes) {
  const image = document.createElement('img')
  image.src = `https://ik.imagekit.io/qt6muek0hun/tr:w-600/img${index}.png`
  image.alt = `Gallery image ${index}`
  image.classList.add('galleryImage')

  image.addEventListener('click', () => {
    popup.style.transform = 'translateY(0)'
    popup.style.opacity = '1'
    selectedImage.src = `https://ik.imagekit.io/qt6muek0hun/tr:w-800/img${index}.png`
    selectedImage.srcSet = `https://ik.imagekit.io/qt6muek0hun/tr:w-400/img${index}.png 400w, https://ik.imagekit.io/qt6muek0hun/tr:w-800/img${index}.png 800w, https://ik.imagekit.io/qt6muek0hun/tr:w-1200/img${index}.png 1200w`
    selectedImage.alt = `Gallery image ${index}`
  })

  gallery.appendChild(image)
}

popup.addEventListener('click', () => {
  popup.style.opacity = '0'
  setTimeout(() => {
    popup.style.transform = 'translateY(100%)'
  }, 250)
  selectedImage.src = ''
  selectedImage.alt = ''
})
