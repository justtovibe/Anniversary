const pages = document.querySelectorAll('.page');
let currentPage = 0;

pages.forEach((page,index)=>{
    page.style.zIndex = pages.length - index;
});

function nextPage(){
    if(currentPage < pages.length - 1){
        pages[currentPage].classList.add('flipped');
        currentPage++;
    }
}

function prevPage(){
    if(currentPage > 0){
        currentPage--;
        pages[currentPage].classList.remove('flipped');
    }
}