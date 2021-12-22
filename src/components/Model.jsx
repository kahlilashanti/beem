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
        <primitive object={model.scene}
            scale={new Array(3).fill(0.01)}
            position={[1, -.5, -2]}
        />
        // null
    )
}

export default Model;