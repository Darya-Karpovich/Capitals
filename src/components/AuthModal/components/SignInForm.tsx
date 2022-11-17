import { Button, Form, Input, Typography } from 'antd';
import axios from 'axios';
import React from 'react';

import {
  openErrorNotification,
  openNotification,
} from '../../../lib/notifications';
import { User } from '../../../lib/types';
import { useAuthStore } from '../../../store/authStore';
import { useModalStore } from '../../../store/modalStore';
import { useThemeStore } from '../../../store/themeStore';

const SignInForm = () => {
  const { setToken } = useAuthStore();
  const { setModal } = useModalStore();
  const { theme } = useThemeStore();

  const onFinish = (values: Pick<User, 'email' | 'password'>) => {
    axios
      .post(
        `http://localhost:8080/user/login?email=${values.email}&password=${values.password}`,
      )
      .then(user => {
        if (typeof user.data === 'string') {
          setToken(user.data);
          setModal(false);
          openNotification('You were succesfully loged in!');
        }
      })
      .catch(() => openErrorNotification());
  };

  return (
    <>
      <Form
        layout="vertical"
        name="nest-messages"
        onFinish={onFinish}
        autoComplete="off"
        style={{ width: '250px' }}
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
          hasFeedback
        >
          <Input placeholder="Type your email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: 'Please enter password' },
            { min: 6, message: 'Password must be min 6 characters ' },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Type your password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" data-theme={theme}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Typography.Text>Forget password?</Typography.Text>
    </>
  );
};

export { SignInForm };
