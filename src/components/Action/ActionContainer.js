import React from 'react';
import ActionItem from './ActionItem';
import './ActionContainer.css';
const ActionContainer = ({ actionData }) => {
  return (
    <ul className="action-item-container">
      {actionData.map((action) => {
        console.log('action', action);
        return <ActionItem value={action} />;
      })}
    </ul>
  );
};

export default ActionContainer;
