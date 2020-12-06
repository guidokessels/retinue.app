import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Lists() {
  const history = useHistory();
  return (
    <>
      <Button
        onClick={() => {
          history.replace('/lists/new');
        }}
        icon={<PlusOutlined />}
        type="primary"
      >
        Add List
      </Button>
    </>
  );
}
