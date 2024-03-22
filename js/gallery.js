// Main Image
let imageTitle = document.querySelector('.img-title');
let mainImage = document.getElementById('main-image_img');
let imageCaption = document.querySelector('.main-image__caption');
let nextButton = document.querySelector('.arrow-next');
let prevButton = document.querySelector('.arrow-prev');
let readMore = document.querySelector('.btn');

// Thumbnails
let thumbnailBar = document.querySelector('.thumbnail-list');
let upButton = document.getElementById('arrow-up');
let thumbnailItems = document.getElementsByClassName('thumbnail-item');

let imgList = [
	{
		'src' : 'images/flowers-pink-small.jpg',
		'title' : 'Market in Münster',
		'description' : 'Market in Münster, North Rhine-Westphalia, Germany',
		'url' : 'https://commons.wikimedia.org/w/index.php?curid=62071586'
	},
	{
		'src' : 'images/flowers-purple-small.jpg',
		'title' : 'Sentmaring Park',
		'description' : 'Sentmaring Park, Münster, North Rhine-Westphalia, Germany',
		'url' : 'https://commons.wikimedia.org/w/index.php?curid=48576226'
	},
	{
		'src' : 'images/flowers-red-small.jpg',
		'title' : 'Poppies in cornfield',
		'description' : 'Poppies in cornfield, Dülmen,  North Rhine-Westphalia, Germany',
		'url' : 'https://commons.wikimedia.org/w/index.php?curid=40957238'
	},
	{
		'src' : 'images/flowers-white-small.jpg',
		'title' : 'Daffodils in Sentmaring park',
		'description' : 'Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany',
		'url' : 'https://commons.wikimedia.org/w/index.php?curid=48211466'
	},
	{
		'src' : 'images/flowers-yellow-small.jpg',
		'title' : 'Sunflowers in the hamlet Dernekamp',
		'description' : 'Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany',
		'url' : 'https://commons.wikimedia.org/w/index.php?curid=61514522'
	}
];

// Thumbnail related
for(let i = 0; i < imgList.length; i++) {
	let newListItem = document.createElement('li');
	let newImg = document.createElement('img');
	newImg.setAttribute('src', imgList[i].src);
	newImg.setAttribute('title', imgList[i].title);
	newImg.setAttribute('alt', imgList[i].description);
	newImg.setAttribute('url', imgList[i].url);

	newImg.index = i;
	newImg.className = 'thumbnail-item';

	newListItem.appendChild(newImg);
	thumbnailBar.appendChild(newListItem);
}

nextButton.onclick = () => {
  slideHandler(1);
}

prevButton.onclick = () => {
  slideHandler(-1);
}

upButton.onclick = () => {
  for (let item of thumbnailItems) {
    item.classList.toggle('thumbnail-hide');
  }
  upButton.classList.toggle('arrow-rotated-180')
}

// Main Image
let currentSlide = 0;
showSlide(currentSlide);

function showSlide(n) {
  if (n >= imgList.length) {
    n = 0;
    currentSlide = 0;
  }
  if (n < 0) {
    currentSlide = imgList.length - 1;
    n = imgList.length - 1;
  }

  let requiredElement = imgList[n];
  let imageSource = requiredElement.src.replace('small', 'large');
  
  imageTitle.textContent = requiredElement.title;
  imageCaption.textContent = requiredElement.description;
  readMore.setAttribute('href', requiredElement.url);
  mainImage.setAttribute('src', imageSource);
  activeThumbnail(n);
}

function activeThumbnail(n) {
  if (n >= imgList.length) {
    n = 0;
    currentSlide = 0;
  }
  if (n < 0) currentSlide = imgList.length - 1;

  for (let item of thumbnailItems) {
    item.setAttribute('id', 'notActive');
  }

  thumbnailItems[n].setAttribute('id', 'active');
}

function slideHandler(n) {
  currentSlide += n;
  showSlide(currentSlide);
}

setInterval(function() {
  slideHandler(1);
}, 5000);

for (let index in thumbnailItems) {
  thumbnailItems[index].onclick = () => {
    showSlide(index);
  }
}