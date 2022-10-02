import React from 'react';
import Row from './Row';
import GridHeader from './GridHeader';

const Grid = ({ style, headerList, children }) => {
  return (
    <div style={style}>
      <GridHeader headerList={headerList} />
      {children}
    </div>
  );
};

export default Grid;
