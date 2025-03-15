import {Image, useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { useHoverEffect } from "./HoverEffect"

// Sous-composant pour chaque illustration
function IllustrationItem({ data, nodes, materials }) {
  const groupRef = useRef()
  const { hoverProps } = useHoverEffect(groupRef, 1.15)
  
  return (
    <group position={data.pos} ref={groupRef} {...hoverProps}>
      <mesh geometry={nodes.Cadre.geometry} material={materials.Mat_Polys} rotation={[0, -Math.PI * 0.5, 0]} />
      <Image url={data.src} alt="Picture" scale={[3, 2]} />
    </group>
  )
}

export function Illustrations() {
  const {nodes, materials} = useGLTF('/models/Folio_Cadre.glb')
  const datas = [
    {src:"/media/Illustrations/Robot.jpg", pos:[3, 0, 3] },
    {src:"/media/Illustrations/404.jpg", pos:[3, -3, -6] },
    {src:"/media/Illustrations/Meteo.jpg", pos:[6, -.5, -3.5] },
    {src:"/media/Illustrations/Street.jpg", pos:[8, -2, 0] },
    {src:"/media/Illustrations/Planete-Illustration.jpg", pos:[12, 1, 4] },
    {src:"/media/Illustrations/Femme-Soie.jpg", pos:[10, 0, -8] },
    {src:"/media/Illustrations/Wave-Purple.jpg", pos:[6, 3, 0] },
    {src:"/media/Illustrations/Background-Illustration.jpg", pos:[12, -1, 0] },
    {src:"/media/Illustrations/Design-Orange.jpg", pos:[4, 1, -1] },
  ]

  return (
    <>
      {datas.map((data, id) => (
        <IllustrationItem key={id} data={data} nodes={nodes} materials={materials} />
      ))}
    </>
  )
}
