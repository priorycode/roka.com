<script setup>
import { Minus, Dot } from 'lucide-vue-next';
</script>

<template>
  <section class="container-recursos">
    <div class="container flex flex-col pt-6 md:pt-20">
      <!-- Gestión del Recurso Humano -->
      <div
          class="text-[#0C4651] max-w-[600px] mb-24 md:mb-32"
          data-aos="fade-right"
          data-aos-duration="600"
      >
        <h2 class="text-[28px] md:text-[32px] font-bold mb-4">Gestión del Recurso Humano</h2>
        <p class="text-[14px] md:text-[18px]" data-aos="fade-up" data-aos-duration="600">
          ROKA servicios integrales S.A.S, ofrece soluciones integrales para la gestión de recursos humanos, garantizando eficiencia y calidad en cada servicio.
        </p>
        <p class="text-[14px] md:text-[18px] mt-3" data-aos="fade-up" data-aos-duration="700">
          Cuenta con personal altamente capacitado para las siguientes funciones:
        </p>
        <ul class="text-[14px] md:text-[18px] mt-2">
          <li class="flex items-center gap-1" data-aos="fade-left" data-aos-duration="600">
            <Minus /> Aseo y mantenimiento
          </li>
          <li class="flex items-center gap-1" data-aos="fade-left" data-aos-duration="700">
            <Minus /> Administración de propiedad Horizontal
          </li>
          <li class="flex items-center gap-1" data-aos="fade-left" data-aos-duration="800">
            <Minus /> Servicio de Conserjería
          </li>
          <li class="flex items-center gap-1" data-aos="fade-left" data-aos-duration="900">
            <Minus /> Suministro de personal para parqueaderos (cajeros, operarios de patio)
          </li>
          <li class="flex items-center gap-1" data-aos="fade-left" data-aos-duration="1000">
            <Minus /> Administración de parqueaderos.
          </li>
        </ul>
      </div>

      <div class="flex items-start justify-between">
        <!-- Gestión Financiera -->
        <div data-aos="fade-up" data-aos-duration="600">
          <h2 class="text-[18px] md:text-[32px] font-bold mb-6 text-[#25B7AF]">Gestión Financiera</h2>
          <ul class=" text-[12px] md:text-[18px] text-white flex flex-col gap-2">
            <li class="flex items-center" data-aos="fade-up" data-aos-duration="600"><Dot/> Facturación</li>
            <li class="flex items-center" data-aos="fade-up" data-aos-duration="700"><Dot/> Cartera</li>
            <li class="flex items-center" data-aos="fade-up" data-aos-duration="800"><Dot/> Tesorería (Pago a proveedores)</li>
            <li class="flex items-center" data-aos="fade-up" data-aos-duration="900"><Dot/> Gestión de la liquidez</li>
            <li class="flex items-center" data-aos="fade-up" data-aos-duration="1000"><Dot/> Análisis financiero de la situación de la copropiedad</li>
          </ul>
        </div>

        <!-- Gestión Legal -->
        <div data-aos="fade-up" data-aos-duration="700">
          <h2 class="text-[18px] md:text-[32px] font-bold mb-6 text-[#25B7AF]">Gestión Legal</h2>
          <p class=" text-[12px] md:text-[18px] text-white mb-3" data-aos="fade-up" data-aos-duration="600">
            Contamos con abogados de la mejor calidad para temas de:
          </p>
          <ul class="text-[12px] md:text-[18px] text-white flex flex-col gap-2">
            <li class="flex items-center" data-aos="fade-up" data-aos-duration="700"><Dot/> Propiedad horizontal</li>
            <li class="flex items-center" data-aos="fade-up" data-aos-duration="800"><Dot/> Cobro jurídico</li>
            <li class="flex items-center" data-aos="fade-up" data-aos-duration="900"><Dot/> Asuntos legales</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container-recursos {
  background: url("../assets/humanos.jpg") center no-repeat;
  background-size: cover;
  height: 100vh;
}
@media only screen and (max-width: 768px) {
  .container-recursos{
    background-position-y: bottom;
    background-position-x: left;
  }
}
</style>
