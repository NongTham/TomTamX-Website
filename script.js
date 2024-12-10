let b = baffle('.someSelector');

setTimeout(() => {
    b.start()
        .set({ speed: 60 })
        .text(text => 'UNC - 94%')
        .reveal(5000);
}, 1000); 


document.addEventListener('DOMContentLoaded', function() {
    const fadeIns = document.querySelectorAll('.fade-in');
    fadeIns.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('show');
        }, index * 200); 
    });
});

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});
