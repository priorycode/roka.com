<script setup>
import { Facebook, Instagram, MapPin, Mail, Globe } from 'lucide-vue-next';
</script>

<template>
  <section id="contacto" class="container-contact pb-10 md:pb-0">
    <div
        class="container flex flex-col pt-10  md:pt-32 md:flex-row items-start md:items-center gap-12 md:gap-[160px]"
        data-aos="fade-in"
        data-aos-duration="1000"
    >
      <!-- COLUMNA IZQUIERDA -->
      <div
          class="flex-1"
          data-aos="fade-right"
          data-aos-duration="800"
      >
        <h2 class="text-white text-[28px] md:text-[32px] font-bold mb-10 md:mb-[60px]">Contáctanos</h2>
        <p class="text-white text-[18px] md:text-[22px] mb-4 md:mb-8 font-bold">
          ¿Te interesa alguno de nuestros servicios?
        </p>
        <p class="text-white text-[14px] md:text-[18px]">
          Estamos aquí para brindarte soluciones integrales. Contáctanos y descubre cómo podemos ayudarte a optimizar la administración y el mantenimiento de tu propiedad horizontal.
        </p>
        <div
            class="flex gap-4 mt-10 md:mt-[120px] text-white"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
        >
          <a
              href="https://www.facebook.com/profile.php?id=61573027094047"
              target="_blank"
              rel="noopener"
          >
            <Facebook class="w-[32px] h-[32px]" />
          </a>
          <a
              href="https://www.instagram.com/roka_servicios_integrales?igsh=MXY5ZDFtMHl6cHd0aQ=="
              target="_blank"
              rel="noopener"
          >
            <Instagram class="w-[32px] h-[32px]" />
          </a>
        </div>
      </div>

      <!-- COLUMNA DERECHA -->
      <div
          class="container-contacto w-full md:w-auto flex-1 border-2 border-gray-400 rounded-[15px] md:rounded-[30px] p-8 md:p-[80px]"
          data-aos="zoom-in"
          data-aos-duration="800"
      >
        <div class="flex flex-col gap-6">
          <a
              href="https://maps.app.goo.gl/Nhu2jRyejd9vf36a9"
              target="_blank"
              class="flex items-center gap-8 text-[14px] md:text-[20px] text-white"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="700"
          >
            <MapPin />
            <p> Cra. 84 # 37B - 82, Medellín, Antioquia.</p>
          </a>

          <a
              href="https://wa.me/573148497333?text=Hola,%20Estoy%20interesado%20en%20sus%20servicios%20de%20"
              target="_blank"
              class="flex items-center gap-8 text-[14px] md:text-[20px] text-white"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="700"
          >
            <!-- Ícono de WhatsApp -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
            >
              <path
                  fill="currentColor"
                  d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.2 8.2 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18s.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"
              />
            </svg>
            <p>+57 (314) 849 7333</p>
          </a>

          <a
              href="mailto:rokaph@rokaph.com?subject=Necesito%20de%20sus%20servicios&body=Hola,%20estoy%20interesado%20en%20sus%20servicios%20de"
              target="_blank"
              class="flex items-center gap-8 text-[14px] md:text-[20px] text-white"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="700"
          >
            <Mail />
            <p>contacto@rokaph.com</p>
          </a>

          <a
              href="#inicio"
              class="flex items-center gap-8 text-[14px] md:text-[20px] text-white"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="700"
          >
            <Globe />
            www.rokaph.com
          </a>
        </div>
        <img
            src="../assets/qr.svg"
            class="w-[150px] mt-10 md:mt-[68px]"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="800"
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.container-contact {
  background: url("../assets/contact.png") center no-repeat;
  background-size: cover;
  min-height: 100vh;
}

.container-contacto {
  background: rgba(0, 0, 0, 0.54);
}

@media (max-width: 768px) {
  .container-contact {
    background-position: top center;
  }
}
</style>
