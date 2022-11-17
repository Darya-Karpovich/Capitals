import { Layout, Menu, MenuProps } from 'antd';
import React from 'react';

import { useAuthStore } from '../../store/authStore';
import { useThemeStore } from '../../store/themeStore';
import { UpdateProfileCard } from './components/UpdateProfileCard';
import { UserCard } from './components/UserCard';
import DarkBG from './darkBG.svg';
import LightBG from './lightBG.svg';

const items2: MenuProps['items'] = ['Info', 'Capitals', 'Reviews'].map(key => ({
  key,
  label: `${key}`,
}));

const ProfilePage = () => {
  const { theme } = useThemeStore();
  const user = useAuthStore(s => s.user);
  if (!user) {
    return <div>loading...</div>;
  }
  const color = theme === 'light' ? '#fff' : '#452861';

  return (
    <Layout
      data-theme={theme}
      style={{
        height: '100%',
        flex: 1,
        display: 'flex',
      }}
    >
      <Layout.Sider
        width={300}
        style={{
          flex: 1,
          height: '100%',
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['Info']}
          defaultOpenKeys={['Info']}
          style={{
            height: '100%',
            flex: 1,
            borderRight: 0,
          }}
          items={items2}
        />
      </Layout.Sider>
      <Layout.Content
        style={{
          backgroundImage:
            theme === 'light' ? `url(${LightBG})` : `url(${DarkBG})`,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '100%',
        }}
      >
        <UserCard color={color} />
        <UpdateProfileCard color={color} />
      </Layout.Content>
    </Layout>
  );
};

export { ProfilePage };
