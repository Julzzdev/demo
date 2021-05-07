import logo from './logo.svg';
import './App.css';
import { motion } from "framer-motion"

function App() {
  return (
    <div className="App">
      <motion.h1
        animate={{
          x: 100,
          y: 0,
          scale: 1.3,
          rotate: 180,
        }}
      >
        Hola! soy el inicio
      </motion.h1>
    </div>
  );
}

export default App;
