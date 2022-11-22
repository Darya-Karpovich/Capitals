import { Image, Space, Typography } from 'antd';
import React from 'react';

type Props = {
  icon: string;
  text: string;
  temperature: number;
  feelsLike: number;
};
const WeatherCard = ({ icon, temperature, feelsLike, text }: Props) => {
  const roudedTemperature = Math.round(temperature);
  const roundedFeels = Math.round(feelsLike);
  return (
    <Space.Compact
      direction="vertical"
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid #1DA57A',
        padding: '5px 20px',
        marginRight: 5,
        marginTop: 5,
      }}
    >
      <Image src={icon} alt={text} preview={false} height={60} width={60} />
      <Typography.Text style={{ fontSize: '30px', fontWeight: '600' }}>
        {roudedTemperature}&deg;C
      </Typography.Text>
      <Typography.Text>Feels like: {roundedFeels}&deg;C</Typography.Text>
    </Space.Compact>
  );
};
export { WeatherCard };
