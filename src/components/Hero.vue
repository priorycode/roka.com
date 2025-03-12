<script setup>

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  // Deshabilita animaciones en pantallas menores a 768px (móvil)
  disable: function() {
    return window.innerWidth < 768;
  },
  // Opcional: si quieres que se re-calcule al cambiar de tamaño la ventana
  startEvent: 'DOMContentLoaded'
});
</script>

<template>
  <section id="inicio" class="container-hero ">
    <div class="container h-full flex items-center">
      <h1 class="max-w-[800px]  text-[22px] md:text-[34px] text-white title font-semibold" data-aos="fade-right" data-aos-duration="600">
        Bienvenido a <span class="font-bold">ROKA</span>, donde gestionamos, protegemos y optimizamos su propiedad
        horizontal con eficiencia y compromiso.
      </h1>
    </div>
  </section>
</template>

<style scoped>
.container-hero{
  background: url("../assets/portada.png")  no-repeat;
  background-position-y: -340px;
  background-size: cover;
  height: 100vh;
}
.title{
  line-height: normal;
}
@media only screen and (max-width: 768px) {
  .container-hero{
    height: calc(100vh - 180px);
    background-position-y: bottom;
    background-position-x: -100px;
  }
}

</style>