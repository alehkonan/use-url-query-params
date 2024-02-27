import { useEffect, useState } from 'react';

export function useUrlQueryState<State extends Record<string, unknown>>(
  keys: string[]
) {
  const [state] = useState();

  useEffect(() => {
    const onChange = (e: PopStateEvent) => console.log('popstate', e);
    window.addEventListener('popstate', onChange);

    return () => window.removeEventListener('popstate', onChange);
  }, []);

  return {
    state,
  };
}
