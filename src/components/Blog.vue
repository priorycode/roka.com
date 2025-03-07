<script setup>
import {ref, watch} from "vue";
import blog1 from '@/assets/blog1.png'
import blog2 from '@/assets/blog2.png'
import blog3 from '@/assets/blog3.png'
import blog4 from '@/assets/blog4.png'
import BlogComponent from "@/components/blogComponent.vue";

const isModalOpen = ref(false);
// Nueva variable para el ID seleccionado
const selectedId = ref(null);

const openModal = (id) => {
  // Asigna el ID que se reciba y abre el modal
  selectedId.value = id;
  isModalOpen.value = true;
};
const closeModal = () => {
  isModalOpen.value = false;
};

watch(isModalOpen, (newValue) =>{
  if (newValue){
    document.body.style.overflowY = "hidden";
  }else{
    document.body.style.overflow = "auto";
  }
})

const noticias = [
  {
    titulo: "¿Porque es importante mantener limpias las áreas comunes?",
    descripcion: "Mantener limpias las zonas comunes es una tarea fundamental en cualquier comunidad de propietarios.",
    autor: "Roka",
    fecha: "15 de enero 2025",
    imagen: blog1
  },
  {
    titulo: "Importancia de tener un auxiliar en los parqueaderos",
    descripcion: "Las tareas que realiza un auxiliar controlador de parking son muy amplias ofreciendo una labor completa por parte de técnicos especialistas.",
    autor: "Roka",
    fecha: "20 de enero 2025",
    imagen: blog2
  },
  {
    titulo: "¿Por qué es tan importante mantener limpia el agua de la piscina?",
    descripcion: "Toda piscina, ya sea de carácter doméstico o profesional, implica dedicar tiempo a su mantenimiento.",
    autor: "Sebastian",
    fecha: "15 de enero 2025",
    imagen: blog3
  },
  {
    titulo: "La importancia de una buena gestión financiera en los PH.",
    descripcion: "Las comunidades residenciales, como conjuntos habitacionales, condominios y urbanizaciones cerradas, juegan un papel crucial en la vida de muchas personas",
    autor: "Sebastian",
    fecha: "15 de enero 2025",
    imagen: blog4
  }
];
</script>

<template>
  <div id="blog" class="container-hero h-full  md:h-screen pb-3 md:pb-0">
    <div class="container flex items-start h-full pt-6 pb-6 md:pb-0 md:pt-40">
      <div>
        <h2
            class="text-white text-[28px] md:text-[42px] text-shadow font-bold mb-6 md:mb-10"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
          Blog
        </h2>
        <div
            class="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div
              v-for="(noticia, index) in noticias"
              :key="index"
              class="w-full cursor-pointer hover:scale-110 md:max-w-[300px] container-card p-4 rounded-[25px]"
              data-aos="zoom-in"
              data-aos-duration="1100"
              @click="openModal(index + 1)"
          >
            <img
                :src="noticia.imagen"
                class="rounded-[20px] mb-[15px] h-[160px] w-full object-cover"
                data-aos="fade-up"
                data-aos-duration="800"
            />
            <h3
                class="mb-2 text-white text-[16px]"
                data-aos="fade-up"
                data-aos-duration="900"
            >
              {{ noticia.titulo }}
            </h3>
            <p
                class="text-white text-[12px] md:text-[14px] mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
              {{ noticia.descripcion }}
            </p>
            <div
                class="flex items-center gap-2"
                data-aos="fade-up"
                data-aos-duration="1100"
            >
              <div>
                <img
                    :src="noticia.imagen"
                    class="w-5 h-5 object-cover rounded-full"
                />
              </div>
              <span class="text-white text-[12px]">
                {{ noticia.autor }} • {{ noticia.fecha }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Pasamos el selectedId y el estado del modal al BlogComponent -->
  <BlogComponent
      :isOpen="isModalOpen"
      :selectedId="selectedId"
      @close="closeModal"
      data-aos="fade-in"
      data-aos-duration="1200"
  />
</template>


<style scoped>
.container-hero {
  background-image: url("@/assets/blog.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.container-card {
  background: rgba(0, 0, 0, 0.52);
}
.container-card:hover{
  transition: all .2s ease-in-out;
  background: rgba(0, 0, 0, 0.7);
}
</style>
