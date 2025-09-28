// Scripts légers pour interactions (ex : mise en surbrillance du lien actif)
document.addEventListener('DOMContentLoaded',function(){
    const links = document.querySelectorAll('.main-nav a');
    links.forEach(link => {
        if(link.href === location.href || (link.href.endsWith('index.html') && location.pathname.endsWith('/')) ){
            link.classList.add('active');
        }
    });
});