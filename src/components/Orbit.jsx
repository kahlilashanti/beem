import { extend, useThree } from 'react-three-fiber';


import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
extend({ OrbitControls });


//separate component for orbit controls
//must use extend to add orbit controls to the Canvas component
const Orbit = () => {
    const { camera, gl } = useThree();

    return (
        <orbitControls args={[camera, gl.domElement]} />
    )
}

export default Orbit;