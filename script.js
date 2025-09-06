const container= document.getElementById('scroll-container');
const scrollLeftBtn= document.getElementById('scroll-left')
const scrollRightBtn= document.getElementById('scroll-right')

scrollLeftBtn.addEventListener('click', () => {
    container.scrollBy({left:-300, behaviour: 'smooth'});
});
scrollRightBtn.addEventListener('click', () => {
    container.scrollBy({left:300, behaviour: 'smooth'});
});