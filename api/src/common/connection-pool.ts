import { useModel } from "@mohism/core";
import { Dict, Logger } from "@mohism/utils";
import { MongoClient } from 'mongodb';
import { Document } from "mongoose";
import { IConnSetting } from "../../../type";

const logger = Logger();
const POOL: Dict<MongoClient> = {};

interface IConnDocument extends IConnSetting, Document {
  _id?: string;
}

export const makeConn = async (name: string) => {
  logger.info(`new connection: ${name}`);
  const record = await useModel<IConnDocument>('conn').findOne({ name });
  POOL[name] = await MongoClient.connect(record?.dsn as string);
}

export const getConn = async (name: string) => {
  if (!POOL[name]) {
    await makeConn(name);
  }
  return POOL[name];
};