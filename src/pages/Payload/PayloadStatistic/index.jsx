import React from 'react';
import { Table, Space, Input, Form, Select, Modal, DatePicker, Row, Col} from 'antd';
import { Button } from 'antd';
import StyleList from './index.style';


const PayloadStatistic = ({ history }) => {
  return (
      <StyleList>
        <div>
          <h2>Thống kê Payload</h2>
          <br/>
          <Form>
            <Row justify="space-around">
              <Col span={4}>
                <Button type="primary" className="buttontype" onClick={() => history.push('/payload-statistic-frequency')}>Thống kê theo tần suất sử dụng</Button>
              </Col>
              <Col span={4}>
                <Button type="primary" className="buttontype" onClick={() => history.push('/payload-statistic-time')}>Thống kê theo thời gian sử dụng</Button>
              </Col>
              <Col span={4}>
                <Button type="primary" className="buttontype" onClick={() => history.push('/payload-statistic-moment')}>Thống kê theo thời điểm sử dụng</Button>
              </Col>
            </Row>
            <br/>
            <Row justify="space-around">
              <Col span={4}>
                <Button type="primary" className="buttontype" onClick={() => history.push('/payload-statistic-status')}>Thống kê theo trạng thái</Button>
              </Col>
              <Col span={4}>
                <Button type="primary" className="buttontype" onClick={() => history.push('/payload-statistic-drone')}>Thống kê theo Drone</Button>
              </Col>
            </Row>
          </Form>

        </div>
      </StyleList>
      )

};

export default PayloadStatistic;
