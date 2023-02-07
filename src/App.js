import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import SearchHeader from './components/SearchHeader';

// QueryClientProvider로 Outlet을 감싸줬기 때문에 하위 모든 컴포넌트에서 useQuery 사용 가능
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;
