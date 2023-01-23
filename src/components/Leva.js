import { useControls } from 'leva'

///// EnvMap /////
export function EnvMappingSettings() {
  const {envmapping, grabient} = useControls({
    envmapping: {options: ['city', 'studio', 'dawn', 'night', , 'warehouse', 'forest', 'sunset', 'apartment', 'park', 'lobby']},
  })
  return {envmapping, grabient}
}

///// TEXT3D /////
export function Text3DSettings() {
  const {fonts, matcaps, letterSpacing, size, height, bevelEnable, bevelThickness, bevelSize, bevelOffset, bevelSegments} = useControls('Text3D', {
    fonts: {options: { 
      zenDot:"Zen_Dots_Regular.json", 
      // skilscreen:"silkScreen/Silkscreen_Regular.json", 
      ibm:"IBM_Logo_Regular.json", 
      // laBelleAurore:"La_belle_Aurore/La_Belle_Aurore_Regular.json"
    }},
    matcaps: {options: { page32_4:"E9CCA1_A63106_DF8C3B_621304", page20_10:"8A6565_2E214D_D48A5F_ADA59C", page3_4:'28292A_D3DAE5_A3ACB8_818183', page3_2: '27222B_677491_484F6A_5D657A',page5_1: '36220C_C6C391_8C844A_8B7B4C'}},
    size: {min:0.1, max:1, value: 0.4, step:0.01},
    height:{min:0, max:3, value: 0.05, step:0.01},
    letterSpacing: {min:0, max:1, value: 0.2, step:0.01},
    bevelEnable: true,
    bevelThickness: {min:0, max:3, value:0.01, step:0.01},
    bevelSize: {min:0, max:0.2, value: 0.01, step:0.01},
    bevelOffset: {min:0, max:1, value: 0, step:0.01},
    bevelSegments:{min:0, max:20, value: 5, step:0.01},
  })
  return {fonts, matcaps, letterSpacing, size, height, bevelEnable, bevelThickness, bevelSize, bevelOffset, bevelSegments}
}



export function Depth() {
  const {focusRange, focusDistance, focalLength, bokehScale} = useControls('DepthOfField', {
    focusRange: {min:0, max:1, value: 0.02, step:0.01},
    focusDistance:{min:0, max:1, value: 0.01, step:0.01},
    focalLength:{min:0, max:5, value: 0.02, step:0.01},
    bokehScale:{min:0, max:10, value: 4.5, step:0.01},
  })
  return {focusRange, focusDistance, focalLength, bokehScale}
}
