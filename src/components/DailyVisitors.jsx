import React, { useState } from 'react';
import CustomSelect from './reusable/CustomSelect';
import MyChart from './MyChart';

function DailyVisitors() {
  const [monthValue, setMonthValue] = useState('January');
  const [yearValue, setYearValue] = useState('2023');

  const data_1 = [
    {
      id: 'June',
      name: 'June',
    },
    {
      id: 'July',
      name: 'July',
    },
    {
      id: 'Aug',
      name: 'Aug',
    },
    {
      id: 'Sept',
      name: 'Sept',
    },
  ];

  const data_2 = [
    {
      id: '2023',
      name: '2023',
    },
    {
      id: '2020',
      name: '2020',
    },
    {
      id: '2021',
      name: '2021',
    },
    {
      id: '2022',
      name: '2022',
    },
  ];

  const setMonth = (value) => {
    setMonthValue(value);
  };

  const setYear = (value) => {
    setYearValue(value);
  };

  return (
    <div className="daily-visitors">
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1em',
          borderBottom: '1px solid #ddddf0',
        }}
      >
        <p
          style={{
            filter: 'drop-shadow(0 0 0.25rem #eeeae9)',
            fontSize: '16px',
            fontWeight: '600',
            color: '#535457',
          }}
        >
          Daily Visitors
        </p>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <CustomSelect
            style={{ paddingRight: '0' }}
            data={data_1}
            setMonth={setMonth}
          />
          <CustomSelect
            style={{ paddingLeft: '0' }}
            data={data_2}
            setYear={setYear}
          />
        </div>
      </header>

      <MyChart month={monthValue} year={yearValue} />
    </div>
  );
}

export default DailyVisitors;
