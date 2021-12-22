import Bulb from "./Bulb"

const Lights = ({ }) => {
    return (
        <>

            <ambientLight intensity={0.4} />
            <directionalLight position={[6, 3, 0]} intensity={2} />

            <Bulb position={[-1, 1, 1]} />
            <Bulb position={[0, 2, 0]} />
            <Bulb position={[2, 1, 1]} />
            <Bulb position={[1, 1, 2]} />


        </>
    )
}

export default Lights