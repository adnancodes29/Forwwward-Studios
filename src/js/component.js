import HeroSlide1 from '../images/hero/hero-1.jpg';
import HeroSlide2 from '../images/hero/hero-2.jpg';
import HeroSlide3 from '../images/hero/hero-3.jpg';
import YMC from '../images/hero/ymc.jpg';
import Attachment from '../images/hero/attachment-project.jpg';
import Boringbits from '../images/hero/boringbits.jpg';
import MindOnly from '../images/hero/mind-only.jpg';
import ArieStudioSwimmwear from '../images/hero/areia-studio-swimwear.jpg';
import AlterVenturePArtners from '../images/hero/alter-venture-partners.jpg';
import Briefar from '../images/hero/briefar.jpg';
import ProductIdeaImg from '../images/hero/our-process.webp';
import decentralizedStudioImage from '../images/hero/decentralized-banner.jpg';
import WorkSlide1 from '../images/studio/work-1.jpg';
import WorkSlide2 from '../images/studio/work-2.jpg';
import WorkSlide3 from '../images/studio/work-3.jpg';
import WorkSlide4 from '../images/studio/work-4.jpg';
import WhatWeDo from '../images/studio/what-we-do.jpg';
import Pedro from '../images/studio/pedro.jpg';
import Eduardo from '../images/studio/eduardo.jpg';
import NextGenImg from '../images/studio/next-gen.png';
import slider from '../js/slider.js';

function component() {
    const preloader = document.querySelector('.preloader');
    const heroHeading = document.querySelector('.hero .grid .grid__item--1');
    const heroText = document.querySelector('.hero .grid .grid__item--2');
    const heroSlider = document.querySelector('.hero .grid .grid__item--3');
    const heroSliderControls = document.querySelector('.hero .grid .grid__item--4');
    const heroCta = document.querySelector('.hero .grid .grid__item--5');

    // Reveal page elements on load
    function revealElementsOnLoad([...elements], time){
        setTimeout(() => {
            elements.forEach(element => {
                element.classList.remove('hidden');
            })
        }, time)
    };

    let heroSlide1 = document.querySelector('.hero__slide--1');
    let heroSlide2 = document.querySelector('.hero__slide--2');
    let heroSlide3 = document.querySelector('.hero__slide--3');

    const nav = document.querySelector('.nav');
    const menu = document.querySelector('.menu');
    const close = document.querySelector('.close-nav');

    menu.addEventListener('click', () => {
        nav.classList.add('nav--open');
    });

    close.addEventListener('click', () => {
        nav.classList.remove('nav--open');
    });

    if(document.body.id === 'home') {
        // Hide preloader
        setTimeout(() => {
            preloader.classList.add('preloader--complete');
        }, 4700);
        revealElementsOnLoad([heroHeading, heroText, heroCta, heroSlider, heroSliderControls], 4700);

        slider();

        let decentralizedStudioBanner = document.querySelector('.decentralized-studio-img');
        let ourProcess = document.querySelector('.product-idea-img');
        
        decentralizedStudioBanner.src = decentralizedStudioImage;
        decentralizedStudioBanner.alt = 'Decentralized Studio';

        heroSlide1.src = HeroSlide1;
        heroSlide1.alt = 'Hero Slide 1';

        heroSlide2.src = HeroSlide2;
        heroSlide2.alt = 'Hero Slide 2';

        heroSlide3.src = HeroSlide3;
        heroSlide3.alt = 'Hero Slide 3';
        
        ourProcess.src = ProductIdeaImg;
        ourProcess.alt = 'Our Process';

        let height = window.innerHeight / 2;
        let height2 = window.innerHeight / 8;

        let cotin = document.body;
        let heightThreshold = document.querySelector('.remarkable-experiences').offsetTop - height;
        let heightThreshold2 = document.querySelector('.decentarlized-studio').offsetTop - height2;
        
        window.addEventListener('scroll', function(){
            let wScroll = window.pageYOffset;

            if(wScroll >= heightThreshold && wScroll <= heightThreshold2) {
               cotin.classList.add('light-theme');
            } else {
               cotin.classList.remove('light-theme');
            }
        });


    };

    if(document.body.id === 'work') {
        revealElementsOnLoad([heroHeading, heroText, heroCta, heroSlider, heroSliderControls], 1000);

        let heroSlide4 = document.querySelector('.hero__slide--4');

        slider();

        heroSlide1.src = WorkSlide1;
        heroSlide1.alt = 'Work Slide 1';

        heroSlide2.src = WorkSlide2;
        heroSlide2.alt = 'Work Slide 2';

        heroSlide3.src = WorkSlide3;
        heroSlide3.alt = 'Work Slide 3';

        heroSlide4.src = WorkSlide4;
        heroSlide4.alt = 'Work Slide 4';

        let featuredWork = document.querySelectorAll('.featured__work');

        featuredWork.forEach((item, index ) => {
            (index % 2 == 0)?item.classList.add('featured__work--left-img'):item.classList.add('featured__work--right-img');
        });

        const loadMoreBtn = document.querySelector('#loadMore');
        const works = [...featuredWork];

        works.splice(0,3).forEach(work => {
            work.style.display = 'flex';
        })

        loadMoreBtn.addEventListener('click', function(e){
            e.preventDefault();

            works.splice(0,3).forEach(work => {
                work.classList.remove('hidden');
            })

            if(works.length == 0) {
                loadMoreBtn.style.display = 'none';
            }

        });

        let height = window.innerHeight / 2;
        let height2 = window.innerHeight / 2;

        let heightThreshold = document.querySelector('.featured-works').offsetTop - height;
        let heightThreshold2 = document.querySelector('.we-can-help').offsetTop - height2;
        
        window.addEventListener('scroll', function(){
            let wScroll = window.pageYOffset;

            if(wScroll >= heightThreshold && wScroll <= heightThreshold2) {
                document.body.classList.add('light-theme');
            } else {
                document.body.classList.remove('light-theme');
            }
        });

    }

    if(document.body.id === 'studio') {
        const studioHeading = document.querySelector('.intro .grid .grid__item--1');
        const studioText = document.querySelector('.intro .grid .grid__item--2');
        const studioCta = document.querySelector('.intro .grid .grid__item--3');

        revealElementsOnLoad([studioHeading, studioText, studioCta], 1000);

        const whatWeDo = document.querySelector('.what-we-do-img');
        const imgTeam1 = document.querySelector('.img-team-1');
        const imgTeam2 = document.querySelector('.img-team-2');
        const nextGenImg = document.querySelector('.next-gen-img');
        

        whatWeDo.src = WhatWeDo;
        whatWeDo.alt = 'What We Do';

        imgTeam1.src = Pedro;
        imgTeam1.alt = 'Pedro Gil';

        imgTeam2.src = Eduardo;
        imgTeam2.alt = 'Eduardo Martins';

        nextGenImg.src = NextGenImg;
        nextGenImg.alt = 'Forwwward Studio Next Generation';

        let height = window.innerHeight / 2;
        let height2 = window.innerHeight / 2;

        let heightThreshold = document.querySelector('.what-we-do').offsetTop - height;
        let heightThreshold2 = document.querySelector('.next-generation').offsetTop - height2;
        
        window.addEventListener('scroll', function(){
            let wScroll = window.pageYOffset;

            if(wScroll >= heightThreshold && wScroll <= heightThreshold2) {
                document.body.classList.add('light-theme');
            } else {
                document.body.classList.remove('light-theme');
            }
        });
    }

    if(document.body.id === 'contact') {
        const nameLabel = document.querySelector('#nameLabel')
        const name = document.querySelector('#name');
        const emailLabel = document.querySelector('#emailLabel');
        const email = document.querySelector('#email');
        const messageLabel = document.querySelector('#messageLabel');
        const message = document.querySelector('#message');
        const attach = document.querySelector('#upload-file');
        const check = document.querySelector('#check');
        const attachText = document.querySelector('#attachText');
        const contactHeading = document.querySelector('#contactHeading');
        const form = document.querySelector('.form');
        const contactText = document.querySelector('#contactText');
        const contactInfo = document.querySelector('.contact__info');
        const submitBtn = document.querySelector('#submit');
        const errorLine = document.querySelectorAll('.error-line');
        const errorInfo = document.querySelectorAll('.error-info');

        revealElementsOnLoad([contactHeading, contactText, form, contactInfo], 1000);

        name.setAttribute("type", "text");

        function hideLabel(el, label) {
            el.addEventListener('keyup', function(){
                if(el.value !== '') {
                    label.style.display = 'none';
                } else {
                    label.style.display = 'inline-block';
                }
            })
        }

        hideLabel(name, nameLabel);
        hideLabel(email, emailLabel);
        hideLabel(message, messageLabel);

        attach.addEventListener('change', function(){
            let fileName = attach.files[0].name;
            attachText.innerText = fileName;
        });

        submitBtn.addEventListener('click', (e) => {
            if(name.value === '' || email.value === '' || message.value === '' || check.checked === false) {
                e.preventDefault();
                errorLine.forEach(eL => {
                    eL.style.width = '100%';   
                });

                errorInfo.forEach(eI => {
                    eI.style.opacity = 1;   
                });

            };
        });
    }

    let ymc = document.querySelectorAll('.ymc-img');
    let atc = document.querySelectorAll('.atc-img');
    let boringbits = document.querySelectorAll('.boringbits-img');
    let mindOnly = document.querySelectorAll('.mo-img');
    let arieStudioSwimmwear = document.querySelectorAll('.ast-img');
    let alterVenturePArtners = document.querySelectorAll('.avp-img');
    let briefar = document.querySelectorAll('.briefar-img');

    ymc.forEach(ymcImg => {
        ymcImg.src = YMC;
        ymcImg.alt = 'Forwwward Studio Project YMC';
    });

    atc.forEach(atcImg => {
        atcImg.src = Attachment;
        atcImg.alt = 'Forwwward Studio Project Attachment';
    });

    boringbits.forEach(bts => {
        bts.src = Boringbits;
    });

    mindOnly.forEach(mo => {
        mo.src = MindOnly;
        mo.alt = 'Forwwward Studio Project MindOnly';
    });

    arieStudioSwimmwear.forEach(ast => {
        ast.src = ArieStudioSwimmwear;
        ast.alt = 'Forwwward Studio Project Arie Studio Swimmwear';
    });

    alterVenturePArtners.forEach(avp => {
        avp.src = AlterVenturePArtners;
        avp.alt = 'Forwwward Studio Project Alter Venture PArtners';
    });

    briefar.forEach(brf => {
        brf.src = Briefar;
        brf.alt = 'Forwwward Studio Project Briefar';
    });
}

export default component;