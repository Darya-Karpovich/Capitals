import { Image, Space, Typography } from 'antd';
import React from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { getCapitalInfo } from '../../api/capital';
import Flag from '../../assets/images/Flag_of_Australia.svg';

type Props = {
  name: string;
  lat: number;
  lon: number;
};

const CapitalMarker = ({ name, lat, lon }: Props) => {
  const query = useQuery({
    queryKey: ['capital', name],
    queryFn: () => getCapitalInfo(name || ''),
    enabled: !!name,
  });
  if (!query.data) {
    // eslint-disable-next-line no-console
    console.log(name);
  }
  return (
    <>
      {query.data && (
        <Link to={`/capital/${name}`}>
          <Marker position={[lat, lon]} opacity={0}>
            <Tooltip opacity={1} interactive permanent direction="top">
              <Space>
                <Typography.Title level={4}>{name}</Typography.Title>
                <Image src={Flag} alt="flag" width={50} height={30} />
              </Space>
            </Tooltip>
          </Marker>
        </Link>
      )}
    </>
  );
};
export { CapitalMarker };
