const hamburgerMenu = document.querySelector('.hamburger-menu');
const aside = document.querySelector('.aside-nav');
const menuIcon = document.querySelector('.menu-icon');

if (hamburgerMenu && aside && menuIcon) {

    hamburgerMenu.addEventListener('click', () => {

        aside.classList.toggle('show');

        const isOpen = aside.classList.contains('show');

        // Change hamburger icon
        menuIcon.classList.toggle('fa-bars', !isOpen);
        menuIcon.classList.toggle('fa-xmark', isOpen);

        // Update accessibility attributes
        hamburgerMenu.setAttribute('aria-expanded', isOpen);
        hamburgerMenu.setAttribute(
            'aria-label',
            isOpen ? 'Close navigation' : 'Open navigation'
        );

           document.body.style.overflow = isOpen ? 'hidden' : '';

    });

    

}
