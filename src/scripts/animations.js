import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  
  // ==================== HERO ====================
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroCta = document.querySelector('.hero-cta');
  
  if (heroTitle) {
    gsap.from(heroTitle, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: 'power3.out'
    });
  }
  
  if (heroSubtitle) {
    gsap.from(heroSubtitle, {
      duration: 1,
      y: 50,
      opacity: 0,
      delay: 0.3,
      ease: 'power3.out'
    });
  }
  
  if (heroCta) {
    gsap.from(heroCta, {
      duration: 0.8,
      scale: 0,
      opacity: 0,
      delay: 0.6,
      ease: 'back.out(1.7)'
    });
  }
  
  // ==================== SERVICE CARDS ====================
  const serviceCards = document.querySelectorAll('.service-card');
  if (serviceCards.length > 0) {
    gsap.from(serviceCards, {
      scrollTrigger: {
        trigger: '#services',
        start: 'top 80%',
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power2.out'
    });
  }
  
  // ==================== ABOUT SECTION ====================
  const aboutTitle = document.querySelector('#about h2');
  const aboutGrid = document.querySelectorAll('.about-grid > div');
  
  if (aboutTitle) {
    gsap.from(aboutTitle, {
      scrollTrigger: {
        trigger: '#about',
        start: 'top 80%'
      },
      duration: 0.6,
      x: -50,
      opacity: 0
    });
  }
  
  if (aboutGrid.length > 0) {
    gsap.from(aboutGrid, {
      scrollTrigger: {
        trigger: '#about',
        start: 'top 70%'
      },
      duration: 0.6,
      scale: 0.9,
      opacity: 0,
      stagger: 0.2
    });
  }
  
  // ==================== TEAM CARDS ====================
  const teamCards = document.querySelectorAll('.team-card');
  if (teamCards.length > 0) {
    gsap.from(teamCards, {
      scrollTrigger: {
        trigger: '#team',
        start: 'top 80%'
      },
      duration: 0.6,
      rotationY: 90,
      opacity: 0,
      stagger: 0.2,
      transformOrigin: 'center center'
    });
  }
  
  // ==================== LOCATION ====================
  const locationInfo = document.querySelector('.location-info');
  const locationMap = document.querySelector('.location-map');
  
  if (locationInfo) {
    gsap.from(locationInfo, {
      scrollTrigger: {
        trigger: '#location',
        start: 'top 80%'
      },
      duration: 0.8,
      x: -100,
      opacity: 0
    });
  }
  
  if (locationMap) {
    gsap.from(locationMap, {
      scrollTrigger: {
        trigger: '#location',
        start: 'top 80%'
      },
      duration: 0.8,
      x: 100,
      opacity: 0
    });
  }
  
  // ==================== CONTACT FORM ====================
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    gsap.from(contactForm, {
      scrollTrigger: {
        trigger: '#contact',
        start: 'top 80%'
      },
      duration: 0.8,
      y: 50,
      opacity: 0
    });
  }
  
  // ==================== WHATSAPP BUTTON ====================
  const whatsappFloat = document.querySelector('.whatsapp-float');
  if (whatsappFloat) {
    gsap.from(whatsappFloat, {
      duration: 0.6,
      scale: 0,
      opacity: 0,
      delay: 1,
      ease: 'back.out(2)'
    });
  }
  
});