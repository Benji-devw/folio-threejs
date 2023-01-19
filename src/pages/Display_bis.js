import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Html, Stats, OrbitControls, ScrollControls, useScroll, useHelper, Grid, Environment, CameraShake, MeshReflectorMaterial, Merged, useGLTF } from '@react-three/drei'
import { Leva } from 'leva'
import { Walls } from '@/components/Walls'
import { Suspense, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { TextXD } from '@/components/text/TextXD'
import { TextPanel } from '@/components/text/TextPanel'
import { Illustrations } from '@/components/Illustrations'
import { FrameText } from '@/components/frameText/FrameText'
import { Web } from '@/components/web/Web'
import { Effects } from '@/components/Effects'
import { EnvMappingSettings } from '@/components/Leva'
import { Logos } from '@/components/logos/Logos'



function Train() {
  const ref = useRef()
  const scroll = useScroll()
  const [back, back_One] = useGLTF(['/models/Folio_Back.glb', '/models/Folio_Back.glb'])
  const meshes = useMemo(() => ({ Back: back.nodes.Back, Back_One: back.nodes.Back_One}), [back, back_One])
  // const meshes = useMemo(() => ({ Back: nodes.Back }), [Back])
  useFrame(() => (ref.current.position.z = scroll.offset * 120))

  console.log(meshes);
  return (
    <>
    <Merged castShadow receiveShadow meshes={meshes}>
      {(models) => (
        <group ref={ref}>
          <Back models={models} color="#252525" seatColor="sandybrown" name="1A" position={[0, 0, -6]} />
          <Back models={models} color="#252525" seatColor="sandybrown" name="1A" position={[0, 0, -16]} />
          {/* <Cabin models={models} color="#454545" seatColor="gray" name="2B" position={[0, 0, -32]} /> */}
          {/* <Cabin models={models} color="#252525" seatColor="lightskyblue" name="3A" position={[0, 0, -58]} /> */}
          {/* <Cabin models={models} color="#454545" seatColor="gray" name="4B" position={[0, 0, -84]} /> */}
          {/* <Cabin models={models} color="#252525" seatColor="sandybrown" name="5B" position={[0, 0, -110]} /> */}
          <Html position={[0, 0, 0]}>
          <a href="https://www.youtube.com/">YouTube</a>
        </Html>
        </group>
      )}
    </Merged>
    </>
  )
}




const Back = ({ models, color = 'white', seatColor = 'white', name, ...props }) => (
  <group {...props}>
    {/* <Text fontSize={4} color="#101020" position={[0, 6, 4]} rotation={[-Math.PI / 2, 0, 0]}>
      {name}
    </Text> */}
    <models.Back color={color} />
    {/* <Row models={models} color={seatColor} />
    <Row models={models} color={seatColor} position={[0, 0, -1.9]} />
    <Row models={models} color={seatColor} position={[0, 0, -6.6]} />
    <Row models={models} color={seatColor} position={[0, 0, -8.5]} />
    <Row models={models} color={seatColor} position={[0, 0, -11]} />
    <Row models={models} color={seatColor} position={[0, 0, -12.9]} />
    <Row models={models} color={seatColor} position={[0, 0, -17.6]} />
    <Row models={models} color={seatColor} position={[0, 0, -19.5]} /> */}
  </group>
)



export default function Display_Bis() {

  return (
    <>
      <Leva collapsed/>
      <Stats showPanel={0} className="statsFps"/>

      <Canvas className='webgl' dpr={[1, 1.5]} shadows camera={{ position: [-15, 15, 18], fov: 35 }} gl={{ alpha: false }}>
      <fog attach="fog" args={['#17171b', 30, 40]} />
      <color attach="background" args={['#17171b']} />
      <ambientLight intensity={0.25} />
      <directionalLight castShadow intensity={2} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}>
        <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
      </directionalLight>
      <Suspense fallback={null}>
        <ScrollControls pages={3}>
          <Train />
        </ScrollControls>
        <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[400, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={15}
            depthScale={1}
            minDepthThreshold={0.85}
            color="#151515"
            metalness={0.6}
            roughness={1}
          />
        </mesh>
        <Environment preset="dawn" />
      </Suspense>
    </Canvas>
    </>
  )
}
