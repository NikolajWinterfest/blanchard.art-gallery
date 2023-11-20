document.addEventListener('DOMContentLoaded', () => {
    // Swiper for HERO
    const swiperHero = new Swiper('.swiper', {
        slidesPerView: 1,
        loop: true,
        simulateTouch: false,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    })

    // Burger for FIRST HEADER
    function setBurger(params) {
        const btn = document.querySelector(`.${params.btnClass}`)
        const menu = document.querySelector(`.${params.menuClass}`)

        menu.addEventListener('animationend', function () {
            if (this.classList.contains(params.hiddenClass)) {
                this.classList.remove(params.activeClass)
                this.classList.remove(params.hiddenClass)
            }
        })
        btn.addEventListener('click', function () {
            this.classList.toggle(params.activeClass)

            if (!menu.classList.contains(params.activeClass) && !menu.classList.contains(params.hiddenClass)) {
                let paddingOffset = `${window.innerWidth - document.body.offsetWidth}px`
                menu.classList.add(params.activeClass)
                document.body.style.cssText = `overflow: hidden; padding-right: ${paddingOffset}`
            } else {
                menu.classList.add(params.hiddenClass)
                document.body.removeAttribute('style')
            }
        })

        let burgerLinks = document.querySelectorAll('.nav__item-link')

        function toggleMenu() {
            btn.classList.remove('is-opened')
            menu.classList.remove('is-opened')
            document.body.style.cssText = `overflow: visible;`
        }

        burgerLinks.forEach((link) => {
            link.addEventListener('click', toggleMenu)
        })
    }

    setBurger({
        btnClass: 'header__burger', // класс бургера
        menuClass: 'header__nav', // класс меню
        activeClass: 'is-opened', // класс открытого состояния
        hiddenClass: 'is-closed', // класс закрывающегося состояния (удаляется сразу после закрытия)
    })

    // Simplebar for SECOND HEADER
    document.querySelectorAll('.dropdown__simplebar').forEach((dropdown) => {
        new SimpleBar(dropdown, {
            /* чтобы изначально ползунок был виден */
            autoHide: false,
            /* с помощью этого значения вы можете управлять высотой ползунка*/
            scrollbarMaxSize: 25,
        })
    })
    const btns = document.querySelectorAll('.btn-menu')
    const dropdowns = document.querySelectorAll('.dropdown')
    const activeClassdropdowns = 'dropdown--active'
    const activeClassbtns = 'btn-menu--active'
    btns.forEach((item) => {
        item.addEventListener('click', function () {
            let DropThis = this.parentElement.querySelector('.dropdown')
            dropdowns.forEach((el) => {
                if (el != DropThis) {
                    el.classList.remove(activeClassdropdowns)
                }
            })
            btns.forEach((el) => {
                if (el != this) {
                    el.classList.remove(activeClassbtns)
                }
            })
            DropThis.classList.toggle(activeClassdropdowns)
            this.classList.toggle(activeClassbtns)
        })
    })

    // Search input for HEADER
    document.addEventListener('click', function (e) {
        const elementInteractive = e.target
        if (elementInteractive.closest('.mobilesearch__openbtn')) {
            document.querySelector('.mobilesearch__uncapped').classList.add('mobilesearch__uncapped--active')
        }
    })
    document.addEventListener('click', function (e) {
        const elementInteractive = e.target
        if (elementInteractive.closest('.form-mobilesearch__closebtn')) {
            document.querySelector('.mobilesearch__uncapped').classList.remove('mobilesearch__uncapped--active')
        }
    })

    document.addEventListener('click', function (e) {
        const elementInteractive = e.target
        if (elementInteractive.closest('.mobilesearch__openbtn')) {
            document.querySelector('.header__burger').classList.add('header__burger--hidden')
        }
    })

    document.addEventListener('click', function (e) {
        const elementInteractive = e.target
        if (elementInteractive.closest('.form-mobilesearch__closebtn')) {
            document.querySelector('.header__burger').classList.remove('header__burger--hidden')
        }
    })

    // Choices for SELECT in GALLERY
    const element = document.querySelector('.gallery__select')
    const choices = new Choices(element, {
        itemSelectText: '',
        searchEnabled: false,
    })
    document.querySelector('.choices__item--selectable').textContent = 'Живопись'

    // Swiper for GALLERY
    var swiperGallery = new Swiper('.gallery__swiper', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
        spaceBetween: 50,
        pagination: {
            el: '.gallery__swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.gallery__swiper-btn-next',
            prevEl: '.gallery__swiper-btn-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 38,
            },
            576: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 38,
            },
            1025: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 38,
            },
            1920: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50,
            },
        },
    })

    // Accordion for CATALOG
    let acc = new Accordion('.accordion-list', {
        duration: 700,
        elementClass: 'accordion-item',
        triggerClass: 'accordion-top',
        panelClass: 'accordion-bottom',
        showMultiple: false,
        openOnInit: [0],
        collapse: true,
    })

    // Tabs for CATALOG
    document.querySelectorAll('.names-catalog__artists-link').forEach(function (tabsBtn) {
        tabsBtn.addEventListener('click', function (e) {
            const path = e.currentTarget.dataset.path
            document.querySelectorAll('.names-catalog__artists-link').forEach(function (btn) {
                btn.classList.remove('names-catalog__artists-link--active')
            })
            e.currentTarget.classList.add('names-catalog__artists-link--active')
            document.querySelectorAll('.catalog__block-left').forEach(function (tabContent) {
                tabContent.classList.remove('catalog__block-left--active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('catalog__block-left--active')
        })
    })

    // Swiper for DOINGS
    var swiperDoings = new Swiper('.doings__swiper', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 52,
        navigation: {
            nextEl: '.doings__swiper-btn-next',
            prevEl: '.doings__swiper-btn-prev',
        },
        pagination: {
            el: '.swiper-pagination-doings',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 27,
            },
            576: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 27,
            },
            1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 27,
            },
            1920: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50,
            },
        },
    })

    // Swiper for PROJECTS
    var swiperProjects = new Swiper('.projects__swiper', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
        navigation: {
            nextEl: '.projects__swiper-btn-next',
            prevEl: '.projects__swiper-btn-prev',
        },
        pagination: {
            el: '.swiper-pagination-projects',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 30,
            },
            1025: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50,
            },

            1920: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50,
            },
        },
    })

    // Tooltip for Projects
    tippy('.projects__descr-tippy', {
        trigger: 'click',
    })

    // Inputmask for FEEDBACK
    const validation = new JustValidate('.form')
    validation
        .addField('.form__input-name', [
            {
                rule: 'required',
                errorMessage: 'Введите имя',
            },
            {
                rule: 'customRegexp',
                value: '^[A-zA-яЁё]+$',
                errorMessage: 'Вводите только буквы',
            },
            {
                rule: 'minLength',
                value: 2,
                errorMessage: 'Минимум 2 символа',
            },
            {
                rule: 'maxLength',
                value: 30,
                errorMessage: 'Максимум 30 символов',
            },
        ])
        .addField('.form__input-tel', [
            {
                rule: 'required',
                errorMessage: 'Введите номер телефона',
            },
            {
                rule: 'number',
                errorMessage: 'Вводите только цифры',
            },
            {
                rule: 'minLength',
                value: 11,
                errorMessage: 'Минимум 11 символов',
            },
        ])

    // Smooth Scroll for Link's
    document.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault()

            let targetLink = link.getAttribute('href')

            if (link.classList.contains('footer__logo')) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                })
            } else if (targetLink && !targetLink.includes('mailto:')) {
                document.querySelector(targetLink).scrollIntoView({
                    behavior: 'smooth',
                })
            } else {
                window.location.href = targetLink
            }
        })
    })
})
