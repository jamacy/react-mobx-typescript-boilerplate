import * as React from 'react';
import { MobXProviderContext } from 'mobx-react';

import TodoStore from './TodoStore';
import UserStore from './UserStore';

const Stores = {
  todoStore:TodoStore,
  userStore: UserStore
}


export function useStores() {
  return React.useContext(MobXProviderContext) as any;
}
