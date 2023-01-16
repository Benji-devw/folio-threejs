import { Text } from "@react-three/drei"

export function TextPanel({name, position}) {
  return (
      <Text
        fonts="./fonts/silkScreen/Silkscreen_Regular.json"
        fontSize={.6}
        textAlign="center"
        maxWidth={3}
        position={position}
      >
        {name}
      </Text>
  )
}
