// export const name = 'Foo as function';
// export const method = HTTP_METHODS.POST;
// export const middlewares: IMiddleware[] = [auth];

// FaaS example
export default async (world: string = 'world') => {
  return `hello ${world}`;
};