import React from 'react';
import { Canvas } from '@react-three/fiber';
import Navigation from '../Navigation/Navigation';
import Box from '../Cubes/Cubes';
import './App.css';

export default function App() {
  return (
    <div>
      <Navigation />
      <Canvas>
      <ambientLight />
      <Box position={[0, 0, 0]} />
    </Canvas>
    </div>
  );
}
