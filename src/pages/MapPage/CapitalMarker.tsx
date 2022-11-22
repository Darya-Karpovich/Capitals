import { Image, Space, Typography } from 'antd';
import React from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { getCapitalInfo } from '../../api/capital';
import { useThemeStore } from '../../store/themeStore';
import './CapitalMarker.less';
type Props = {
  name: string;
  lat: number;
  lon: number;
};

const CapitalMarker = ({ name, lat, lon }: Props) => {
  const { theme } = useThemeStore();
  const query = useQuery({
    queryKey: ['capital', name],
    queryFn: () => getCapitalInfo(name || ''),
    enabled: !!name,
  });
  if (!query.data || !query.data.flaglocation) {
    return (
      <Link to={`/capital/${name}`}>
        <Marker position={[lat, lon]} opacity={0}>
          <Tooltip
            data-theme={theme}
            opacity={1}
            interactive
            permanent
            direction="top"
            className="tooltip"
          >
            <Space>
              <Typography.Title level={4}>{name}</Typography.Title>
            </Space>
          </Tooltip>
        </Marker>
      </Link>
    );
  }
  return (
    <>
      {query.data && (
        <Link to={`/capital/${name}`}>
          <Marker position={[lat, lon]} opacity={0}>
            <Tooltip
              data-theme={theme}
              opacity={1}
              interactive
              permanent
              direction="top"
              className="tooltip"
            >
              <Space>
                <Typography.Title level={4}>{name}</Typography.Title>
                <Image
                  src={`data:image/svg+xml;base64,${query.data.flaglocation.value}`}
                  alt="flag"
                  width={50}
                  height={30}
                />
              </Space>
            </Tooltip>
          </Marker>
        </Link>
      )}
    </>
  );
};
export { CapitalMarker };
