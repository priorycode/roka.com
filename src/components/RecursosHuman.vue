<script setup>

import {Dot, Minus} from "lucide-vue-next";
</script>

<template>
  <section>
    <div class="container flex items-start justify-between md:gap-[80px] pt-[38px] md:pt-[68px]">
      <div
          class="text-[#0C4651] max-w-[600px] mb-10 md:mb-32"
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
      <div class=" items-center hidden lg:flex relative">
        <div class="w-[300px] h-[300px] rounded-full">
          <img src="@/assets/recursoshuman.png" alt="Hombre de Roka" class="w-[300px] h-[300px] object-cover rounded-full" />
        </div>
       <div class="w-[400px] h-[400px] -ml-24 rounded-full ">
         <img src="@/assets/blog2.png" alt="Trabajadores de Roka" class="w-[400px] h-[400px] object-cover object-center rounded-full">
       </div>
        <img src="@/assets/points.svg" alt="puntos" class="absolute -top-10 right-2">
      </div>
    </div>
    <div class="py-[68px] mt-[38px] bg-[#0C4651] relative ">

      <div class="w-[80px] h-[30px] md:w-[130px] md:h-[40px] bg-[#26B7B0] absolute -top-[15px] md:-top-5 left-0"></div>
      <div class="w-[80px] h-[30px] md:w-[130px] md:h-[40px] bg-[#26B7B0] absolute -top-[15px] md:-top-5 right-0"></div>
      <div class="triangulo absolute -top-14 md:-top-8"></div>
      <div class="container flex items-start gap-10 md:gap-0 md:justify-between">
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
.triangulo {
  width: 0;
  height: 0;
  border-left: 80px solid transparent;
  border-right: 80px solid transparent;
  border-bottom: 100px solid white;
  right: 50%;
  transform: rotate(200grad) translate(-50%, 0);

}
</style>