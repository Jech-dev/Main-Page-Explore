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