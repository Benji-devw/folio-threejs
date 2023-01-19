import * as THREE from 'three'
import { useEffect, useState } from "react"
import { Image, useGLTF, Text, Html } from "@react-three/drei"



function Video() {
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/media/web/Desktop.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
  useEffect(() => void video.play(), [video])
  return (
    <mesh position={[-2, 0, 0]} rotation={[0, Math.PI / 2, 0]} scale={[7, 4, 1]}>
      <planeGeometry />
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial>
    </mesh>
  )
}

export function Web({position}) {
  const {nodes, materials} = useGLTF('/models/Folio_Cadre.glb')

  const datas = [
    {src:"/media/web/aleph.jpg", pos:[4, 0, 3] },
    {src:"/media/web/Stouflydoc-1.jpg", pos:[-4, 0, 3] },
    {src:"/media/web/vallena.png", pos:[0, 3, -8] },
    {src:"/media/web/speedo.jpg", pos:[0, -3, -8] },
    {src:"/media/web/Aquapulse.jpg", pos:[4, 0, -18] },
    {src:"/media/web/ffmi.jpg", pos:[-4, 0, -18] },
  ]
  
  return (
    <>
      {/* <group position={position} rotation={[0, -Math.PI * 0.5, 0]}>
        <Video /> 
      </group> */}

      {/* <group position={position} rotation={[0, -Math.PI * 0.5, 0]}>
        <primitive object={test.scene} >
        <Html 
          transform
          className="htmlPreview"
          position={[0, 0, 0]}
        >
          <div className="htmlScreen">
            <iframe src="https://navarro-benjamin.vercel.app/"/>
          </div>
          </Html>
        </primitive>
      </group> */}


      { datas.map((data,id) => 
        <group key={id} position={data.pos}>
          <mesh scale={1.7} geometry={nodes.Cadre.geometry} material={materials.Mat_Polys} rotation={[0, -Math.PI * 0.5, 0]} />
          <Image url={data.src} alt="Picture" scale={[5, 3.4]} />
          {/* <Text maxWidth={2} anchorX="left" anchorY="top" position={[0.55, .5, 0]} fontSize={1.025}>
            {"test"}
          </Text> */}
        </group>
      )}
    </>
  )
}
