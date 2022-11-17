import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar, Progress, Space, Typography } from 'antd';
import React from 'react';

import { useAuthStore } from '../../../store/authStore';
import { useThemeStore } from '../../../store/themeStore';

const UserCard = ({ color }: { color: string }) => {
  const { theme } = useThemeStore();
  const { user } = useAuthStore();
  return (
    <Space
      style={{
        height: '500px',
        backgroundColor: color,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 50px',
        boxShadow: '5px 5px 20px #000',
      }}
    >
      <Space
        style={{
          minWidth: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderBottom: theme === 'light' ? '2px solid #000' : '2px solid #fff',
        }}
      >
        <Avatar size={150} icon={<AntDesignOutlined />} />
        <Typography.Text style={{ fontSize: '40px', fontWeight: 700 }}>
          {user?.username}
        </Typography.Text>
        <Typography.Text style={{ fontSize: '20px', color: '#77b0f2' }}>
          {user?.email}
        </Typography.Text>
      </Space>
      <Typography.Text style={{ fontSize: '30px' }}>Statistics</Typography.Text>
      <Space style={{ display: 'flex', flexDirection: 'column' }}>
        <Space>
          <Progress
            type="circle"
            width={70}
            percent={40}
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            format={percent => `${percent} / 195`}
          />
          <Typography.Text style={{ fontSize: '22px' }}>
            You visited 40 capitals
          </Typography.Text>
        </Space>
        <Space>
          <Typography.Text>23</Typography.Text>
          <Typography.Text style={{ fontSize: '22px' }}>
            You reviews 23 capitals
          </Typography.Text>
        </Space>
      </Space>
    </Space>
  );
};
export { UserCard };
