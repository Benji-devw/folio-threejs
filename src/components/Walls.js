import {  useGLTF } from "@react-three/drei"
import { useRef } from "react";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


export function Walls() {

  const group = useRef()
  // const model = useLoader(GLTFLoader, '/models/Folio_Walls.glb')
  const {nodes, materials} = useGLTF('/models/Folio_Walls.glb')

  // console.log(nodes);
  // console.log(materials);
  return (
    <>
      <group ref={group} dispose={null} position={[0, -2, 0]} rotation={[0, -Math.PI * 0.5, 0]}>
      {/* <primitive  object={model.scene} position={[0, 0, -3]} rotation={[0, -Math.PI * 0.5, 0]} scale={1} /> */}
        <mesh geometry={nodes.Panel_Name.geometry} material={materials.Mat_panel} />
        <mesh geometry={nodes.Panel_Title.geometry} material={materials.Mat_panel} />
        <mesh geometry={nodes.Back.geometry} material={materials.Mat_panel} />
        </group>
    </>
  )
}
