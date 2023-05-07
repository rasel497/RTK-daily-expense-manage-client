import { Route, Routes } from 'react-router-dom';
import Main from './layout/Main';

function App() {
  return (
    <div className='h-[800px]' style={{ backgroundColor: "#B0C7D0" }}>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
