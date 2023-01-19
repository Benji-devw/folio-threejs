import {useGLTF } from "@react-three/drei"

export function Infographie({position}) {
  const {nodes, materials} = useGLTF('/models/Folio_Maintenance.glb')
  return (
      <group position={position} rotation={[0, -Math.PI * 0.5, 0]}>
        <mesh scale={1.5} geometry={nodes.Maintenance.geometry} material={materials.Mat_panel} rotation={[0, -Math.PI * 0.5, 0]} />
      </group>
  )
}
