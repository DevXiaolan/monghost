import { DatabaseOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import globalStore from '../../store/global';

import styles from './style.less';

export default () => {
  const tables = globalStore.useState('tables');
  return (
    <Menu mode="vertical" className={styles.container}>
      {tables.map(table => (
        <Menu.Item
          key={table}
          icon={<DatabaseOutlined/>}
          onClick={() => {
            globalStore.setState({
              currentTable: table,
            });
          }}
          >
          {table}
        </Menu.Item>
      ))}
    </Menu>
  );
}