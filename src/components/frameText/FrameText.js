import { useGLTF } from "@react-three/drei"

export function FrameText({scale, position, color}) {
  const {nodes, materials} = useGLTF('/models/Folio_Frame.glb')
  return (
    <group position={position} rotation={[0, -Math.PI * 0.5, 0]} scale={scale} >
      <mesh geometry={nodes.Frame.geometry} material={materials.Mat_panel} />
      <mesh castShadow scale={ [.1, .1, 5.8] } position={[0, 1.6, 0]} >
        <boxGeometry />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
      <mesh castShadow scale={ [.1, .1, 5.8] } position={[0, 4.2, 2]} >
        <boxGeometry />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
    </group>
  )
}
