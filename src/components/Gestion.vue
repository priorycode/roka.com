<script setup>
import { Dot } from 'lucide-vue-next'
</script>

<template>
  <section class="container-gestion">
    <div class="container h-full pb-4 md:pb-8 pt-40 flex  items-end">
      <div >
        <!-- Título con animación -->
        <h2
            class=" mb-16 md:mb-8 text-[28px]  md:text-[32px] text-colorprimary md:text-white font-bold"
            data-aos="fade-right"
            data-aos-duration="600"
        >
          Gestión Administrativas
        </h2>

        <div class="flex flex-col md:flex-row gap-1 md:gap-[280px] text-[14px] md:text-[18px] text-white">
          <!-- Primera lista con animaciones -->
          <ul class="flex flex-col gap-1 md:gap-4">
            <li class="flex items-center" data-aos="fade-up" data-aos-duration="600">
              <Dot /> Representación legal de la copropiedad
            </li>
            <li class="flex items-center" data-aos="fade-up" data-aos-duration="700">
              <Dot /> Elaboración y ejecución del presupuesto de funcionamiento
            </li>
            <li class="flex items-center" data-aos="fade-up" data-aos-duration="800">
              <Dot /> Elaboración de informes para consejos y asambleas
            </li>
            <li class="flex items-center" data-aos="fade-up" data-aos-duration="900">
              <Dot /> Gestión del recurso humano
            </li>
          </ul>

          <!-- Segunda lista con animaciones -->
          <ul class="flex flex-col gap-1 md:gap-4">
            <li class="flex items-center" data-aos="fade-up" data-aos-duration="600">
              <Dot /> Gestión del seguro y reclamaciones a aseguradoras
            </li>
            <li class="flex items-center" data-aos="fade-up" data-aos-duration="700">
              <Dot /> Comunicaciones relacionadas a la copropiedad
            </li>
            <li class="flex items-center" data-aos="fade-up" data-aos-duration="800">
              <Dot /> Control del consumo de servicios públicos
            </li>
            <li class="flex items-center" data-aos="fade-up" data-aos-duration="900">
              <Dot /> Ejecución de órdenes de asambleas y consejos
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container-gestion {
  background: url("../assets/gestion.png") center no-repeat;
  background-size: cover;
  height: 100vh;
}
@media only screen and (max-width: 768px) {
  .container-gestion{
    background-position-y: bottom;
  }
}
</style>
