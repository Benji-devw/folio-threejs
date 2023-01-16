import Head from 'next/head'
// import styles from '@/styles/Home.module.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stats, OrbitControls, Bounds, BakeShadows, ScrollControls, useScroll, useHelper, Grid, Environment } from '@react-three/drei'
import { Leva } from 'leva'
import { Walls } from '@/components/Walls'
import { Suspense, useRef } from 'react'
import { EffectComposer, DepthOfField } from '@react-three/postprocessing'
import * as THREE from 'three'
import { TextXD } from '@/components/text/TextXD'
import { TextPanel } from '@/components/text/TextPanel'
import { Illustrations } from '@/components/Illustrations'


function Scroll() {
  const ref = useRef()
  const scroll = useScroll()
  useFrame(() => (ref.current.position.x = - scroll.offset * 20))

  const directionalLightRef = useRef()
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, "red")

  return (
    <group ref={ref}>
      {/* <directionalLight ref={directionalLightRef} castShadow intensity={1.5} position={[1, 2, 15]} shadow-normalBias={ 0.5 } /> */}
      {/* <ambientLight intensity={ 0.5 } /> */}
      {/* <pointLight position={[100, 100, 100]} intensity={1} /> */}
      <Grid renderOrder={-1} rotation={[-Math.PI * 0.5, 0, 0]} position={[0, 0, -10]} infiniteGrid cellSize={1} cellThickness={.7} sectionSize={1.05} sectionThickness={.5} sectionColor={[0.5, 0.5, 10]} fadeDistance={50} />
      
      <Walls />

      <group>
        <TextXD name='Navarro Benjamin' position={[0, 0.8, 0]} />
      </group>

      <group position={[10, 0, 0]}>
        <TextPanel name='Illustrations' position={[0, 1.8, 0]} />
        <Illustrations />
      </group>
    </group>
  )
}


export default function Display() {



  return (
    <>
      <Leva collapsed/>
      <Stats showPanel={0} className="statsFps"/>

      <Canvas className='canvas' shadows camera={{ fov: 45, near: 0.1,position: [ 3, 5, 6 ]}}>
        {/* <color attach="background" args={['#2f2f2f']} /> */}
        <Environment background preset="sunset" blur={0.8} />
        <directionalLight castShadow intensity={1.5} position={[1, 2, 3]}  >
          <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
        </directionalLight>

        <Suspense fallback={null}>
          <ScrollControls pages={1}>
            <Scroll />
          </ScrollControls>
        </Suspense>

        {/* Effects */}
        <EffectComposer>
          <DepthOfField target={[20, 0, 0]} focusRange={-0.5} bokehScale={18} />
        </EffectComposer>


        {/* <gridHelper args={[1000, 200, '#151515', '#020202']} position={[0, -1, 0]} /> */}
        <axesHelper args={[2, 2, 2]} />
        <OrbitControls autoRotate autoRotateSpeed={0.05} enablePan={false} enableZoom={false} makeDefault minPolarAngle={Math.PI / 2.3} maxPolarAngle={Math.PI / 2} minAzimuthAngle={Math.PI / .6} maxAzimuthAngle={.8} />
      </Canvas>
    </>
  )
}
