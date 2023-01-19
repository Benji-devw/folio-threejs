import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Html, Stats, OrbitControls, ScrollControls, useScroll, useHelper, Grid, Environment, CameraShake } from '@react-three/drei'
import { Leva } from 'leva'
import { Walls } from '@/components/Walls'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { TextXD } from '@/components/text/TextXD'
import { TextPanel } from '@/components/text/TextPanel'
import { Illustrations } from '@/components/Illustrations'
import { FrameText } from '@/components/frameText/FrameText'
import { Web } from '@/components/web/Web'
import { Effects } from '@/components/Effects'
import { EnvMappingSettings } from '@/components/Leva'
import { Logos } from '@/components/logos/Logos'
import { Infographie } from '@/components/Infographie'



function Scene() {
  const allRef = useRef()
  const vec = new THREE.Vector3()
  const { mouse } = useThree()
  const scroll = useScroll()
  useFrame(() => {
    allRef.current.position.x = -scroll.offset * 160
    allRef.current.position.lerp(vec.set(mouse.x * 0.2, mouse.y * 0.2, 0), 0.1)
    allRef.current.rotation.y = THREE.MathUtils.lerp(allRef.current.rotation.y, (mouse.x / Math.PI) / 20, 0.1)
    })

  // const directionalLightRef = useRef()
  // useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, "red")

  return (
    <group ref={allRef} >
      {/* <directionalLight ref={directionalLightRef} castShadow intensity={1.5} position={[1, 2, 0]} shadow-normalBias={ 0.5 } /> */}
      {/* <ambientLight intensity={1} /> */}
      <pointLight position={[100, 100, 100]} intensity={.5} />

      <group rotation={[0, -Math.PI * 0.5, 0]}>
        <Walls position={[0, 0, 0]} rotation={[0, 0, 0]}/>
        <FrameText position={[1.2, -2.5, 0]} scale={1} color={[1.5 /2, 2 /2, 4 /2]}   />
        <TextXD name='Benjamin' position={[0, .9, 0]} size={[.5]} />
        <TextXD name='Navarro' position={[0, 0, -3]} size={[.5]} />
        <TextXD name='Porfolio' position={[0, -1, -4]} size={[.4]} />
      </group>

      <group position={[30, 0, -7]} rotation={[0, -Math.PI * 0.5, 0]}>
        <FrameText position={[7, -2.5, 7]} scale={.5} color={[1.5 *.8, 2 *.8, 4 *.8]}  />
        {/* <TextPanel name='Illustrations' position={[7, -0.6, 7]} /> */}
        <TextXD name='Illustrations' position={[7, -1, 7]} size={[.4]}  />
        <Illustrations />
      </group>
      
      <group position={[65, 0, 0]} rotation={[0, -Math.PI * 0.5, 0]}>
        <Walls position={[0, 0, 0]} rotation={[0, 0, 0]}/>
        <FrameText position={[0, -3, 10]} scale={.5} color={[1.5 /2, 2 /2, 4 /2]}  />
        <TextXD name='Web' position={[0, -1.5, 10]} size={[.4]}  />
        <Web position={[-2, 0, 0]}/>
      </group>      
      
      <group position={[110, 0, 0]} rotation={[0, -Math.PI * 0.5, 0]}>
        <Walls position={[0, 0, 0]} rotation={[0, 0, 0]}/>
        <FrameText position={[0, -2, 7]} scale={.5} color={[1.5 /2, 2 /2, 4 /2]}  />
        <TextXD name='Logos' position={[0, -0.6, 7]} size={[.4]}  />
        <Logos position={[-2, 0, 0]}/>
      </group>      
      
      <group position={[150, 0, 0]} rotation={[0, -Math.PI * 0.5, 0]}>
        <Walls position={[0, 0, 0]} rotation={[0, 0, 0]}/>
        <FrameText position={[0, -2, 7]} scale={.5} color={[1.5 /2, 2 /2, 4 /2]}  />
        <TextXD name='3D' position={[0, -0.6, 7]} size={[.4]}  />
        <Infographie position={[0, 0, 3]}/>
      </group>
    </group>
  )
}



export default function Display() {
  const {envmapping} = EnvMappingSettings()
  return (
    <>
      <Leva collapsed/>
      <Stats showPanel={0} className="statsFps"/>

      <Canvas className='webgl' dpr={[1, 1.5]} gl={{ alpha: false }} shadows camera={{ fov: 45, near: 0.1,position: [ -8, 1, 0 ]}}>
        {/* <color attach="background" args={['#8C8C8C']} /> */}
        <Environment background preset={envmapping }blur={0.8} />
        <directionalLight castShadow intensity={.2} position={[-8, 0, 0]}  >
          <orthographicCamera attach="shadow-camera" left={-10} right={10} top={10} bottom={10} />
        </directionalLight>
        {/* <Grid renderOrder={-1} rotation={[0, 0, Math.PI * 0.5]} position={[3, 0, 0]} infiniteGrid cellSize={2} sectionSize={2} cellThickness={.5} sectionThickness={.5} sectionColor={[242, 68, 5]} fadeDistance={12} /> */}

        <Suspense fallback={null}>
          <ScrollControls html fixed pages={4}>
            <Scene/>
          </ScrollControls>
        </Suspense>

        <Effects />

        {/* <CameraShake yawFrequency={.2} pitchFrequency={0} rollFrequency={0} /> */}
        {/* <gridHelper args={[1000, 200, '#151515', '#020202']} position={[0, -1, 0]} /> */}
        {/* <axesHelper args={[2, 2, 2]} /> */}
        {/* <OrbitControls makeDefault /> */}
        {/* <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} /> */}
        {/* <OrbitControls makeDefault enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1} minPolarAngle={Math.PI / 1} minAzimuthAngle={Math.PI / 1} maxAzimuthAngle={Math.PI / 1} /> */}
      </Canvas>
    </>
  )
}
