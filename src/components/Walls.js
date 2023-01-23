import { useGLTF, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function Walls() {

  const group = useRef()
  const {nodes, materials} = useGLTF('/models/Folio_Back.glb')
  
  const meshRefOne = useRef()
  const meshRefTwo = useRef()
  const scroll = useScroll()
  useFrame(() => {
    meshRefOne.current.position.z = scroll.offset * 65
    meshRefTwo.current.position.z = -scroll.offset * 80
    })

  return (
    <group ref={group} dispose={null}>
      <mesh geometry={nodes.Back.geometry} material={materials.Mat_panel} />
      <mesh ref={meshRefOne} geometry={nodes.Back_One.geometry} material={materials.Mat_panel} />
      <mesh ref={meshRefTwo} geometry={nodes.Back_Two.geometry} material={materials.Mat_panel} />
      {/* <mesh geometry={nodes.Back_Three.geometry} material={materials.Mat_Orange} /> */}
      <mesh geometry={nodes.Back_Four.geometry} material={materials.Mat_Orange} />
      <mesh  geometry={nodes.Back_Five.geometry} material={materials.Mat_Orange} />
      <mesh geometry={nodes.Back_Six.geometry} material={materials.Mat_Orange} />
    </group>
  )
}
