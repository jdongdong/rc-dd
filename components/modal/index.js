import React from 'react';
// import { Modal, Button } from 'antd';
import Modal from 'antd/lib/modal';
import 'antd/lib/modal/style/css';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
import './index.less';

const DDModal = ({ children, modalType, ...modalProps }) => {
  const footer = [];
  if (modalType === 'detail') {
    footer.push(<Button key="back" type="ghost" onClick={modalProps.onCancel}>关闭</Button>);
    modalProps = {
      wrapClassName: 'vertical-center-modal',
      ...modalProps,
      footer,
    };
  } else {
    modalProps = {
      wrapClassName: 'vertical-center-modal',
      ...modalProps,
    };
  }

  return (
    <Modal {...modalProps}>
      {children}
    </Modal>
  );
};

export default DDModal;
