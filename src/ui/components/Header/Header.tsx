import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../../app/context/CartContext';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import './Header.css';

const Header: React.FC = () => {
  const { count } = useCart();

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          Mobile Store
        </Link>
        <div className="cart-info">Cart: {count}</div>
      </div>
      <Breadcrumbs />
    </header>
  );
};

export default Header;
