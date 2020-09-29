// jQuery Smooth Scroll

$('a').on('click', function(e){
    if (this.hash !== ''){
        e.preventDefault();

        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
        // 800 ms
    }
})