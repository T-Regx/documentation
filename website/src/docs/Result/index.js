import React from 'react';

import Code from '../Code/Code.tsx';
import style from './styles.module.css';

export default ({text, children}) => <div className={style.result}>
  <Code language={text ? 'text' : 'php'}>{children}</Code>
</div>;
