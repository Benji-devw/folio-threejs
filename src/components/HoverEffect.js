import { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Composant d'ordre supérieur pour ajouter un effet de hover
export const withHoverEffect = (Component) => {
  return function WithHoverEffect(props) {
    const [hovered, setHovered] = useState(false);
    const [targetScale] = useState(() => new THREE.Vector3(1, 1, 1));
    const [initialScale] = useState(() => props.scale ? new THREE.Vector3(...(Array.isArray(props.scale) ? props.scale : [props.scale, props.scale, props.scale])) : new THREE.Vector3(1, 1, 1));
    
    // Facteur d'échelle lors du hover
    const hoverScale = 1.1;
    
    useFrame(() => {
      // Animation fluide de l'échelle
      targetScale.copy(initialScale);
      if (hovered) {
        targetScale.multiplyScalar(hoverScale);
      }
      
      if (props.groupRef && props.groupRef.current) {
        props.groupRef.current.scale.lerp(targetScale, 0.1);
      }
    });
    
    return (
      <Component 
        {...props} 
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
          if (props.onPointerOver) props.onPointerOver(e);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
          document.body.style.cursor = 'auto';
          if (props.onPointerOut) props.onPointerOut(e);
        }}
      />
    );
  };
};

// Hook personnalisé pour l'effet de hover
export function useHoverEffect(ref, hoverScale = 1.1) {
  const [hovered, setHovered] = useState(false);
  
  useFrame(() => {
    if (ref.current) {
      // Animation fluide de l'échelle
      if (hovered) {
        ref.current.scale.lerp(new THREE.Vector3(hoverScale, hoverScale, hoverScale), 0.1);
      } else {
        ref.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });
  
  return {
    hovered,
    hoverProps: {
      onPointerOver: (e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      },
      onPointerOut: (e) => {
        e.stopPropagation();
        setHovered(false);
        document.body.style.cursor = 'auto';
      }
    }
  };
} 