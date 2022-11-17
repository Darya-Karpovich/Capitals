import { Content } from 'antd/lib/layout/layout';
import React from 'react';

import { CardCarousel } from '../../components/CardCarpusel/cardCarousel';
import { useThemeStore } from '../../store/themeStore';
import DayWawa from './../../assets/images/wawad2.jpg';
import NightWawa from './../../assets/images/wawan.jpg';

const HomePage = () => {
  const { theme } = useThemeStore();
  const Img = theme === 'light' ? DayWawa : NightWawa;
  return (
    <Content
      style={{
        backgroundImage: `url(${Img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh',
        marginTop: '-64px',
        paddingTop: '64px',
      }}
    >
      <CardCarousel />
    </Content>
  );
};

export { HomePage };
