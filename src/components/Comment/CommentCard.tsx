import { Button, Comment, Modal, Rate, Tooltip } from 'antd';
import React, { useState } from 'react';

const CommentCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const data = {
    actions: [
      <Button key={1} type="text" style={{ color: 'red' }} onClick={showModal}>
        Report comment
      </Button>,
    ],
    author: 'Han Solo',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: (
      <>
        <span> Rating </span>
        <Rate />
        <p>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure), to help people create
          their product prototypes beautifully and efficiently.
        </p>
      </>
    ),
    datetime: (
      <Tooltip title="2016-11-22 11:22:33">
        <span>8 hours ago</span>
      </Tooltip>
    ),
  };
  return (
    <>
      <Comment
        actions={data.actions}
        author={data.author}
        avatar={data.avatar}
        content={data.content}
        datetime={data.datetime}
      />
      <Modal
        key={1}
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      ,
    </>
  );
};
export { CommentCard };
