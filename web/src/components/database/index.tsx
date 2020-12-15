import { DatabaseOutlined, DeleteTwoTone } from '@ant-design/icons';
import { Button, Menu, message, Popconfirm, Select, Spin } from 'antd';
import React, { useEffect, useState } from 'react';

import globalStore from '../../store/global';
import styles from './style.less';

const { Option } = Select;

export default () => {
  const currentConn = globalStore.useState('currentConnName');
  const databases = globalStore.useState('dbs');
  const [current, setCurrent] = useState<string>('');

  useEffect(() => {
    console.log('switch database: ' + current);
    globalStore.setState({
      currentDBName: current,
    });
    globalStore.dispatch('showTables');
  }, [current]);

  return (
    !currentConn
      ? <></>
      : <>
        <Select
          placeholder="选择Database"
          suffixIcon={(
            <Popconfirm
              title="真的要Drop DB?"
              onConfirm={() => {
                message.warning('假的啦，暂时还没有这种操作。');
                globalStore.dispatch('showDBs');
              }}
              onCancel={() => {

              }}
              okText="嗯呢"
              cancelText="算了还是"
            >
              <DeleteTwoTone twoToneColor="#000" />
            </Popconfirm>
          )}
          className={styles.container}
          onChange={(value: string) => {
            setCurrent(value);
          }}
        >
          {databases.map((database: string) => (
            <Option value={database} key={`${database}`} >
              {database}
            </Option>
          ))}
        </Select>
      </>
  );
}