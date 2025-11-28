"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Environment } from "@react-three/drei"
import { useRef, useMemo } from "react"
import type * as THREE from "three"
import { useTheme } from "next-themes"

function FloatingSphere({
  position,
  scale,
  color,
  speed = 1,
}: {
  position: [number, number, number]
  scale: number
  color: string
  speed?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.1}
          metalness={0.8}
          distort={0.4}
          speed={2}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  )
}

function FloatingTorus({
  position,
  scale,
  color,
}: {
  position: [number, number, number]
  scale: number
  color: string
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.4, 32, 64]} />
        <MeshWobbleMaterial
          color={color}
          roughness={0.2}
          metalness={0.9}
          factor={0.3}
          speed={2}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  )
}

function FloatingOctahedron({
  position,
  scale,
  color,
}: {
  position: [number, number, number]
  scale: number
  color: string
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={1.8} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={color} roughness={0.15} metalness={0.95} transparent opacity={0.9} />
      </mesh>
    </Float>
  )
}

function GlowingRing({
  position,
  scale,
  color,
}: {
  position: [number, number, number]
  scale: number
  color: string
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1.5, 0.08, 16, 100]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} roughness={0.1} metalness={1} />
      </mesh>
    </Float>
  )
}

function Scene() {
  const { theme } = useTheme()

  const colors = useMemo(
    () => ({
      primary: theme === "dark" ? "#8b5cf6" : "#7c3aed",
      secondary: theme === "dark" ? "#06b6d4" : "#0891b2",
      accent: theme === "dark" ? "#f472b6" : "#ec4899",
      highlight: theme === "dark" ? "#a78bfa" : "#8b5cf6",
    }),
    [theme],
  )

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color={colors.primary} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color={colors.secondary} />
      <spotLight position={[0, 10, 0]} intensity={0.8} color={colors.accent} angle={0.5} />

      <FloatingSphere position={[3, 1, -2]} scale={1.2} color={colors.primary} speed={0.8} />
      <FloatingSphere position={[-3.5, -1, -3]} scale={0.8} color={colors.secondary} speed={1.2} />
      <FloatingTorus position={[-2, 2, -4]} scale={0.6} color={colors.accent} />
      <FloatingOctahedron position={[2.5, -1.5, -2]} scale={0.7} color={colors.highlight} />
      <GlowingRing position={[0, 0, -5]} scale={1.5} color={colors.primary} />
      <FloatingSphere position={[4, 2.5, -5]} scale={0.5} color={colors.accent} speed={1.5} />
      <FloatingOctahedron position={[-4, 1, -4]} scale={0.4} color={colors.secondary} />

      <Environment preset="city" />
    </>
  )
}

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
