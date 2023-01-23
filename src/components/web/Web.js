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
    {src:"/media/web/aleph.jpg", pos:[4, 0, 3], desc:"Contribution au projet Aleph Ecriture - WordPress / PHP / CSS / JavaScript" },
    {src:"/media/web/StouflyDocPreview.jpg", pos:[-4, 0, 3], desc:"Projet StouflyDoc 'en développement', gestion et partage de tracks et de samples (Musique, FL Studio ...) - NextJs / Sass / Epress / NodeJs / MongoDB / Tailwind" },
    {src:"/media/web/vallena.png", pos:[4, 0, -10], desc:"Projet Vallena 'en développement', plateforme e-commerce et gestion des stocks dynamique pour couturiers de France - React / Redux / Sass / Bootstrap / Epress / NodeJs / MongoDB / Paypal / StripeJS" },
    {src:"/media/web/speedo.jpg", pos:[-4, 0, -10], desc:"Intégration design page promotionnel, maillots de bain Femme par Speedo (Decathlon)" },
    {src:"/media/web/Aquapulse.jpg", pos:[4, 0, -23], desc:"Intégration design page promotionnel, lunettes de piscine par Aquapulse Pro Mirror (Decathlon)" },
    {src:"/media/web/ffmi.jpg", pos:[-4, 0, -23], desc:"Contribution au projet FFMI - WordPress / PHP / CSS / JavaScript" },
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
          <Text color={"#b1201f"} maxWidth={5} fontSize={0.15} anchorX="left" anchorY="top" position={[-2.6, -2, 0]}>
            {data.desc}
          </Text>
        </group>
      )}
    </>
  )
}
