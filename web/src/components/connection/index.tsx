import { deleteConn, getConnList } from '@/service/conn';
import { DeleteTwoTone } from '@ant-design/icons';
import { Button, message, Popconfirm, Select, Spin } from 'antd';
import React, { useEffect, useState } from 'react';

import { IConnSetting } from '../../../../type';
import globalStore from '../../store/global';
import AddConnModal from './AddConnModal';
import styles from './style.less';

const { Option } = Select;

export default () => {
  const [loading, setLoading] = useState(true);
  const [showModal, toggleShowModal] = useState(false);
  const [v, setV] = useState(Date.now())
  const [list, setList] = useState<IConnSetting[]>([]);

  const [current, setCurrent] = useState<string>('');

  useEffect(() => {
    getConnList().then((data: IConnSetting[]) => {
      console.log('Load');
      setList(data);
      setLoading(false);
    }).catch(err => {
      message.warn(err.message);
    })
  }, [v]);

  useEffect(() => {
    console.log('switch connection: ' + current);
    globalStore.setState({
      currentConnName: current,
    });
    globalStore.dispatch('showDBs');
  }, [current]);

  const renderModal = () => {
    return (
      <AddConnModal
        visible={showModal}
        onCancel={() => {
          toggleShowModal(false);
        }}
        onOK={() => {
          setV(Date.now());
          toggleShowModal(false);
        }}
      />
    );
  }

  return loading ? <Spin /> : (
    <>
      <Select
        placeholder="选择连接"
        suffixIcon={(
          <Popconfirm
            title="真的要删除吗"
            onConfirm={() => {
              setLoading(true);
              deleteConn(current).then(() => {
                message.success('Done');
                setV(Date.now());
              }).catch(err => {
                message.warning(err.message);
              });
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
        dropdownRender={menu => {
          return (
            <>
              {menu}
              <Button
                className={styles.btn}
                onClick={() => {
                  toggleShowModal(true);
                }}
              >
                +add
            </Button>
            </>
          );
        }}
        onChange={(value: string) => {
          setCurrent(value);
        }}
      >
        {list.map(({ name, dsn }) => (
          <Option value={name} key={`${name}${dsn}`} >
            {name}
          </Option>
        ))}
      </Select>
      {renderModal()}
    </>
  );
}