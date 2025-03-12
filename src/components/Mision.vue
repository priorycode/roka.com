<script setup>

</script>

<template>
  <section class="container-mision">
    <div class="container h-full flex flex-col pt-16 md:pt-0 md:justify-center items-end text-white">
      <div class="max-w-[450px] text-justify">
        <div class="mb-10">
          <h2 class="mb-8 text-[32px]  font-bold" data-aos="fade-right" data-aos-delay="100" data-aos-duration="600">
            Misión
          </h2>
          <p class="text-[18px]" data-aos="fade-right" data-aos-delay="200" data-aos-duration="600">
            Prestar servicios integrales de Administración de Propiedad Horizontal, gestión contable y soporte operativo, logrando la tranquilidad, satisfacción y bienestar de nuestros clientes y el aumento en la valorización del patrimonio de los copropietarios.
          </p>
        </div>
        <div>
          <h2 class="mb-8 text-[32px]  font-bold" data-aos="fade-right" data-aos-delay="300" data-aos-duration="600">
            Visión
          </h2>
          <p class="text-[18px]" data-aos="fade-right" data-aos-delay="400" data-aos-duration="600">
            Para el 2028, ROKA será una empresa reconocida en el mercado local por su
            capacidad innovadora, su alta competitividad, su liderazgo y su contribución al desarrollo sostenible de las copropiedades en la prestación de servicios de Administración de Propiedad Horizontal de conformidad con los requisitos de Ley.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container-mision {
  background: url("../assets/mision.jpg") top no-repeat;
  background-size: cover;
  height: 100vh;
}
@media only screen and (max-width: 768px) {
  .container-mision{

    background-position-x: right;
  }
}
</style>