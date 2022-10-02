import React from 'react';
import ActionItem from './ActionItem';
import './ActionContainer.css';
const ActionContainer = ({ actionData }) => {
  return (
    <ul className="action-item-container">
      {actionData.map((action) => {
        console.log('action', action);
        return (
          <li className="action-item-list">
            <ActionItem value={action} />
            <a href="">Edit</a>
            <a href="">delete</a>
          </li>
        );
      })}
    </ul>
  );
};

export default ActionContainer;
