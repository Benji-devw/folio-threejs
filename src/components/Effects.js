import { EffectComposer, DepthOfField, Bloom } from '@react-three/postprocessing'
import { Text3DSettings, Depth } from '@/components/Leva'

export function Effects() {

  const {focusRange, focusDistance, focalLength, bokehScale} = Depth()

  return (
    <EffectComposer>
      {/* <DepthOfField target={[20, 0, 0]}  focusDistance={focusDistance} focalLength={focalLength} bokehScale={bokehScale} /> */}
      <DepthOfField focalLength={focalLength} focusRange={focusRange} focusDistance={focusDistance} bokehScale={bokehScale} />
      <Bloom luminanceThreshold={1} intensity={1} mipmapBlur />
    </EffectComposer>
  )
}
