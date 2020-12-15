

import { Rekv, IStatable } from './rekv';
import { showDBs, showTables } from '../service/commands';
import { message } from 'antd';

interface GlobalStore {
  currentDBName: string;
  currentConnName: string;
  currentTable: string;
  dbs: string[];
  tables: string[];
}

const initState: GlobalStore = {
  currentDBName: '',
  currentConnName: '',
  currentTable: '',
  dbs: [],
  tables: [],
};



const globalStore = new Rekv({
  initState,
  effects: {
    async all(store) {
      return store.state;
    },
    async showDBs(store) {
      const currentConnName = store.state.currentConnName;
      if (currentConnName) {
        try {
          const dbs = await showDBs(currentConnName);
          store.setState({
            dbs,
          })
        } catch (err) {
          message.warn(err.message);
        }
      }
    },
    async showTables(store) {
      const { currentConnName, currentDBName } = store.state;
      if (currentConnName && currentDBName) {
        try {
          const tables = await showTables(currentConnName, currentDBName);

          store.setState({
            tables,
          })
        } catch (err) {
          message.warn(err.message);
        }
      }
    },
  },
});

export default globalStore;
