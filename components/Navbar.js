// components/Navbar.js

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
            <Link href="/">Hem</Link> | <Link href="/page1">Introduktion till säkerhetsskydd</Link> | <Link href="/page2">Personalsäkerhet</Link> | <Link href="/page3">Säkerhetsskyddsplanering</Link> | <Link href="/contact">Kontakt</Link>
    </nav>
  );
};

export default Navbar;
