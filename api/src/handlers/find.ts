import { getConn } from '../common/connection-pool';

const LIMIT = 10;

export default async (conn: string, db: string, table: string) => {
  const client = await getConn(conn);
  const list = await client.db(db).collection(table).find({},{
    limit:LIMIT,
  }).toArray();
  return list;
}