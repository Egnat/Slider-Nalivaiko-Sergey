//Реализуйте слайдер для фото, исходя из требований ниже.

/*Должна быть возможность пролистывать фото. Например, добавить 2 кнопки вперед и назад (предыдущее, следующее и так далее);
При клике «назад» на первом фото должно открываться последнее. При клике «вперед» на последнем фото должно открываться первое;
Блок, в котором располагаются изображения, не должен меняться под размер картинок;
Добавить анимацию при переключении фото;
На входе — массив изображений. Их может быть любое количество. Нельзя завязываться на порядковый номер элемента;
Картинки можно положить в папку asset. Либо использовать стороннее API, сделав GET запрос для получения изображений;
Соблюдать семантическую верстку;
Использовать селекторы по тегу для задания стилей нельзя. Использовать классы. В случае, когда есть необходимость — селектор по id;
Дизайн произвольный. Минимум — застилизовать кнопки (добавить hover) и обеспечить для них accessibility: переключение по tab, outline, cursor.*/

let slideIndex = 0;
  showSlides(slideIndex);      
function plusSlides(n) {
  showSlides(slideIndex += n);
  //alert('ok'); 
}      
function currentSlide(n) {
  showSlides(slideIndex = n);
} 
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let ovals = document.getElementsByClassName("oval");  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
for (let i = 0; i < ovals.length; i++) {
  ovals[i].className = ovals[i].className.replace(" active", "");
}
  slides[slideIndex-1].style.display = "block";  
  ovals[slideIndex-1].className += " active";
}