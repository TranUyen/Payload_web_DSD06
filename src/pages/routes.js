import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './Dashboard';

//Payload
import ListPayload from './Payload/PayloadManagement/List';
import PayloadMaintenance from './Payload/PayloadMaintenance/List';
import EditSchedule from './Payload/PayloadMaintenance/Edit';
import AddSchedule from './Payload/PayloadMaintenance/Add';
import PayloadSetting from './Payload/PayloadSetting';
//Payload  Statistic
import PayloadStatistic from './Payload/PayloadStatistic';
import PayloadStatisticFrequency from './Payload/PayloadStatistic/PayloadStatisticFrequency';
import PayloadStatisticTime from "./Payload/PayloadStatistic/PayloadStatisticTime";
import PayloadStatisticStatus from "./Payload/PayloadStatistic/PayloadStatisticStatus";
import PayloadStatisticMoment from "./Payload/PayloadStatistic/PayloadStatisticMoment";
import PayloadStatisticDrone from "./Payload/PayloadStatistic/PayloadStatisticDrone";

import EditPayload from './Payload/PayloadManagement/Edit';
import AddPayload from './Payload/PayloadManagement/Add';
export const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    exact: true,
  },
  {
    path: '/drones',
    component: () => <div>DroneManagement</div>,
  },
  {
    path: '/drone-state',
    component: () => <div>Tình trạng drone</div>,
  },
  {
    path: '/fly-setting',
    component: () => <div>Thiết lập đường bay</div>,
  },
  {
    path: '/drone-statistic',
    component: () => <div>Thống kê drone</div>,
  },
  {
    path: '/flight-hub',
    component: () => <div>Flight Hub</div>,
  },

    //PAYLOAD
  {
    path: '/payloads',
    component: () => <div>PayloadManagement</div>,
  },
  {
    path: '/payload-management',
    component: ListPayload,
  },
  {
    path: '/edit-payload',
    component: EditPayload,
  },
  {
    path: '/add-payload',
    component: AddPayload,
  },
  {
    path: '/payload-drone',
    component: () => <div>Payload - Drone</div>,
  },
  {
    path: '/payload-configuration',
    component: PayloadSetting,
  },
  {
    path: '/payload-maintenance',
    component: PayloadMaintenance,
  },
  {
    path: '/edit-schedule',
    component: EditSchedule,
  },
  {
    path: '/add-schedule',
    component: AddSchedule,
  },

  //Payload statistic
  {
    path: '/payload-statistic',
    component: PayloadStatistic,
  },
  {
    path: '/payload-statistic/frequency',
    component: PayloadStatisticFrequency,
  },
  {
    path: '/payload-statistic/time',
    component: PayloadStatisticTime,
  },
  {
    path: '/payload-statistic/moment',
    component: PayloadStatisticMoment,
  },
  {
    path: '/payload-statistic/status',
    component: PayloadStatisticStatus,
  },
  {
    path: '/payload-statistic/drone',
    component: PayloadStatisticDrone,
  },


  {
    path: '/metadata',
    component: () => <div>Meta Data</div>,
  },
  {
    path: '/problem',
    component: () => <div>Problem</div>,
  },
  {
    path: '/supervised-object',
    component: () => <div>Đối tượng giám sát</div>,
  },
  {
    path: '/statistic',
    component: () => <div>Báo cáo thống kê</div>,
  },
  {
    path: '/problems',
    component: () => <div>Sự cố</div>,
  },
  {
    path: '/warning',
    component: () => <div>Cảnh báo</div>,
  },
  {
    path: '/activity-log',
    component: () => <div>Lịch sử hoạt động</div>,
  },
  {
    path: '/surveillance-domain',
    component: () => <div>Miền giám sát</div>,
  },
  {
    path: '/handle-problem',
    component: () => <div>Xử lý sự cố</div>,
  },
  {
    path: '/user-management',
    component: () => <div>Quản lý người dùng</div>,
  },
];

export default () => (
  <Switch>
    {routes.map(({ path, exact = false, component: Component, ...rest }) => {
      return (
        <Route
          key={path}
          exact={exact}
          path={path}
          component={Component}
          {...rest}
        />
      );
    })}
    <Redirect to='/' />
  </Switch>
);
