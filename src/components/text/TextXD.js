import { Center, Text3D, useMatcapTexture } from "@react-three/drei"
import { Text3DSettings } from '@/components/Leva'
import { useState } from "react"

export function TextXD({name, position, rotation}) {

  const {fonts, matcaps, letterSpacing, size, height, bevelEnable, bevelThickness, bevelSize, bevelOffset, bevelSegments} = Text3DSettings()
  const [textMatcapTexture] = useMatcapTexture(matcaps, 256)
  const [textMaterial, setTextMaterial] = useState()

  return (
    <>
      <meshMatcapMaterial ref={setTextMaterial} matcap={textMatcapTexture} />
      <Center position={position} rotation={rotation} >
        <Text3D
        material={textMaterial}
        font={`./fonts/${fonts}`}
        size={size}
        height={height}
        bevelEnabled= {bevelEnable}
        bevelThickness={bevelThickness}
        bevelSize={bevelSize}
        bevelOffset={bevelOffset}
        bevelSegments={bevelSegments}
        letterSpacing={letterSpacing}
        >
          {name}
        </Text3D>
    </Center>
    </>
  )
}
