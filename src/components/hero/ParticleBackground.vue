<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useReducedMotion } from '@/composables/useReducedMotion'

const { prefersReducedMotion } = useReducedMotion()

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animFrame: number
let ctx: CanvasRenderingContext2D | null = null

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
  alphaDir: number
}

const particles: Particle[] = []
const mouse = { x: -1000, y: -1000 }
const CONNECTION_DIST = 120
const PARTICLE_COUNT = 80

function initParticles(w: number, h: number) {
  particles.length = 0
  const count = window.innerWidth < 768 ? 40 : PARTICLE_COUNT
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.6 + 0.2,
      alphaDir: Math.random() > 0.5 ? 0.005 : -0.005,
    })
  }
}

function draw() {
  if (!ctx || !canvasRef.value) return
  const { width, height } = canvasRef.value

  ctx.clearRect(0, 0, width, height)

  for (const p of particles) {
    // Update position
    p.x += p.vx
    p.y += p.vy
    p.alpha += p.alphaDir
    if (p.alpha > 0.8 || p.alpha < 0.1) p.alphaDir *= -1

    // Wrap around
    if (p.x < 0) p.x = width
    if (p.x > width) p.x = 0
    if (p.y < 0) p.y = height
    if (p.y > height) p.y = 0

    // Mouse repulsion
    const dx = p.x - mouse.x
    const dy = p.y - mouse.y
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < 100) {
      p.x += (dx / dist) * 1.5
      p.y += (dy / dist) * 1.5
    }

    // Draw particle
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(108, 99, 255, ${p.alpha})`
    ctx.fill()
  }

  // Draw connections
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < CONNECTION_DIST) {
        const opacity = (1 - dist / CONNECTION_DIST) * 0.2
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.strokeStyle = `rgba(108, 99, 255, ${opacity})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
    }
  }

  animFrame = requestAnimationFrame(draw)
}

function resize() {
  if (!canvasRef.value) return
  canvasRef.value.width = window.innerWidth
  canvasRef.value.height = window.innerHeight
  initParticles(canvasRef.value.width, canvasRef.value.height)
}

function onMouseMove(e: MouseEvent) {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

onMounted(() => {
  if (!canvasRef.value || prefersReducedMotion.value) return

  ctx = canvasRef.value.getContext('2d')
  resize()
  draw()

  window.addEventListener('resize', resize, { passive: true })
  window.addEventListener('mousemove', onMouseMove, { passive: true })
})

onUnmounted(() => {
  cancelAnimationFrame(animFrame)
  window.removeEventListener('resize', resize)
  window.removeEventListener('mousemove', onMouseMove)
})
</script>

<template>
  <canvas
    v-if="!prefersReducedMotion"
    ref="canvasRef"
    class="particle-canvas"
    aria-hidden="true"
  />
  <!-- Reduced motion fallback: gradient orbs -->
  <div v-else class="gradient-bg" aria-hidden="true">
    <div class="orb orb-1" />
    <div class="orb orb-2" />
    <div class="orb orb-3" />
  </div>
</template>

<style scoped>
.particle-canvas {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.gradient-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: var(--color-primary);
  top: -200px;
  left: -200px;
  animation: float 8s ease-in-out infinite;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: var(--color-accent-cyan);
  top: 50%;
  right: -100px;
  animation: float 10s ease-in-out infinite reverse;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: var(--color-accent-pink);
  bottom: -100px;
  left: 30%;
  animation: float 12s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-30px) scale(1.05); }
}
</style>
