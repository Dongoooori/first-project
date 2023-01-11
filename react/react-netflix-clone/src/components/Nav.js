import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const Navigate = useNavigate();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    Navigate(`/search?q=${e.target.value}`);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log('window.scrollY', window.scrollY);
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <img
        alt='NETFLIX logo'
        src='https://w.namu.la/s/984a3a524c3a76ef69967a3538f0b655d9e4a9b948314bd8d57f34a1502753104f1613f356c08d4352cdfad86bbea9cd56b2133ea5c9c7a57f1c065b1048cb5b114c25591ab9337ed0c8d5f2a4c2fded3cd72a1ac8ebac7a535eb6dce7529971'
        className='nav__logo'
        onClick={() => window.location.reload()}
      />
      <input
        value={searchValue}
        onChange={handleChange}
        className='nav__input'
        type='text'
        placeholder='영화를 검색해주세요.'
      />
      <img
        alt='User logged'
        src='https://occ-0-3187-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUoj4FT-0Rr558WbETiintMnmH2JKw4l_p4MdMoxqVx7YXwsvLvvnGUtx3HKZN_BJFH4EHpXn5KqSCBVxLrRz0n4gk64yyeAFw.png?r=229'
        className='nav__avatar'
      />
    </nav>
  );
}
