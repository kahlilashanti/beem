import { useLoader } from "react-three-fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = props => {
    const model = useLoader(
        GLTFLoader,
        props.path
    )

    //when the model loads print it out 
    console.log(model)
    return (
        <mesh>
            <primitive object={model.scene}
                scale={new Array(3).fill(0.01)}
                position={[0, .5, .5]}
            />
            <meshPhysicalMaterial
                roughness={0}
                clearcoat={1}

            />
        </mesh>
    )
}

export default Model;