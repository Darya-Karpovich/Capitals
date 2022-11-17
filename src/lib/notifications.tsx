import { message } from 'antd';

const openNotification = (text: string) => {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  message.success(text, 5);
};

const openErrorNotification = () => {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  message.error(
    'The email address that you entered doesnt match any account or passvord is incorrect. Please try again',
    10,
  );
};

export { openErrorNotification, openNotification };
