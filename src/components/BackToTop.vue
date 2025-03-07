<!-- BackToTop.vue -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {ArrowUpFromDot} from 'lucide-vue-next'
const showButton = ref(false)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

let handleScroll

onMounted(() => {
  const serviciosSection = document.getElementById('servicios')
  if (!serviciosSection) return

  handleScroll = () => {
    // Distancia del contenedor "servicios" al tope de la ventana
    const serviciosOffset = serviciosSection.offsetTop

    // Muestra el botón cuando se hace scroll más allá de la sección "servicios"
    showButton.value = window.scrollY >= serviciosOffset
  }

  window.addEventListener('scroll', handleScroll)
  // Ejecutamos una vez para el caso en que se recargue la página en medio
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <button
      v-if="showButton"
      class="floating-button p-4 rounded-full bg-colorprimary border-2 border-white z-40 shadow"
      @click="scrollToTop"
  >
    <ArrowUpFromDot />
  </button>
</template>

<style scoped>
.floating-button {
  position: fixed;
  bottom: 20px;
  right: 20px;

  color: #fff;
  cursor: pointer;
  font-size: 18px;
}
</style>
