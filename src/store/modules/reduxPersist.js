import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducers = persistReducer(
    {
      key: 'CONSUMO_API_ALUNOS',
      storage,
      whitelist: ['auth'],
    },
    reducers
  );

  return persistedReducers;
};
