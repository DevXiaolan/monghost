import { getConn } from '../common/connection-pool';

export default async (name: string) => {
  const client = await getConn(name);
  const dbs = (await client.db('test').admin().listDatabases())?.databases?.map(({ name }: { name: string }) => name) || [];
  return dbs;
};