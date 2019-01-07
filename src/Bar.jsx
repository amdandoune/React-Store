/* Bar.jsx */
import React from 'react';
import { Toolbar } from 'react-md';

import Nav from './common/Nav.jsx';
import KebabMenu from './common/KebabMenu.jsx';

const Bar = () => (
  <div className="toolbars__examples">
  	<Toolbar 
      themed 
      nav={<Nav />}
      title="Themed"
      actions={<KebabMenu id="toolbar-themed-kebab-menu" />}
    />
  </div>

);
export default Bar;