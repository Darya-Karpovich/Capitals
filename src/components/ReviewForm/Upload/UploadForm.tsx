import { InboxOutlined } from '@ant-design/icons';
import type { UploadFile, UploadProps } from 'antd';
// eslint-disable-next-line no-duplicate-imports
import { message, Upload } from 'antd';
import React, { useState } from 'react';
import './UploadForm.less';

const { Dragger } = Upload;

const UploadForm = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const props: UploadProps = {
    name: 'file',
    multiple: true,
    listType: 'picture',
    style: { width: '400px' },
    accept: '.png, .jpg',
    beforeUpload: file => {
      setFileList([...fileList, file]);
      return false;
    },
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        // eslint-disable-next-line no-console
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      // eslint-disable-next-line no-console
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">Support for a single or bulk upload.</p>
    </Dragger>
  );
};

export { UploadForm };
