import { Button, Space } from 'antd';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { getCapitalInfo } from '../../api/capital';
import { CapitalCard } from '../../components/CapitalCard';
import { ReviewForm } from '../../components/ReviewForm/ReviewForm';
import { useThemeStore } from '../../store/themeStore';

const CapitalPage = () => {
  const { capital } = useParams();
  const { theme } = useThemeStore();
  const [modal, setModal] = useState(false);
  const query = useQuery({
    queryKey: ['capital', capital],
    queryFn: () => getCapitalInfo(capital || ''),
    enabled: !!capital,
  });

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#85d4bb',
        justifyContent: 'space-around',
      }}
    >
      <Space
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          alignItems: 'flex-start',
          marginTop: '160px',
        }}
      >
        {query.data && (
          <>
            <CapitalCard
              name={query.data?.name}
              country={query.data?.country}
            />
            <Button
              data-theme={theme}
              type="primary"
              onClick={() => setModal(true)}
            >
              Add review
            </Button>
          </>
        )}
        {modal && (
          <ReviewForm
            capitalName={capital || ''}
            closeModal={() => setModal(false)}
          />
        )}
        {/* <Typography.Paragraph
              ellipsis={{
                rows: 10,
                expandable: true,
                symbol: 'more',
              }}
              style={{
                width: '700px',
                marginLeft: '50px',
                background: 'rgba(250,250,250,0.5',
                padding: '30px',
              }}
            >
              {query.data?.description}
            </Typography.Paragraph>
          </> */}
      </Space>
    </div>
  );
};

export { CapitalPage };
