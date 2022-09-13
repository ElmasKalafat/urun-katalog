import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Urun Katalog</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Sepetim{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin">Giris Yap</a>
      </div>
    </header>
  );
}