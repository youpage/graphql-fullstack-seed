import { graphqlExpress } from 'graphql-server-express';
import { GraphQLOptions } from 'graphql-server-core';
import { GraphQLSchema } from 'graphql';
import * as express from 'express';
import { getExecutableSchema } from 'graphql-api-builder';

import { db } from '../db';
import { objectApis } from '../apiObjects';


const schema: GraphQLSchema = getExecutableSchema(objectApis);

export const graphqlExpressMiddleware =
  graphqlExpress((request: express.Request) => {
    const graphqlOptions: GraphQLOptions = {
      schema,
      context: {
        db,
        request,
      },
    };
    return graphqlOptions;
  });
