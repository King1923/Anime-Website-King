 // This function is to produce a random quote
writeRandomQuote = function () {
    var quotes = new Array();
    quotes[0] = "Hard work is worthless for those that don't believe in themselves. - Naruto Uzumaki";
    quotes[1] = "The moment people come to know love, they run the risk of carrying hate. - Obito Uchiha";
    quotes[2] = "It is foolish to fear what we have yet to see and know. -Itachi Uchiha"
    quotes[3] = "The longer you live, the more you realize that in this reality only pain suffering and futility exist, when there is light there will always be shadows to be found, as long as there is the concept of victors, the vanquished will also exist. - Madara Uchiha"
    quotes[4] = "Those who cannot acknowlegdge themselves will eventually fail. -Itachi Uchiha"
    quotes[5] = "Sometimes, we have to look beyond what we want and do what's best. -Piccolo"
    var rand = Math.floor(Math.random()*quotes.length);
    document.write(quotes[rand]);
  }
// A function to open the image in modal
function openModal(imgSrc) {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const image = document.createElement('img');
  image.src = imgSrc;
  image.alt = 'Image';

  modal.appendChild(image);
  document.body.appendChild(modal);

  modal.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
}

// Adds eventlistener to images in gallery
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    openModal(image.src);
  });
});