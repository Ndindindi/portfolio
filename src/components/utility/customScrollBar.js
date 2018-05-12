import React from 'react';
import SmoothScrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import Scrollbar from 'react-smooth-scrollbar';

SmoothScrollbar.use(OverscrollPlugin);

export default ({ style, children, className }) => (
  <Scrollbar className={className} style={style}>
    {children}
  </Scrollbar>
);
