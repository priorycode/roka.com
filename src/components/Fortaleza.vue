<script setup>

</script>

<template>
  <section class="container-fortaleza">
    <div class="container h-full flex flex-col justify-center items-end text-white">
    <div class="max-w-[650px]">
      <h2 class="mb-8 text-[32px]  font-bold" data-aos="fade-right" data-aos-delay="100" data-aos-duration="600">
        Fortalezas
      </h2>
      <div class="text-[18px] text-justify">
        <p class="mb-4" data-aos="fade-right" data-aos-delay="200" data-aos-duration="600">
          Nos hemos comprometido, a través del desarrollo de nuestras competencias, a ofrecer tranquilidad y seguridad en temas clave como la gestión de cartera, el contrato de servicios de outsourcing (aseo, vigilancia entre otros que se requieran) y la recepción de solicitudes y reclamaciones para su pronta gestión, además de otros que se ajusten a la medida de las necesidades de su Propiedad Horizontal.
        </p>
        <p data-aos="fade-right" data-aos-delay="300" data-aos-duration="600">
          Gracias a nuestra experiencia, tenemos la certeza de que, con el trabajo en equipo amparado en nuestro portafolio de servicios, tendremos las herramientas necesarias para solucionar, mitigar al máximo, o eliminar las novedades que se puedan presentar.
        </p>
      </div>
    </div>
    </div>
  </section>
</template>

<style scoped>
.container-fortaleza{
  background: url("../assets/fortaleza.jpg") bottom no-repeat;
  background-size: cover;
  height: 100vh;
}
@media only screen and (max-width: 768px) {
  .container-fortaleza{
    background-position-x: -700px;
  }
}
</style>