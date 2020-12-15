import { getConn } from '../common/connection-pool';

export default async (name: string, db: string) => {
  const client = await getConn(name);
  const tables = (
    await client.db(db)
      .listCollections()
      .toArray())
    .map(
      ({ name }: { name: string }) => name
    ) || [];
  tables.sort();
  return tables;
};