import './App.css';
import Orbit from './components/Orbit';
// import Box from './components/Box';
// import Background from './components/Background';
// import Floor from './components/Floor';
// import Bulb from './components/Bulb';
import { Canvas } from 'react-three-fiber';
import { Suspense } from 'react';
import Model from './components/Model';
import Lights from './components/Lights';


function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas
        shadowMap
        style={{ background: '#39b48e' }}
        camera={{ position: [2, 2, 2] }}
      >
        <Lights />
        {/* <Box position={[0, .5, 0]} /> */}
        {/* <Floor position={[0, -0.89, 0]} /> */}
        <Orbit />
        {/* <axesHelper args={[5]} /> */}
        {/* <Suspense fallback={null}>
          <Background />
        </Suspense> */}
        <Suspense fallback={null}>
          <Model path='/beem/scene.gltf' />
        </Suspense>
        <points />
      </Canvas>
    </div>

  );
}

export default App;
