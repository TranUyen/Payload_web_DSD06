import React from 'react';
import { Table, Space, Input, Form, Radio, Select, Modal, DatePicker, Row, Col, Divider } from 'antd';
import { Button } from 'antd';
import StyleList from './index.style';
import { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

const List = ({ history }) => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  let visible = false ;
  
  function editClick(record){
    visible = true;
    //alert(record.key);
    alert(visible)
    //alert(visible)
  };

  const columns = [
    {
      title: 'Mã ',
      dataIndex: 'ID',
      key: 'name',
    },
    {
      title: 'Tên',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Loại',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Mô tả',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'operation',
      width: 100,
      render: (text, record) => (
  
        <Space size="small" >
          <Button type="link" onClick={() => history.push('/dashboard')}>Cấu hình</Button>
          <Button type="link">Sửa</Button>
          <Button danger type="text">Xóa</Button>
        </Space>
      ),
    },
  ];
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <StyleList>
      <div>
        <div>Quản lý Payload</div>
        <Form
          layout="horizontal"
          initialValues={{ size: componentSize }} className="searchtype"
          onValuesChange={onFormLayoutChange}
          size={componentSize}
        >
          <Row justify="space-around">
            <Col span={4}>
              <Form.Item label="Tên">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="Loại">
                <Select>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="Trạng thái">
                <Select>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Button type="primary" icon={<SearchOutlined />}>
                Tìm kiếm
              </Button>
            </Col>
          </Row>
        </Form>
        <Table dataSource={dataSource} columns={columns} />;
        </div>

        <Modal
          title="Basic Modal"
          visible={visible}
          //onOk={handleOk}
          //onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
    </StyleList>
  );
};

export default List;
