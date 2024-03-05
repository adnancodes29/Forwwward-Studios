function smoothScroll() {
    document.addEventListener('wheel', function (event) {
        //only vertical scroll
        if (event.deltaY > 0) {
            // event.preventDefault();
            smoothScroll(document.documentElement, 100, 1000)
        }
    })

    function smoothScroll(domElement, pixel, delay) {
        let intervalToRepeat = 25;
        let step = (intervalToRepeat * pixel) / delay;
        if (step < pixel) {
            domElement.scrollTop += step;
            setTimeout(function () {
                smoothScroll(domElement, pixel - step, delay)
            }, intervalToRepeat);
        }


    }
};

export default smoothScroll;