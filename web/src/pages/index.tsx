import { Layout } from 'antd';
import React, { useEffect, useState } from 'react';

import Connection from '../components/connection';
import Database from '../components/database';
import Tables from '../components/tables';
import ListView from '../components/listview';
import globalStore from '../store/global';
import styles from './index.less';

const { Sider, Content, Footer } = Layout;

export default () => {
  const table = globalStore.useState('currentTable');

  return (
    <Layout className={styles.container}>
      <Sider>
        <Connection />
        <Database />
        <Tables />
      </Sider>
      <Layout>
        <Content className={styles.content}>
          <ListView />
        </Content>
      </Layout>
    </Layout>
  );
}
