import React from 'react';
import style from '../style/modules/title.module.scss';

function Heading({ children, ...rest }) {
  return (
    <p className={style.title} {...rest}>
      {children}
    </p>
  );
}

export default Heading;
