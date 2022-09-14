/**
* Template Name: TheEvent - v4.8.0
* Template URL: https://bootstrapmade.com/theevent-conference-event-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
const hero = new Vue({
  el: "#hero",
  data: {
    hero: {
      h1: "Informatics <span>Festival</span><br>2022",
      p:'"<i>Art of Technology</i>"',
    }, 
  }
});

const about=new Vue({
  el: "#about",
  data: {
    about: {
      about:"<h2>Tentang IFEST</h2>" +
            "<p>" +
              "Informatics Festival (IFEST) merupakan serangkaian acara pada Dies Natalis " +  
              "Jurusan Teknik Informatika. Acara yang akan diadakan seperti " +
              "Lomba Landing Page, Lomba Fotografi, Lomba Mobile Legends, " +
              "Santunan Sahabat Yatim & Dhuafa, " +
              "Pelatihan Desain Grafis serta Pelatihan Pemrograman." +
            "</p>",
      loc:"<h3>Dimana ?</h3>" +
          "<p>Politeknik Negeri Cilacap</p>",
      date:"<h3>Kapan ?</h3>"+
            "<p>20 Juni 2022 - 16 Juli 2022</p>"
    }
  }
});

const speakers=new Vue({
  el: "#speakers",
  data: {
    teacher:{
      urlone:"assets/img/gallery/pelatihan-4.JPG",
      urltwo:"assets/img/gallery/pelatihan-10.jpg",
      nameOne:"Ipo Novianto, S.Kom.",
      deskOne:"Narsum Pelatihan Pemrograman",
      nameTwo:"Abdul Rohman S, S.T., M.Kom.",
      deskTwo:"Narsum Pelatihan Desain Grafis",
    },
    guest:{
      urlguest:"assets/img/gallery/canteen-rasta.png"
    }
  }
});
const venue = new Vue({
  el: "#venue",
  data: {
    gmaps: {
      maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.672701899739!2d109.01706568328419!3d-7.717629568033483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e651293a2007061%3A0xf2805342d2da3715!2sPoliteknik%20Negeri%20Cilacap!5e0!3m2!1sid!2sid!4v1661764275455!5m2!1sid!2sid",
      descript:"<h3>Gedung D,<br/>Politeknik Negeri Cilacap</h3>" +        
                "<p>Jl. Dr. Soetomo No.1, Karangcengis, Sidakaya, " +
                "Kec. Cilacap Sel., Kabupaten Cilacap, " +
                "Jawa Tengah 53212</p>",
    },
    img:{
      imgOne:"assets/img/gallery/puncak-15.JPG",
      imgTwo:"assets/img/gallery/puncak-13.JPG",
      imgThree:"assets/img/gallery/puncak-14.JPG",
      imgFour:"assets/img/gallery/puncak-4.JPG",
      imgFive:"assets/img/gallery/puncak-7.JPG",
      imgSix:"assets/img/gallery/puncak-16.JPG",
      imgSeven:"assets/img/gallery/puncak-8.JPG",
      imgEight:"assets/img/gallery/puncak-9.JPG",
      imgNine:"assets/img/gallery/puncak-3.JPG",
      imgTen:"assets/img/gallery/puncak-5.JPG",
      imgEleven:"assets/img/gallery/puncak-11.JPG",
      imgTwelve:"assets/img/gallery/puncak-12.JPG",
    }
  }
});
const supporters = new Vue({
  el: "#supporters",
  data: {
    img:{
      imgOne:"assets/img/supporters/al-azhar-clp-logo.png",
      imgTwo:"assets/img/supporters/GSC.png",
      imgThree:"assets/img/supporters/babeh-clp-logo.JPG",
      imgFour:"assets/img/supporters/OPPO_logo.svg",
      imgFive:"assets/img/supporters/telkomsel-logo.png",
    }
  }
});
const footer = new Vue({
  el: "#footer",
  data: {
    img:{
      imgOne:"assets/img/default_image_HMTI_PNC_1.png",
      imgTwo:"assets/img/logoPNC.png",
    }
  }
});
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }
  /**
   * all contact button
   */
  let groupContact = select('.group-contact')
  if (groupContact) {
    const toggleGroupContact = () => {
      if (window.scrollY > 100) {
        groupContact.classList.add('active')
      } else {
        groupContact.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleGroupContact)
    onscroll(document, toggleGroupContact)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Gallery Slider
   */
  new Swiper('.gallery-slider', {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });

  /**
   * Initiate gallery lightbox 
   */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });

  /**
   * Buy tickets select the ticket type on click
   */
  on('show.bs.modal', '#buy-ticket-modal', function(event) {
    select('#buy-ticket-modal #ticket-type').value = event.relatedTarget.getAttribute('data-ticket-type')
  })

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()