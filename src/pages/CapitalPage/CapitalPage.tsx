import { Button, Layout, Space, Typography } from 'antd';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { getCapitalInfo, getCapitalInfoByCapital } from '../../api/capital';
import { useIpLookup, useLocation } from '../../api/weather';
import { CapitalCard } from '../../components/CapitalCard';
import { CommentCard } from '../../components/Comment/CommentCard';
import { Converter } from '../../components/Converter/Converter';
import { ReviewForm } from '../../components/ReviewForm/ReviewForm';
import { WeatherCard } from '../../components/WeatherCard';
import { useAuthStore } from '../../store/authStore';
import { useThemeStore } from '../../store/themeStore';
import './CapitalPage.less';

const CapitalPage = () => {
  const { capital } = useParams();
  const { theme } = useThemeStore();
  const { token } = useAuthStore();
  const [modal, setModal] = useState(false);
  const [converter, setConverter] = useState(false);

  const query = useQuery({
    queryKey: ['capital', capital],
    queryFn: () => getCapitalInfo(capital || ''),
    enabled: !!capital,
  });
  const { data: ip } = useIpLookup();
  const myCountry = useQuery({
    queryKey: ['capitalCountry', ip?.country_name],
    queryFn: () => getCapitalInfoByCapital(ip?.country_name || ''),
    enabled: !!ip?.country_name,
  });
  const coordinates = query.data?.coordenates;
  const { data } = useLocation(
    coordinates?.substring(1, coordinates.length - 1).replace(/\s/g, '') || '',
  );
  const onHandleClick = () => {
    setConverter(true);
  };
  const renderContent = () => {
    if (token) {
      return query.data?.commentList?.map((r, idx) => (
        <CommentCard key={idx} review={r} token={token || ''} />
      ));
    }

    return (
      <Space align="center" style={{ height: '100%' }}>
        <Typography.Paragraph
          className="login-text"
          style={{
            backgroundColor:
              theme === 'light' ? 'rgba(250,250,250, 0.5)' : 'rgba(0,0,0,0.5)',
          }}
        >
          You need to log in to see reviews
        </Typography.Paragraph>
      </Space>
    );
  };

  return (
    <Layout data-theme={theme} className="layout">
      <Layout.Content className="content">
        {query.data && (
          <>
            {converter && myCountry.data?.currency && (
              <Converter
                toCurr={myCountry.data?.currency}
                fromCurr={query.data.currency}
              />
            )}
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <CapitalCard
                name={query.data?.name}
                country={query.data?.country}
                image={query.data.flaglocation.value}
              />
              <Button onClick={onHandleClick}>Conver</Button>
              {data && (
                <WeatherCard
                  icon={data.current.condition.icon}
                  text={data.current.condition.text}
                  temperature={data.current.temp_c}
                  feelsLike={data.current.feelslike_c}
                />
              )}
            </div>
            {token && (
              <Button
                data-theme={theme}
                type="primary"
                onClick={() => setModal(true)}
              >
                Add review
              </Button>
            )}
            <Typography.Paragraph
              ellipsis={{
                rows: 10,
                expandable: true,
                symbol: 'more',
              }}
              style={{
                width: '700px',
                marginLeft: '50px',
                background: 'rgba(250,250,250,0.5)',
                padding: '30px',
              }}
            >
              {query.data?.description}
            </Typography.Paragraph>
          </>
        )}
        {modal && (
          <ReviewForm
            capitalName={capital || ''}
            closeModal={() => setModal(false)}
          />
        )}
      </Layout.Content>
      <Layout.Sider data-theme={theme} width={550} className="sider">
        {renderContent()}
      </Layout.Sider>
    </Layout>
  );
};

export { CapitalPage };
