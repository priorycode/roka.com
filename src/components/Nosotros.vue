<script setup>
</script>

<template>
  <section id="nosotros" class="container-nosotros">
    <div class="container h-full flex flex-col pt-16 md:pt-0 md:justify-center text-white">
      <!-- Título animado -->
      <h2
          class="mb-8 text-[42px] font-bold uppercase"
          data-aos="fade-right"
          data-aos-duration="600"
      >
        ¿Quiénes somos?
      </h2>

      <div class="max-w-[400px] text-justify text-[18px]">
        <!-- Primer párrafo con animación progresiva -->
        <p
            class="mb-6"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="600"
        >
          Somos una compañía conformada por un equipo de profesionales interdisciplinarios que hemos querido aunar esfuerzos para ofrecer un portafolio de servicios en el campo de la Administración de Propiedad Horizontal, caracterizados por la calidad y transparencia.
        </p>

        <!-- Segundo párrafo con mayor retraso para fluidez -->
        <p
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="600"
        >
          ROKA nace como alternativa dentro de un sector de la economía cuyo dinamismo va en ascenso, lo cual se ve reflejado en la oferta de servicios de Administración de Propiedad Horizontal por parte de profesionales que han decidido incursionar en este sector.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container-nosotros {
  background: url("../assets/nosotros.jpg") bottom no-repeat;
  background-size: cover;
  height: 100vh;
}
@media only screen and (max-width: 768px) {
  .container-nosotros{

    background-position-x: -150px;
  }
}
</style>
