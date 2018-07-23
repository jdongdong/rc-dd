import React from 'react';
// import { Tooltip } from 'antd';
import Tooltip from 'antd/lib/tooltip';
import 'antd/lib/tooltip/style/css';

const Ellipsis = ({ max, title, alwaysShow }) => {
  if (!title) {
    return <span />;
  }
  if (alwaysShow || !(max > 0)) {
    return (
      <Tooltip title={title}>
        {title}
      </Tooltip>
    );
  }
  if (title.length <= max) {
    return (
      <span>{title}</span>
    );
  }
  return (
    <Tooltip title={title} placement="right">
      {`${title.substring(0, max)}...`}
    </Tooltip>
  );
};

export default Ellipsis;
