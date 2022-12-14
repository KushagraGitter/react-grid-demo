import React, { useState, useEffect } from 'react';
import getBudgetData from '../../service/services';
import Grid from '../Grid/Grid';
import Row from '../Grid/Row';
import ActionContainer from '../Action/ActionContainer';
import Button from '../Button/Button';
import './BudgetContainer.css';

const headerList = [
  'Name',
  'Description',
  'Type',
  'Period',
  'Start',
  'End',
  'Budget Status',
  'Actions',
];

const buttonStyle = {
  backgroundColor: '#71b2b2',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  marginBottom: '20px',
};

const rowContainerStyle = {
  listStyle: 'none',
  textAlign: 'left',
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: 'white',
  padding: '10px 0 10px 0',
  borderBottom: '1px solid #dfdcdc',
};

const rowItemStyle = {
  flexShrink: '1',
  flexBasis: '10%',
};

const gridContainerStyle = {
  boxShadow: '1px 1px 5px 1px #8888889e',
};

const BudgetContainer = () => {
  const [budgetData, setBudgetData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await getBudgetData();
      setBudgetData(data.data.budgetStatus);
    };
    getData();
  }, []);

  const getRowChildren = (data) => {
    const valueArray = Object.values(data);
    const rowChildren = valueArray.map((value) => {
      if (typeof value === 'object') {
        if (Array.isArray(value)) {
          return <ActionContainer actionData={value} />;
        }
      } else {
        return <li style={rowItemStyle}>{value}</li>;
      }
    });
    return rowChildren;
  };

  if (!budgetData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Button text="New Budget" style={buttonStyle} />
      <div className="budget-conatiner">
        <h3>Active</h3>
        <Grid style={gridContainerStyle} headerList={headerList}>
          {budgetData.map((rowData) => {
            return (
              <Row style={rowContainerStyle} rowData={rowData}>
                {getRowChildren(rowData)}
              </Row>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default BudgetContainer;
