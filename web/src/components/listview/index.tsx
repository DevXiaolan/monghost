import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import ReactJson from 'react-json-view';

import { find } from '../../service/commands';
import globalStore from '../../store/global';

export default () => {
  const conn = globalStore.useState('currentConnName');
  const db = globalStore.useState('currentDBName');
  const table = globalStore.useState('currentTable');

  const [list, setList] = useState<object[]>([]);

  useEffect(() => {
    find(conn, db, table)
      .then(data => {
        setList(data);
      }).catch((ex: Error) => {
        message.warning(ex.message);
      });
  }, [conn, db, table]);

  return (
    <ReactJson
      src={list}
      theme="monokai"
      displayDataTypes={false}
      enableClipboard={false}
      onEdit={value=>{
        console.log(value);
      }}
    />
  );
}