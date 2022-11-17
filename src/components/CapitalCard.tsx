import { Space, Typography } from 'antd';
import React from 'react';

import Australia from '../assets/images/Flag_of_Australia.svg';
type Props = {
  name: string;
  country: string;
};
const CapitalCard = ({ name, country }: Props) => {
  return (
    <Space
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: '15px',
      }}
    >
      <Space.Compact
        direction="horizontal"
        style={{ borderBottom: '1px solid #000' }}
      >
        <Typography.Text style={{ fontSize: '40px', fontWeight: 500 }}>
          {name}
        </Typography.Text>
        <img
          src={Australia}
          alt="australia"
          height={50}
          style={{ marginLeft: '20px' }}
        />
      </Space.Compact>
      <Typography.Text style={{ fontSize: '20px' }}>{country}</Typography.Text>
    </Space>
  );
};

export { CapitalCard };
