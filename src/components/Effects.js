import { EffectComposer, DepthOfField, Bloom } from '@react-three/postprocessing'
// import { Text3DSettings, Depth } from '@/components/Leva'

export function Effects() {
  // const {focusRange, focusDistance, focalLength, bokehScale} = Depth()
  return (
    <EffectComposer>
      {/* <DepthOfField focalLength={focalLength} focusRange={focusRange} focusDistance={focusDistance} bokehScale={bokehScale} /> */}
      <DepthOfField focusRange={0.02} focusDistance={0.01} focalLength={0.02}  bokehScale={6} />
      <Bloom luminanceThreshold={1} intensity={1} mipmapBlur />
    </EffectComposer>
  )
}
