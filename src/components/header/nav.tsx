import React from 'react';

const Nav = () => {
  return (
    <ul>
      {[1, 1, 1, 1].map(() =>
        <li>홈</li>
      )}
    </ul>
  );
};

export default Nav;