import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '../components/Navbar';
import HeroContent from '../components/HeroContent';
import SliderArrows from '../components/SliderArrows';
import Equipment from './Equipment';
import Members from './Team';
import Gallery from './Gallery';
import FAQ from './FAQ';
import ScrollUp from './ScrollUp';

import Dots from '../components/Dots';
import './Main.css';

import bg1 from '../assets/BackgroundImg/background1.jpg';
import bg2 from '../assets/BackgroundImg/background2.jpg';
import bg3 from '../assets/BackgroundImg/background3.jpg';
import bg4 from '../assets/BackgroundImg/background4.jpg';

const Main = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const images = [bg1, bg2, bg3, bg4];

  // 내비게이션 바 표시 상태 관리
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIdx, nextSlide]);

  // 스크롤 방향 감지 로직
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        // 페이지 최상단일 때
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        // 아래로 스크롤 중일 때 숨김
        setShowNavbar(false);
      } else {
        // 위로 스크롤 중일 때 나타남
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    if (id === 'about') {
      scrollToTop();
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mainContainer">
      {/* showNavbar 상태를 넘겨줌 (Navbar.js 내부에서 클래스 처리가 필요함) */}
      <Navbar onScroll={scrollToSection} isVisible={showNavbar} />

      <div className="heroWrapper" id="home">
        {images.map((img, index) => (
          <div
            key={index}
            className={`bgSlide ${index === currentIdx ? 'active' : ''}`}
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${img})` }}
          />
        ))}

        <SliderArrows onPrev={prevSlide} onNext={nextSlide} />
        <HeroContent />
        <Dots length={images.length} currentIdx={currentIdx} setIdx={setCurrentIdx} />
      </div>

      <section id="about">
      </section>
      <section id="members">
        <Members />
      </section>
      <section id="equipment">
        <Equipment />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="scroll-up">
        <ScrollUp onScroll={() => scrollToSection('about')} />
      </section>
    </div>
  );
};

export default Main;