let menu = document.querySelector('#menu-btn');
        let header = document.querySelector('header');
    
        menu.onclick = function () {
            menu.classList.toggle('fa-times');
            header.classList.toggle('active');
        };
    
        window.onscroll = function () {
            if (window.scrollY > 0) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
    
            menu.classList.remove('fa-times');
            header.classList.remove('active');
        };
    
        document.getElementById('bryanImage').addEventListener('click', function () {
            this.classList.toggle('clicked');
        });
    
        const menuBtn = document.getElementById('menu-btn');
        const nav = document.querySelector('nav');

        menuBtn.addEventListener('click', function () {
            nav.classList.toggle('show');
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        