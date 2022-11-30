
import { RouterProvider } from 'react-router-dom';
import { router } from './components/Routes/Routes';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  return (
    <div className="container mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
