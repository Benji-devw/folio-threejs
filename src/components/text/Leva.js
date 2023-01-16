import { useControls } from 'leva'

///// TEXT3D /////
export function Text3DSettings() {
  const {fonts, matcaps, textWireframe, size, height, bevelEnable, bevelThickness, bevelSize, bevelOffset, bevelSegments} = useControls('Text3D', {
    fonts: {options: {skilscreen: "silkScreen/Silkscreen_Regular.json", laBelleAurore: 'La_belle_Aurore/La_Belle_Aurore_Regular.json'}},
    matcaps: {options: {page3_2: '27222B_677491_484F6A_5D657A', page3_4: '28292A_D3DAE5_A3ACB8_818183', page5_1: '36220C_C6C391_8C844A_8B7B4C'}},
    size: {min:0, max:10, value: 0.8, step:0.01},
    height:{min:0, max:10, value: 0.05, step:0.01},
    bevelEnable: true,
    bevelThickness: {min:0, max:10, value:0.01, step:0.01},
    bevelSize: {min:0, max:10, value: 0.01, step:0.01},
    bevelOffset: {min:0, max:10, value: 0, step:0.01},
    bevelSegments:{min:0, max:10, value: 5, step:0.01},
    visible: true,
    textWireframe: false,
  })
  return {fonts, matcaps, textWireframe, size, height, bevelEnable, bevelThickness, bevelSize, bevelOffset, bevelSegments}
}
