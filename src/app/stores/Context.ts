import * as React from 'react';
import { MobXProviderContext } from 'mobx-react';

export function useStores() {
  return React.useContext(MobXProviderContext) as any;
}
