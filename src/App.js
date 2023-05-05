import { Route, Routes } from 'react-router-dom';
import Main from './layout/Main';
import Update from './component/Home/Update';

function App() {
  return (
    <div className='h-[800px]' style={{ backgroundColor: "#B0C7D0" }}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/edit/:id' element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
