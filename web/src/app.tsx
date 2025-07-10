import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateRoom from './pages/CreateRoom';
import Room from './pages/Room';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CreateRoom />} index />
        <Route element={<Room />} path="/room" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
