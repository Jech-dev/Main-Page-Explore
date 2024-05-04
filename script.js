const allVideos = document.querySelectorAll('video');
const sidebar = document.querySelector('.left-section');
const sidebarItems = document.querySelectorAll('.sidebar .item');
const catItems = document.querySelectorAll('.categories a');


//play/pause video on mouse enter/leave

allVideos.forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.play();
    });
    video.addEventListener('mouseleave', () => {
        video.pause();
    });
});



//sideabar

sidebarItems.forEach(sideItem =>{
  sideItem.addEventListener('click', () =>{
    sidebarItems.forEach(item =>{
      item.classList.remove('active');
    });
    sideItem.classList.add('active');
  });
});


//category in the middle

catItems.forEach(catItem =>{
  catItem.addEventListener('click', () =>{
    catItems.forEach(item =>{
      item.classList.remove('active');
    });
    catItem.classList.add('active');
  });
});


// move sidebar with small device screen

window.addEventListener('scroll', () =>{
  if (window.innerWidth <= 992){
    if(this.pageYOffset > 20){
      sidebar.style.paddingTop = '20px';
    }else{
      sidebar.style.paddingTop = '70px';
    }
  }

});

