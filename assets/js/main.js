/**
* Template Name: Nova
* Template URL: https://bootstrapmade.com/nova-bootstrap-business-template/
* Updated: Mar 17 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function (event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
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
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
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
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  let portfolionIsotope = document.querySelector('.portfolio-isotope');

  if (portfolionIsotope) {

    let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') ? portfolionIsotope.getAttribute('data-portfolio-filter') : '*';
    let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') ? portfolionIsotope.getAttribute('data-portfolio-layout') : 'masonry';
    let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') ? portfolionIsotope.getAttribute('data-portfolio-sort') : 'original-order';

    window.addEventListener('load', () => {
      let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
        itemSelector: '.portfolio-item',
        layoutMode: portfolioLayout,
        filter: portfolioFilter,
        sortBy: portfolioSort
      });

      let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');
      menuFilters.forEach(function (el) {
        el.addEventListener('click', function () {
          document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aos_init === 'function') {
            aos_init();
          }
        }, false);
      });

    });

  }

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});

// About Page
const imageTextContent = [
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto aperiam velit asperiores quod consequaturrepellendus id sunt iste eligendi, ipsa nisi neque esse harum aliquid laboriosam voluptas molestias ipsam!Placeat? Inventore quo voluptas nulla, excepturi in doloremque sit eaque necessitatibus deserunt eligendi labor 1111",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto aperiam velit asperiores quod consequaturrepellendus id sunt iste eligendi, ipsa nisi neque esse harum aliquid laboriosam voluptas molestias ipsam!Placeat? Inventore quo voluptas nulla, excepturi in doloremque sit eaque necessitatibus deserunt eligendi labor 2222",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto aperiam velit asperiores quod consequaturrepellendus id sunt iste eligendi, ipsa nisi neque esse harum aliquid laboriosam voluptas molestias ipsam!Placeat? Inventore quo voluptas nulla, excepturi in doloremque sit eaque necessitatibus deserunt eligendi labor33333",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto aperiam velit asperiores quod consequaturrepellendus id sunt iste eligendi, ipsa nisi neque esse harum aliquid laboriosam voluptas molestias ipsam!Placeat? Inventore quo voluptas nulla, excepturi in doloremque sit eaque necessitatibus deserunt eligendi labor44444444",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto aperiam velit asperiores quod consequaturrepellendus id sunt iste eligendi, ipsa nisi neque esse harum aliquid laboriosam voluptas molestias ipsam!Placeat? Inventore quo voluptas nulla, excepturi in doloremque sit eaque necessitatibus deserunt eligendi labor55555555",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto aperiam velit asperiores quod consequaturrepellendus id sunt iste eligendi, ipsa nisi neque esse harum aliquid laboriosam voluptas molestias ipsam!Placeat? Inventore quo voluptas nulla, excepturi in doloremque sit eaque necessitatibus deserunt eligendi labor66666666",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto aperiam velit asperiores quod consequaturrepellendus id sunt iste eligendi, ipsa nisi neque esse harum aliquid laboriosam voluptas molestias ipsam!Placeat? Inventore quo voluptas nulla, excepturi in doloremque sit eaque necessitatibus deserunt eligendi labor7777777",
];

document.querySelectorAll(".logos img").forEach((img, index) => {
  img.addEventListener("click", function () {
    const zoomedImage = document.getElementById("zoomedImage");
    const zoomedText = document.getElementById("zoomedText");
    const zoomContainer = document.getElementById("zoomContainer");
    const closeZoom = document.getElementById("closeZoom");

    zoomedImage.src = this.src;
    zoomedText.textContent = imageTextContent[index]; // Set the text content

    zoomContainer.style.display = "block";

    closeZoom.addEventListener("click", function (e) {
      zoomContainer.style.display = "none";
      e.stopPropagation();
    });

    zoomContainer.addEventListener("click", function () {
      zoomContainer.style.display = "none";
    });
  });
});

// # calander
$(document).ready(function () {
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  /*  className colors

    className: default(transparent), important(red), chill(pink), success(green), info(blue)

    */

  /* initialize the external events
    -----------------------------------------------------------------*/

  $("#external-events div.external-event").each(function () {
    // create an Event Object (https://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
    // it doesn't need to have a start or end
    var eventObject = {
      title: $.trim($(this).text()) // use the element's text as the event title
    };

    // store the Event Object in the DOM element so we can get to it later
    $(this).data("eventObject", eventObject);

    // make the event draggable using jQuery UI
    $(this).draggable({
      zIndex: 999,
      revert: true, // will cause the event to go back to its
      revertDuration: 0 //  original position after the drag
    });
  });

  /* initialize the calendar
    -----------------------------------------------------------------*/

  var calendar = $("#calendar").fullCalendar({
    header: {
      left: "title",
      center: "agendaDay,agendaWeek,month",
      right: "prev,next today"
    },
    editable: true,
    firstDay: 1, //  1(Monday) this can be changed to 0(Sunday) for the USA system
    selectable: true,
    defaultView: "month",

    axisFormat: "h:mm",
    columnFormat: {
      month: "ddd", // Mon
      week: "ddd d", // Mon 7
      day: "dddd M/d", // Monday 9/7
      agendaDay: "dddd d"
    },
    titleFormat: {
      month: "MMMM yyyy", // September 2009
      week: "MMMM yyyy", // September 2009
      day: "MMMM yyyy" // Tuesday, Sep 8, 2009
    },
    allDaySlot: false,
    selectHelper: true,
    select: function (start, end, allDay) {
      var title = prompt("Event Title:");
      if (title) {
        calendar.fullCalendar(
          "renderEvent",
          {
            title: title,
            start: start,
            end: end,
            allDay: allDay
          },
          true // make the event "stick"
        );
      }
      calendar.fullCalendar("unselect");
    },
    droppable: true, // this allows things to be dropped onto the calendar !!!
    drop: function (date, allDay) {
      // this function is called when something is dropped

      // retrieve the dropped element's stored Event Object
      var originalEventObject = $(this).data("eventObject");

      // we need to copy it, so that multiple events don't have a reference to the same object
      var copiedEventObject = $.extend({}, originalEventObject);

      // assign it the date that was reported
      copiedEventObject.start = date;
      copiedEventObject.allDay = allDay;

      // render the event on the calendar
      // the last `true` argument determines if the event "sticks" (https://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
      $("#calendar").fullCalendar("renderEvent", copiedEventObject, true);

      // is the "remove after drop" checkbox checked?
      if ($("#drop-remove").is(":checked")) {
        // if so, remove the element from the "Draggable Events" list
        $(this).remove();
      }
    },

    events: [
      {
        title: "All Day Event",
        start: new Date(y, m, 1)
      },
      {
        id: 999,
        title: "Repeating Event",
        start: new Date(y, m, d - 3, 16, 0),
        allDay: false,
        className: "info"
      },
      {
        id: 999,
        title: "Repeating Event",
        start: new Date(y, m, d + 4, 16, 0),
        allDay: false,
        className: "info"
      },
      {
        title: "Meeting",
        start: new Date(y, m, d, 10, 30),
        allDay: false,
        className: "important"
      },
      {
        title: "Lunch",
        start: new Date(y, m, d, 12, 0),
        end: new Date(y, m, d, 14, 0),
        allDay: false,
        className: "important"
      },
      {
        title: "Birthday Party",
        start: new Date(y, m, d + 1, 19, 0),
        end: new Date(y, m, d + 1, 22, 30),
        allDay: false
      },
      {
        title: "Click for Google",
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        url: "https://google.com/",
        className: "success"
      }
    ]
  });
});


