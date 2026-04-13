document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});
window.showToast = function(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
};

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 10) { 
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
});