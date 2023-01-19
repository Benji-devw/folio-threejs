import * as THREE from 'three'
import { useEffect, useState } from "react"
import { Image, useGLTF } from "@react-three/drei"


export function Logos({position}) {
  const datas = [
    {src:"/media/logos/LOGO_DA.svg", pos:[2, 0, 0] },
    {src:"/media/logos/LOGO_LightNess.svg", pos:[2, 2, -3] },
    {src:"/media/logos/LOGO_NINA.svg", pos:[-1, 3, -6] },
    {src:"/media/logos/LOGO_OX.svg", pos:[-3, 1, -9] },
    {src:"/media/logos/LOGO_TECH.svg", pos:[0, -2, -12] },
    {src:"/media/logos/LOGO_V.svg", pos:[2, 0, -15] },
    {src:"/media/logos/Logo-Vallena.svg", pos:[0, 2, -18] },
  ]
  
  return (
    <>
      { datas.map((data,id) => 
        <group key={id} position={data.pos}>
          <Image transparent url={data.src} alt="Picture" scale={1.6}  />
        </group>
      )}
    </>
  )
}
