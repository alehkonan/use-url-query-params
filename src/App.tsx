import { useUrlQueryState } from '../lib/useUrlQueryState';

type QueryState = {
  book: 'Ali and Nino' | 'Harry Potter' | 'Sherlock Holmes';
  role: 'admin' | 'user' | 'manager';
  isReady: boolean;
  createdAt: Date;
};

const managedKeys = ['book', 'isReady', 'createdAt'] as const;

export function App() {
  const { state } = useUrlQueryState<QueryState>(managedKeys);

  return (
    <div>
      <p>
        Values that should be observable: ['books', 'isReady', 'createdAt',
        'roles']
      </p>
      <button
        onClick={() => {
          const url = new URL(window.location.href);
          url.searchParams.append('books', 'Billy');
          window.history.pushState(null, '', url);
        }}
      >
        Add book "Billy"
      </button>
      <button
        onClick={() => {
          const url = new URL(window.location.href);
          url.searchParams.set('books', 'Prison');
          window.history.pushState(null, '', url);
        }}
      >
        Change books to "Prison"
      </button>
      <button
        onClick={() => {
          const url = new URL(window.location.href);
          url.searchParams.delete('books', 'Billy');
          window.history.pushState(null, '', url);
        }}
      >
        Remove book "Prison"
      </button>
      <button
        onClick={() => {
          const url = new URL(window.location.href);
          url.searchParams.forEach((_, key) => {
            url.searchParams.delete(key);
          });
          window.history.pushState(null, '', url);
        }}
      >
        Reset book state
      </button>
      <p>State is: {JSON.stringify(state)}</p>
    </div>
  );
}
