/*##########################   ALTHEADER TOGGLE  ########################### */
const alttoggle = document.querySelector('.alttoggle');
const altnav = document.querySelector('.altnav');

alttoggle.addEventListener('click', () => {
altnav.classList.toggle('open');
alttoggle.classList.toggle('bx bx-menu-open');
});

/*##########################   HEADER TOGGLE  ########################### */
const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  toggle.classList.toggle('bx bx-menu-open');
});
const header = document.querySelector('header');
const altheader = document.querySelector('.altheader');
console.log('Header element:', header);
header.classList.add('hidden');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        console.log('Scroll event triggered');
  const scrollTop = window.pageYOffset;
  const pageHeight = document.body.scrollHeight;
  const viewportHeight = window.innerHeight;
  const scrollPercentage = (scrollTop / (pageHeight - viewportHeight)) * 100;
  console.log('Scroll percentage:', scrollPercentage);
  if (window.pageYOffset > altheader.offsetHeight) {
    header.classList.add('hidden'); 
  } else {
    header.classList.remove('hidden'); 
  }
  if (scrollPercentage > 12) {
    header.classList.remove('hidden');
  } else {
    header.classList.add('hidden');
  }

        const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
        
        if (scrollDirection === 'down' && scrollTop > 200) {
            header.classList.add('scrolled');
        } else if (scrollDirection === 'up') {
            header.classList.remove('scrolled');
        } 
        

        lastScrollTop = scrollTop;

        // Detect section in view
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                navLinks.forEach(link => {
                    link.style.color = '';
                    if (link.getAttribute('href').substring(1) === section.getAttribute('id')) {
                        link.style.color = '#1a56a5';
                    }
                });
            }
        });

});

  
/*##########################   UNICOOKIE ANIMATION  ########################### */
document.addEventListener("DOMContentLoaded", function() {
    var row = document.querySelector(".row");
    row.classList.add("animate");
  });


/*##########################   CARD ANIMATION  ########################### */
  const cards = document.querySelectorAll('.animation');

  window.addEventListener('scroll', () => {
    cards.forEach((card, index) => {
      const cardTop = card.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;
      if (scrollPosition > cardTop && !card.classList.contains('active')) {
        setTimeout(() => {
          card.classList.add('active');
        }, index * 150); // add a delay of 200ms for each subsequent card
      }
    });
  });


  /*##########################   IMAGES ANIMATION  ########################### */
  const images = document.querySelectorAll('.animate');
      
      
  function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight &&
      rect.bottom >= 0
    );
  }

  window.addEventListener('scroll', () => {
      let lastScrollTop = 0;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDirection = scrollTop > lastScrollTop? 'down' : 'up';
    lastScrollTop = scrollTop;

    images.forEach((image) => {
      if (isInView(image) && scrollDirection === 'down') {
        image.classList.add('in-view');
      }
    });
  });