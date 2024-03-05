function insertFooter() {

    function footer(x) {
        if (x.matches) {
            const footerSM = `
                    <footer class="footer footer--sm">
                        <div class="gradient__container">
                            <div class="gradient gradient-color-1"></div>
                            <div class="gradient gradient-color-2"></div>
                            <div class="gradient gradient-color-3"></div>
                        </div>
                        <div class="grid">
                            <div class="grid__item grid__item--1">
                                <div class="logo">
                                    <a class="logo--text" href="index.html">Forwwward.</a>
                                </div>
                        
                                <div class="general-inquires">
                                    <p class="text--secondary">General Inquires</p>
                                        <a class="email" href="mailto:#">hello@forwwward.studio</a>
                                    </div>
                                </div>
                            <div class="grid__item grid__item--2">
                                <p class="text--secondary">Location: <span>worldwide</span></p>
                            </div>
                            <div class="grid__item grid__item--3">
                                <p class="text--primary">Forwwward Studio © Copyright</p>
                            </div>
                        </div>
                    </footer>`;

            if (document.body.id !== 'contact') {
                document.body.insertAdjacentHTML('beforeend', footerSM);

                const footerLg = document.querySelector('.footer--lg');

                if (typeof (footerLg) != "undefined" && footerLg != null) {
                    footerLg.remove();
                }

            }

        } else {
            const footerLG = `
                        <footer class="footer footer--lg">
                            <div class="gradient__container">
                                <div class="gradient gradient-color-1"></div>
                                <div class="gradient gradient-color-2"></div>
                                <div class="gradient gradient-color-3"></div>
                            </div>
                            <div class="grid">
                                <div class="grid__item grid__item--1">
                                    <div class="logo">
                                        <a class="logo--text" href="index.html">Forwwward.</a>
                                    </div>

                                    <div class="general-inquires">
                                        <p class="text--secondary">General Inquires</p>
                                        <a class="email" href="mailto:#">hello@forwwward.studio</a>
                                    </div>
                                </div>
                                <div class="grid__item grid__item--2">
                                    
                                </div>
                                <div class="grid__item grid__item--3">
                                    <p class="footer--copy">Forwwward Studio © Copyright</p>
                                </div>
                                <div class="grid__item grid__item--4">
                                    <h6 class="heading heading--footer">About</h6>
                                    <ul>
                                        <li><a class="footer--link" href="studio.html">About</a></li>
                                        <li><a class="footer--link" href="index.html#culture">Culture</a></li>
                                        <li><a class="footer--link" href="contact.html">Contact</a></li>
                                    </ul>
                                </div>
                                <div class="grid__item grid__item--5">
                                    <h6 class="heading heading--footer">Resources</h6>
                                    <ul>
                                        <li><a class="footer--link" href="work.html">Work</a></li>
                                        <li><a class="footer--link" href="#">Process</a></li>
                                        <li><a class="footer--link" href="studio.html#whatWeDo">Services</a></li>
                                    </ul>
                                </div>
                                <div class="grid__item grid__item--6">
                                    <h6 class="heading heading--footer">Follow us</h6>
                                    <ul>
                                        <li><a class="footer--link" href="https://www.behance.net/">Behance</a></li>
                                        <li><a class="footer--link" href="https://dribbble.com/">Dribbble</a></li>
                                        <li><a class="footer--link" href="https://www.linkedin.com/">Instagram</a></li>
                                    </ul>
                                </div>
                                <div class="grid__item grid__item--7">
                                    <small class="footer--privacy">Cookie Policy</small>
                                </div>
                                <div class="grid__item grid__item--8">
                                    <small class="footer--privacy">Privacy Policy</small>
                                </div>
                                <div class="grid__item grid__item--9">
                                    <small class="footer--privacy">Location: <span>Worldwide</span></small>
                                </div>
                            </div>
                        </footer>`;

            if (document.body.id !== 'contact') {
                document.body.insertAdjacentHTML('beforeend', footerLG);

                const footerSm = document.querySelector('.footer--sm');

                if (typeof (footerSm) != "undefined" && footerSm != null) {
                    footerSm.remove();
                }
            }
        }
    };

    let x = window.matchMedia("(max-width: 767px)");
    footer(x);
    x.addListener(footer);

}

export default insertFooter;