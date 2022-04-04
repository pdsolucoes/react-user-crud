import { createModel } from '@rematch/core';
import { RootModel } from '.';

import { createSession as apiLogin } from '../../services/Session';

export type AuthState = {
  id?: number;
  email?: string;
  token?: string;
  created_at?: string;
  updated_at?: string;
  name?: string;
};

export interface LoginParameters {
  email: string;
  password: string;
}

export const Auth = createModel<RootModel>()({
  state: {} as AuthState,
  reducers: {
    login: (state, payload: Record<string, any>) => ({
      ...state,
      ...payload,
    }),
    logout: () => ({}),
  },
  effects: dispatch => ({
    loginAsync: async (payload: LoginParameters) => {
      const res = await apiLogin(payload);
      dispatch.Auth.login(res);
    },
  }),
});
