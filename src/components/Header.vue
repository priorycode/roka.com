<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { Menu, X } from "lucide-vue-next";

// Estados reactivos
const activeSection = ref(""); // Sección activa
const isOpen = ref(false);     // Controla el menú mobile (abierto/cerrado)

// Secciones para IntersectionObserver
const sections = [
  { id: "nosotros", elements: ["nosotros", "mision", "fortaleza"] },
  { id: "servicios", elements: ["servicios", "gestion", "recursos"] },
  { id: "blog", elements: ["blog"] },
  { id: "contacto", elements: ["contacto"] }
];

// IntersectionObserver: detecta la sección visible
const observeSections = () => {
  const options = {
    root: null,
    threshold: 0.3
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        sections.forEach((section) => {
          if (section.elements.includes(entry.target.id)) {
            activeSection.value = section.id;
          }
        });
      }
    });
  }, options);

  sections.forEach((section) => {
    section.elements.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
  });

  return observer;
};

// Marca la sección activa al hacer clic en un enlace
const setActive = (section) => {
  activeSection.value = section;
};

// Montaje del componente
let observer;
onMounted(() => {
  observer = observeSections();
});

// Desmontaje del componente
onUnmounted(() => {
  if (observer) observer.disconnect();
  // Asegurarnos de devolver el scroll a normal por si quedara 'hidden'
  document.body.style.overflow = "auto";
});

// Toggle menú mobile
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

// Watch para desactivar/activar scroll según el estado del menú
watch(isOpen, (val) => {
  if (val) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});
</script>

<template>
  <header
      class="bg-white md:fixed w-full top-0 z-[9998] shadow-colorprimary shadow-2xl"
      data-aos="fade-down"
      data-aos-duration="600"
  >
    <div class="container h-[80px]  flex items-center justify-between">
      <!-- LOGO -->
      <img src="/logo.svg" alt="logo" class="w-[150px]" />

      <!-- NAV DESKTOP -->
      <nav class="hidden md:flex gap-[60px] uppercase font-semibold text-[20px] text-colorprimary">
        <a
            href="/"
            class="hover:font-bold transition-all duration-200"
            :class="{ 'font-bold': activeSection === '' }"
            @click="setActive('')"
        >
          Inicio
        </a>
        <a
            href="#nosotros"
            class="hover:font-bold transition-all duration-200"
            :class="{ 'font-bold': activeSection === 'nosotros' }"
            @click="setActive('nosotros')"
        >
          Nosotros
        </a>
        <a
            href="#servicios"
            class="hover:font-bold transition-all duration-200"
            :class="{ 'font-bold': activeSection === 'servicios' }"
            @click="setActive('servicios')"
        >
          Servicios
        </a>
        <a
            href="#blog"
            class="hover:font-bold transition-all duration-200"
            :class="{ 'font-bold': activeSection === 'blog' }"
            @click="setActive('blog')"
        >
          Blog
        </a>
        <a
            href="#contacto"
            class="hover:font-bold transition-all duration-200"
            :class="{ 'font-bold': activeSection === 'contacto' }"
            @click="setActive('contacto')"
        >
          Contáctanos
        </a>
      </nav>

      <!-- BOTÓN MENU MOBILE -->
      <button class="md:hidden p-2" @click="toggleMenu">
        <Menu class="w-6 h-6" />
      </button>
    </div>

    <!-- NAV MOBILE (slide derecha a izquierda) -->
    <transition name="slide">
      <nav
          v-if="isOpen"
          class="fixed top-0 right-0 z-[9999] h-screen w-[250px] bg-white shadow-colorprimary shadow-2xl
               flex flex-col gap-8 justify-start pt-32 items-end pr-10
               uppercase font-semibold text-[20px] text-colorprimary"
      >
        <!-- Botón para cerrar el menú -->
        <button class="absolute top-6 right-6 p-2" @click="toggleMenu">
          <X class="w-6 h-6" />
        </button>

        <a
            href="/"
            class="hover:font-bold transition-all duration-200 z-50"
            :class="{ 'font-bold': activeSection === '' }"
            @click="() => { setActive(''); toggleMenu(); }"
        >
          Inicio
        </a>
        <a
            href="#nosotros"
            class="hover:font-bold transition-all duration-200 "
            :class="{ 'font-bold': activeSection === 'nosotros' }"
            @click="() => { setActive('nosotros'); toggleMenu(); }"
        >
          Nosotros
        </a>
        <a
            href="#servicios"
            class="hover:font-bold transition-all duration-200"
            :class="{ 'font-bold': activeSection === 'servicios' }"
            @click="() => { setActive('servicios'); toggleMenu(); }"
        >
          Servicios
        </a>
        <a
            href="#blog"
            class="hover:font-bold transition-all duration-200"
            :class="{ 'font-bold': activeSection === 'blog' }"
            @click="() => { setActive('blog'); toggleMenu(); }"
        >
          Blog
        </a>
        <a
            href="#contacto"
            class="hover:font-bold transition-all duration-200"
            :class="{ 'font-bold': activeSection === 'contacto' }"
            @click="() => { setActive('contacto'); toggleMenu(); }"
        >
          Contáctanos
        </a>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
/* Transición para el nav mobile (slide desde la derecha) */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
