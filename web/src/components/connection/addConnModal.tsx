import { addConn } from '@/service/conn';
import { Button, Form, Input, message, Modal } from 'antd';
import React from 'react';
import { IConnSetting } from '../../../../type';

interface IProps {
  visible: boolean;
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
  onOK?: () => void;
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default ({ visible, onCancel, onOK }: IProps) => {
  const [form] = Form.useForm();
  const onFinish = (values: IConnSetting) => {
    addConn(values).then(() => {
      message.success('Good job');
      onOK && onOK();
    }).catch(err => {
      message.warning(err.message);
    })
  };
  return (
    <Modal
      title="Add Connection"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="名字"
          initialValue="local"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="dsn"
          label="连接地址"
          initialValue="mongodb://127.0.0.1:27017/test?authSource=admin"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}