import React from 'react';
import './GridHeader.css';

export default function GridHeader({ headerList }) {
  return (
    <ul className="grid-header">
      {headerList.map((listItem) => {
        return <li>{listItem}</li>;
      })}
    </ul>
  );
}
