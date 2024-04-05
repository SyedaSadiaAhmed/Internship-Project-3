const colorOptions = document.querySelectorAll('input[type="radio"]');
const mainImage = document.querySelector('.main-image');

colorOptions.forEach(option => {
  option.addEventListener('change', (event) => {
    const selectedColor = event.target.value;
    mainImage.src = `iphone-15-pro-${selectedColor}.jpg`;
  });
});
