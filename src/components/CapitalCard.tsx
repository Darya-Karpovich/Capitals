import { Space, Typography } from 'antd';
import React from 'react';

type Props = {
  name: string;
  country: string;
  image: string;
};
const CapitalCard = ({ name, country, image }: Props) => {
  return (
    <Space
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '15px',
        backgroundColor: 'rgba(29, 165, 122, 0.5)',
        borderBottomRightRadius: '30px',
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
          src={`data:image/svg+xml;base64,${image}`}
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
