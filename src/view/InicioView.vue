<script setup>
import Header from "@/components/Header.vue"
import Hero from "@/components/Hero.vue"
import Nosotros from "@/components/Nosotros.vue"
import Mision from "@/components/Mision.vue"
import Fortaleza from "@/components/Fortaleza.vue"
import Servicios from "@/components/Servicios.vue"
import Gestion from "@/components/Gestion.vue"
import Recursos from "@/components/Recursos.vue"
import Blog from "@/components/Blog.vue"
import Contact from "@/components/Contact.vue"
import BackToTop from "@/components/BackToTop.vue"
import RecursosHuman from "@/components/RecursosHuman.vue";
</script>

<template>
  <Header/>
  <main class="overflow-x-hidden">
    <Hero/>


  <Nosotros/>
    <div class="relative">
  <Mision/>
      <img src="@/assets/roka.png" alt="elemento de roka" class="absolute w-[180px] md:w-[350px] top-[45%]  md:top-[43%] right-10 md:right-20" data-aos="fade-up" data-aos-duration="600">
  <Fortaleza/>

    </div>


    <Servicios/>
    <Gestion/>
    <RecursosHuman/>

    <Blog/>

    <Contact/>

    <!-- Componente que muestra el botón de "Volver al inicio" -->
    <BackToTop/>
  </main>
</template>

<style scoped>
/* Estilos propios si los necesitas */
</style>
