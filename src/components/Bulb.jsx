




//to see the light as a spherical mesh
const Bulb = props => {
    return (
        <mesh {...props}>
            <pointLight castShadow />
            {/* <sphereBufferGeometry args={[0.2]} /> */}
            <meshPhongMaterial emissive='white' />
        </mesh>
    )
}

export default Bulb;