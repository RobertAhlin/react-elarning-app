// components/Navbar.js

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
            <Link href="/">Hem</Link> | <Link href="/pages/page1">Introduktion till säkerhetsskydd</Link> | <Link href="/pages/page2">Personalsäkerhet</Link> | <Link href="/pages/page3">Säkerhetsskyddsplanering</Link> | <Link href="/pages/contact">Kontakt</Link>
    </nav>
  );
};

export default Navbar;
