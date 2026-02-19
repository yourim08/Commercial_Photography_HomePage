import React from 'react';

const Navbar = ({ onScroll, isVisible }) => {
  const menus = [
    { name: '동아리 소개', id: 'about' },
    { name: '부원 소개', id: 'members' },
    { name: '촬영 장비 소개', id: 'equipment' },
    { name: '사진 갤러리', id: 'gallery' },
    { name: 'FAQ', id: 'faq' }
  ];

  return (
    /* isVisible 값에 따라 클래스를 추가합니다. */
    <nav className={`navBar ${isVisible ? 'visible' : 'hidden'}`}>
      <div 
        className="mainLogo" 
        onClick={() => onScroll('home')} 
        style={{ cursor: 'pointer' }}
      >
        COMMERCIAL PHOTOGRAPHY
      </div>
      <ul className="navList">
        {menus.map((menu) => (
          <li key={menu.id} onClick={() => onScroll(menu.id)}>
            {menu.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;