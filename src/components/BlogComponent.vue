<script setup>
import { X } from 'lucide-vue-next'
import blog1 from '@/assets/blog1.png'
import blog2 from '@/assets/blog2.png'
import blog3 from '@/assets/blog3.png'
import blog4 from '@/assets/blog4.png'
import { computed } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  selectedId: Number
});

const emit = defineEmits(["close"]);


const noticias = [
  {
    id: 1,
    titulo: "¿Por qué es importante mantener limpias las áreas comunes?",
    contenido: [
      "<p>Mantener limpias las zonas comunes es una tarea fundamental en cualquier comunidad de propietarios.</p>",
      "<p>Sin embargo, a menudo no se le da la importancia que merece, lo que puede tener graves consecuencias para la salud y bienestar de los propietarios, así como para la imagen de la comunidad. En este artículo, hablaremos de la importancia de mantener limpias las zonas comunes, los problemas que pueden surgir si no se hace, y las ventajas de contar con una empresa de limpieza profesional.</p>",
      "<p>Mantener limpias las zonas comunes es esencial para la salud y el bienestar de los propietarios. Estas áreas suelen acumular polvo, suciedad, gérmenes y bacterias, que pueden provocar problemas respiratorios y alergias, entre otras dolencias. Además, si no se limpian de forma regular, pueden aparecer plagas de insectos o roedores, lo que supone un grave problema de salud pública. Por otro lado, mantener limpias las zonas comunes es fundamental para mantener una buena imagen de la comunidad.</p>",
      "<p>Si estas áreas están descuidadas, pueden transmitir una imagen de abandono y falta de cuidado, lo que puede repercutir en la percepción que tienen los propietarios de sus propiedades y en el valor de estas.</p>",
    ],
    autor: "ROKA Admin",
    fecha: "06 de marzo 2025",
    imagen: blog1
  },
  {
    id: 2,
    titulo: "Importancia de tener un auxiliar en los parqueaderos",
    contenido: [
      "<p>Cuando hablamos de parking, hacemos referencia a todo recinto cerrado privado o público que se destina al aparcamiento de vehículos al aire libre o en un edificio. Ya sea de empresas, centros de ocio, museos, hoteles, hospitales, etc.</p>",
      "<p>Las tareas que realiza un auxiliar controlador de parking son muy amplias ofreciendo una labor completa por parte de técnicos especialistas. El objetivo principal de este profesional es aportar la mejor solución para el correcto funcionamiento del parking.</p>",
      "<p>Por ello, no sólo son los encargados de controlar el tráfico en el interior y la validación de tickets de las personas y vehículos que accedan al aparcamiento, con los mejores equipos tecnológicos. Sino que además, su formación les permite realizar otro tipo de tareas específicas.</p>",
      "<p>● Apertura, cierre y control de todos los accesos al recinto.</p>",
      "<p>● Controlar y verificar que las personas y vehículos que accedan estén autorizados.</p>",
      "<p>● Controlar las zonas y espacios reservados del parking.</p>",
      "<p>● Mantenimiento de las instalaciones.</p>",
      "<p>● Atención al cliente y orientación a los usuarios y recepción de paquetes bajo autorización.</p>"
    ],
    autor: "ROKA Admin",
    fecha: "06 de marzo 2025",
    imagen: blog2
  },
  {
    id: 3,
    titulo: "¿Por qué es tan importante mantener limpia el agua de la piscina?",
    contenido: [
      "<p>Una pileta es como una mascota: te aporta mucha felicidad, pero necesita de constante limpieza. Conservarla es tan necesario que, si no estás dispuesto a mantener limpia el agua de la piscina, es mejor que no la tengas.</p>",
      "<p>Toda piscina, ya sea de carácter doméstico o profesional, implica dedicar tiempo a su mantenimiento. Si no puedes o no quieres hacerlo por ti mismo, siempre puedes contratar a profesionales que se encarguen de su correcta limpieza.</p>",
      "<p>No puedes instalar una alberca y olvidarte de su mantenimiento periódico (y no solo cuando llega el verano). Contratar a una empresa especializada en el tratamiento de aguas es, pues, la forma más fácil de mantener limpia la piscina.</p>",
    ],
    autor: "ROKA Admin",
    fecha: "06 de marzo 2025",
    imagen: blog3
  },
  {
    id: 4,
    titulo: "La importancia de una buena gestión financiera en los PH",
    contenido: [
        "<p>Las comunidades residenciales, como conjuntos habitacionales, condominios y urbanizaciones cerradas, juegan un papel crucial en la vida de muchas personas al proporcionar un entorno seguro y cómodo para vivir. Sin embargo, para mantener el funcionamiento y la calidad de vida en estas comunidades, es esencial contar con una buena gestión financiera. La administración adecuada de los recursos económicos de una comunidad residencial no solo garantiza el bienestar de los residentes, sino que también contribuye a la sostenibilidad a largo plazo y al aumento del valor de las propiedades. A continuación, se exploran algunos de los motivos por los que una gestión financiera sólida es fundamental en estas comunidades.</p>",
      "<h3 class='font-bold'>1. Mantenimiento y Mejoras Constantes</h3>",
      "<p>Una gestión financiera eficiente permite a las comunidades residenciales llevar a cabo el mantenimiento regular de sus instalaciones y áreas comunes. Desde el cuidado de jardines y piscinas hasta la reparación de infraestructuras como caminos y sistemas eléctricos, el mantenimiento adecuado es esencial para garantizar la seguridad y comodidad de los residentes. Además, una buena administración financiera también permite la implementación de mejoras a lo largo del tiempo, lo que puede aumentar la satisfacción de los residentes y el valor de las propiedades.</p>",
      "<h3 class='font-bold'>2. Respaldo en Casos de Emergencia</h3>",
      "<p>Los imprevistos pueden ocurrir en cualquier momento, desde daños causados por desastres naturales hasta problemas estructurales en las instalaciones. Una gestión financiera adecuada permite a las comunidades residenciales contar con un fondo de reserva para emergencias. Estos fondos proporcionan la tranquilidad de que hay recursos disponibles para abordar situaciones críticas sin poner en riesgo la estabilidad financiera de la comunidad o aumentar significativamente las cuotas de los residentes.</p>",
      "<h3 class='font-bold'>3. Evitar el Incremento de Deudas y Cuotas Especiales</h3>",
      "<p>Una mala gestión financiera puede llevar a una acumulación de deudas, lo que podría resultar en la necesidad de imponer cuotas especiales a los residentes para cubrir gastos inesperados. Estas cuotas adicionales pueden causar insatisfacción entre los residentes y dificultar la planificación financiera personal. Una administración responsable y proactiva de los recursos económicos puede ayudar a evitar la necesidad de aumentar las cuotas regulares o implementar cargos adicionales.</p>",
      "<h3 class='font-bold'>4. Promoción de un Ambiente Armonioso</h3>",
      "<p>La transparencia en la gestión financiera fomenta la confianza y la armonía entre los residentes. Cuando los residentes tienen una comprensión clara de cómo se administran los recursos y en qué se invierten las cuotas, es más probable que se sientan parte de una comunidad bien gestionada. Esto puede reducir conflictos y malentendidos relacionados con el dinero, lo que a su vez contribuye a un ambiente más pacífico y agradable para vivir.</p>",
      "<h3 class='font-bold'>5. Aumento del Valor de las Propiedades</h3>",
      "<p>Una comunidad residencial bien cuidada y financieramente sólida tiende a tener un mayor valor en el mercado inmobiliario. Los compradores potenciales consideran la calidad de la gestión financiera y las comodidades disponibles al evaluar propiedades. Por lo tanto, una buena administración financiera puede tener un impacto directo en el valor de las propiedades dentro de la comunidad.</p>",
        "<p>En resumen, una gestión financiera sólida es esencial para el bienestar y la prosperidad de las comunidades residenciales. Desde el mantenimiento de instalaciones hasta la creación de fondos de reserva, una administración eficiente contribuye a la calidad de vida de los residentes y al valor a largo plazo de las propiedades. La transparencia, la planificación a largo plazo y la responsabilidad son elementos clave para lograr una gestión financiera exitosa en estas comunidades.</p>"
    ],
    autor: "ROKA Admin",
    fecha: "06 de marzo 2025",
    imagen: blog4
  }
];

const selectedNoticia = computed(() => {
  return noticias.find(noticia => noticia.id === props.selectedId);
});
</script>

<template>
  <div v-if="isOpen" class=" fixed w-full h-full z-[9999]  inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div
        class="container-card pt-28 md:pt-16  text-white py-6 px-5 md:px-60 shadow-lg relative animate-fadeIn container-all
             w-full h-full max-h-screen flex flex-col items-center overflow-y-auto"
    >

      <div class="max-w-[800px]">
        <h3 class="text-[32px] md:text-[42px] font-medium text-left mb-4">
          {{ selectedNoticia?.titulo || 'Título del Blog' }}
        </h3>
        <span class="text-white  text-[16px]">
            {{ selectedNoticia.autor }} • {{ selectedNoticia.fecha }}
        </span>

        <div v-if="selectedNoticia?.contenido" class="mt-4 text-justify">
          <!-- Aquí usamos v-html para respetar el formato HTML -->
          <div
              v-for="(paragraph, index) in selectedNoticia.contenido"
              :key="index"
              class="mb-4"
              v-html="paragraph"
          />
        </div>
        <img
            :src="selectedNoticia?.imagen || '@/assets/blog1.png'"
            class="rounded-[20px] w-full h-auto md:h-[400px] object-cover mb-3"
        />
      </div>
      <button
          @click="emit('close')"
          class="px-2 py-2 bg-gray-200 text-white rounded-lg hover:bg-gray-300 absolute top-10 md:top-auto right-5 md:right-20"
      >
        <X class="text-gray-500" />
      </button>
    </div>
  </div>
</template>
<style scoped>
.container-card {
  background: rgba(43, 58, 79, 0.9);
}

</style>