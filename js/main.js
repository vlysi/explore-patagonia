const slider = tns({
  container: '.header-slider',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  controls: false,
  autoplayButtonOutput: false,
});

const sliderPrev = document.querySelector('#sliderPrev');
const sliderNext = document.querySelector('#sliderNext');

sliderPrev.onclick = () => {
  slider.goTo('prev');
}

sliderNext.onclick = () => {
  slider.goTo('next');
}


const currentSliderIndexEl = document.querySelector('#sliderCurrent');
const sliderTotalEl = document.querySelector('#sliderTotal');

function updateSlideFraction() {
  const sliderInfo = slider.getInfo();
  currentSliderIndexEl.innerText = '0' + (sliderInfo.navCurrentIndex + 1);
  sliderTotalEl.innerText = '0' + sliderInfo.pages;
}

updateSlideFraction();


slider.events.on('indexChanged', () => {
  updateSlideFraction();
});









