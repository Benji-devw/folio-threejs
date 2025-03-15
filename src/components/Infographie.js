import {useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { useHoverEffect } from "./HoverEffect"

export function Infographie({position}) {
  const {nodes, materials} = useGLTF('/models/Folio_Maintenance.glb')
  
  // Créer une référence pour le groupe
  const groupRef = useRef()
  // Utiliser le hook pour l'effet de hover
  const { hoverProps } = useHoverEffect(groupRef, 1.15)
  
  return (
    <group position={position} rotation={[0, -Math.PI * 0.5, 0]} ref={groupRef} {...hoverProps}>
      <mesh scale={1.5} geometry={nodes.Maintenance.geometry} material={materials.Mat_panel} rotation={[0, -Math.PI * 0.5, 0]} />
    </group>
  )
}
