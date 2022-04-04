import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import createPersistPlugin from '@rematch/persist';
import storage from 'redux-persist/lib/storage';


import { models, RootModel } from './models';

const persistPlugin = createPersistPlugin<
  typeof models,
  RootModel,
  Record<string, any>
>({
  key: `${process.env.APPLICATION_IDENTIFIER}`,
  storage,
  whitelist: ['Auth', 'Settings'],
  version: 1,
});

export const store = init<RootModel>({
  models,
  plugins: [persistPlugin as any],
});

export const { dispatch } = store;

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
