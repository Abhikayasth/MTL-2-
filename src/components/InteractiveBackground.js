import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function InteractiveBackground() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Create icosahedron geometry
    const geometry = new THREE.IcosahedronGeometry(1, 1)
    const material = new THREE.MeshBasicMaterial({
      color: 0x8a2be2,
      wireframe: true,
    })
    const icosahedron = new THREE.Mesh(geometry, material)
    scene.add(icosahedron)

    camera.position.z = 5

    // Mouse interaction to control rotation
    const mouse = { x: 0, y: 0 }

    const handleMouseMove = (event) => {
      // Calculate normalized mouse position (range -1 to 1)
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate)

      // Use mouse position to control rotation
      icosahedron.rotation.x += 0.005 + mouse.y * 0.05
      icosahedron.rotation.y += 0.005 + mouse.x * 0.05

      renderer.render(scene, camera)
    }

    animate()

    // Resize handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none" />
}
