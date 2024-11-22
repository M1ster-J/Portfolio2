function toggleMore() {
    const moreLanguages = document.getElementById('more-languages');
    const btn = document.getElementById('more-btn');
    if (moreLanguages.classList.contains('hidden')) {
        moreLanguages.classList.remove('hidden');
        btn.textContent = 'Less';    
        const newItems = moreLanguages.querySelectorAll('[data-aos]');
        newItems.forEach((item) => {
            item.classList.remove('aos-animate'); 
            setTimeout(() => {
                item.classList.add('aos-animate'); 
            }, 100); 
        });
        AOS.refresh();
    } else {
        moreLanguages.classList.add('hidden');
        btn.textContent = 'More';
        AOS.refresh();
    }
}
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000, 
        delay: 200,    
        once: true,   
        offset: 200     
    });
});
    document.addEventListener('DOMContentLoaded', function () {
        AOS.init({
            offset: 120,
            duration: 700,
            easing: 'ease-in-out',
            once: false,
        });
    });

    