<template>
  <div class="min-h-screen pt-24 sm:pt-28 lg:pt-32">
    <!-- Page Header -->
    <section class="py-8 sm:py-12 lg:py-16 bg-transparent text-gray-800">
      <div class="container mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h1 class="text-4xl sm:text-5xl lg:text-7xl font-windsong mb-6 px-4 sm:px-6 lg:px-8" data-aos="fade-up">Nous ont fait confiance</h1>
        <p class="text-xl lg:text-2xl max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          pour leurs moments spéciaux
        </p>
      </div>
    </section>

    <!-- Trust Section -->
    <section class="py-20">
      <div class="container mx-auto px-4 lg:px-8">
        <!-- Partenaires -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
          <div 
            v-for="(partner, index) in partenaires" 
            :key="partner.name"
            class="text-center group hover:-translate-y-2 transition-all duration-300"
            :data-aos="'fade-up'"
            :data-aos-delay="(index % 6) * 100"
          >
            <img v-if="partner.icon.startsWith('/')" :src="partner.icon" :alt="partner.name" class="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
            <i v-else :class="partner.icon" class="text-5xl sm:text-6xl lg:text-7xl text-accent-indigo mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"></i>
            <h3 class="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{{ partner.name }}</h3>
            <p class="text-xs sm:text-sm text-gray-600">{{ partner.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Scroll to Top Button (Mobile only) -->
    <button 
      v-show="showScrollButton"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-40 w-14 h-14 bg-white border border-gray-300 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 md:hidden"
    >
      <i class="fas fa-chevron-up text-black text-xl"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showScrollButton = ref(false)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const handleScroll = () => {
  showScrollButton.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
const partenaires = [
  { name: 'Arcana Festival', icon: '/images/logos/arcana.png', description: 'Festival mystique' },
  { name: 'Athletissima', icon: '/images/logos/athletissima.png', description: 'Meeting d\'athlétisme' },
  { name: 'Braderie Horlofolies', icon: '/images/logos/Horlofolies.png', description: 'Festival horloger' },
  { name: 'Dragon Ball Day', icon: '/images/logos/DBD.png', description: 'Festival anime' },
  { name: 'Enzo Net', icon: '/images/logos/EnzoNet.png', description: 'Événements tech' },
  { name: 'Graine de Foot', icon: '/images/logos/graineFoot.png', description: 'Événements sportifs' },
  { name: 'Kiyo Festival', icon: '/images/logos/kiyo.png', description: 'Festival culturel' },
  { name: 'Lake Parade', icon: '/images/logos/lake.png', description: 'Festival électronique' },
  { name: 'Lausanne Sport', icon: '/images/logos/ls.png', description: 'Club de football' },
  { name: 'Le Châtelard International School', icon: '/images/logos/chatelard-logo.png', description: 'Événements éducatifs' },
  { name: 'Migros Vaud', icon: '/images/logos/migros-logo.png', description: 'Événements corporatifs' },
  { name: 'Montreux Jazz Festival', icon: '/images/logos/MontreuxJazzFestival.png', description: 'Festival de jazz' },
  { name: 'Orllati', icon: '/images/logos/Orllati.png', description: 'Événements corporatifs' },
  { name: 'Paléo Festival', icon: '/images/logos/paleo.png', description: 'Festival de musique' },
  { name: 'Polyval', icon: '/images/logos/polyval.png', description: 'Événements corporatifs' },
  { name: 'Rolex', icon: '/images/logos/Rolex.png', description: 'Événements de luxe' },
  { name: 'SCHR', icon: '/images/logos/SCHR.png', description: 'Événements corporatifs' },
  { name: 'Shonen Pop', icon: '/images/logos/shonen.png', description: 'Festival manga' },
  { name: 'UBS', icon: '/images/logos/ubs.png', description: 'Événements bancaires' },
  { name: 'Ville de Renens', icon: '/images/logos/villeDeRenensl.png', description: 'Événements municipaux' },
  { name: 'Zumbucks', icon: '/images/logos/zumbruck.png', description: 'Festival de musique' }
]
</script>

