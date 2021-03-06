import { registerResolver } from './register.resolver';
import { loginResolver } from './login.resolver';
import {
  indexResolver,
  detailResolver,
  updateResolver,
  deleteResolver,
  createResolver
} from './common';


const resolvers = {
  index: indexResolver,
  detail: detailResolver,
  update: updateResolver,
  delete: deleteResolver,
  login: loginResolver,
  register: registerResolver
};

export const getResolver = (resolverType, objectApi) =>
  resolvers[resolverType](objectApi);
