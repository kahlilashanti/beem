import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
// import * as THREE from 'three';





const Box = props => {
    const ref = useRef();
    useFrame(state => {
        //to see animation variables, uncomment the following line
        // console.log(state)
        //use ref on the current mesh to make it rotate
        // ref.current.rotation.x += 0.01;
        // ref.current.rotation.y += 0.01;
    })
    return (

        <mesh ref={ref} {...props} castShadow receiveShadow>
            <boxBufferGeometry />
            <meshPhysicalMaterial color="blue" />
        </mesh>
    )
}

export default Box;