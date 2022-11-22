import { Layout, Space } from 'antd';
import React from 'react';

import { CardCarousel } from '../../components/CardCarousel/CardCarousel';
import { useThemeStore } from '../../store/themeStore';
import DayWawa from './../../assets/images/wawad2.jpg';
import NightWawa from './../../assets/images/wawan.jpg';

const HomePage = () => {
  const { theme } = useThemeStore();
  const Img = theme === 'light' ? DayWawa : NightWawa;

  return (
    <Layout
      style={{
        minHeight: '200vh',
      }}
    >
      <div
        style={{
          backgroundImage: `url(${Img})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '100vh',
          width: '100%',
          marginTop: '-64px',
          paddingTop: '64px',
        }}
      />
      <Space
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#9dc9bb',
        }}
      >
        <CardCarousel />
      </Space>
      <Layout.Footer style={{ backgroundColor: '#9dc9bb' }}>
        footer
      </Layout.Footer>
    </Layout>
  );
};

export { HomePage };
