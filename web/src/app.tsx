import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateRoom from './pages/CreateRoom';
import Room from './pages/Room';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<CreateRoom />} index />
          <Route element={<Room />} path="/room/:roomId" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
