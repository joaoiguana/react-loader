import './App.css';
import { useLayoutEffect } from 'react';
import Home from './components/Home.tsx'

function App() {
  useLayoutEffect(() =>{
    const loader = document.getElementById("loader")!;
    loader.classList.add("loaded");

    setTimeout(() => {
      document.body.removeChild(loader);
    }, 300);
  }, []);

  return (
    <Home />
  );
}

export default App;
