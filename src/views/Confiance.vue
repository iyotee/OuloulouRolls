<template>
  <div class="min-h-screen pt-20">
    <!-- Page Header -->
    <section class="py-16 bg-transparent text-gray-800">
      <div class="container mx-auto px-4 lg:px-8 text-center">
        <h1 class="text-5xl lg:text-7xl font-windsong mb-6">Nous ont fait confiance</h1>
        <p class="text-xl lg:text-2xl max-w-2xl mx-auto">
          pour leurs moments spéciaux
        </p>
      </div>
    </section>

    <!-- Trust Section -->
    <section class="py-20">
      <div class="container mx-auto px-4 lg:px-8">
        <!-- Entreprises -->
        <div class="mb-16">
          <h2 class="text-3xl lg:text-4xl font-heading text-center mb-12 text-gray-800">Entreprises</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
            <div 
              v-for="company in entreprises" 
              :key="company.name"
              class="text-center group hover:-translate-y-2 transition-all duration-300"
            >
              <div class="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-4 rounded-xl shadow-lg group-hover:shadow-xl overflow-hidden">
                <img v-if="company.icon.startsWith('/')" :src="company.icon" :alt="company.name" class="w-full h-full object-cover">
                <i v-else :class="company.icon" class="text-2xl sm:text-3xl lg:text-4xl text-accent-indigo"></i>
              </div>
              <h3 class="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{{ company.name }}</h3>
              <p class="text-xs sm:text-sm text-gray-600">{{ company.description }}</p>
            </div>
          </div>
        </div>

        <!-- Festivals -->
        <div class="mb-16">
          <h2 class="text-3xl lg:text-4xl font-heading text-center mb-12 text-gray-800">Festivals</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
            <div 
              v-for="festival in festivals" 
              :key="festival.name"
              class="text-center group hover:-translate-y-2 transition-all duration-300"
            >
              <div class="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-4 rounded-xl shadow-lg group-hover:shadow-xl overflow-hidden">
                <img v-if="festival.icon.startsWith('/')" :src="festival.icon" :alt="festival.name" class="w-full h-full object-cover">
                <i v-else :class="festival.icon" class="text-2xl sm:text-3xl lg:text-4xl text-purple-600"></i>
              </div>
              <h3 class="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{{ festival.name }}</h3>
              <p class="text-xs sm:text-sm text-gray-600">{{ festival.description }}</p>
            </div>
          </div>
        </div>

        <!-- Événements Sportifs -->
        <div class="mb-16">
          <h2 class="text-3xl lg:text-4xl font-heading text-center mb-12 text-gray-800">Événements Sportifs</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
            <div 
              v-for="sport in sports" 
              :key="sport.name"
              class="text-center group hover:-translate-y-2 transition-all duration-300"
            >
              <div class="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-4 rounded-xl shadow-lg group-hover:shadow-xl overflow-hidden">
                <img v-if="sport.icon.startsWith('/')" :src="sport.icon" :alt="sport.name" class="w-full h-full object-cover">
                <i v-else :class="sport.icon" class="text-2xl sm:text-3xl lg:text-4xl text-blue-600"></i>
              </div>
              <h3 class="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{{ sport.name }}</h3>
              <p class="text-xs sm:text-sm text-gray-600">{{ sport.description }}</p>
            </div>
          </div>
        </div>

        <!-- Événements Privés -->
        <div>
          <h2 class="text-3xl lg:text-4xl font-heading text-center mb-12 text-gray-800">Événements Privés</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <router-link 
              v-for="prive in prives" 
              :key="prive.name"
              :to="prive.link"
              class="text-center p-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl group hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl">
                <i :class="prive.icon" class="text-3xl text-white"></i>
              </div>
              <h3 class="text-2xl font-heading mb-4 text-gray-800">{{ prive.name }}</h3>
              <p class="text-gray-600 mb-4">{{ prive.description }}</p>
              <span class="inline-flex items-center gap-2 text-sm font-semibold" style="color: #5AAECC;">
                Demander un devis
                <i class="fas fa-arrow-right"></i>
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <!-- Scroll to Top Button (Mobile only) -->
    <button 
      v-show="showScrollButton"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-40 w-14 h-14 bg-white border border-gray-300 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 md:hidden"
      style="background: linear-gradient(135deg, #5AAECC 0%, #62B1CE 100%); border: none;"
    >
      <i class="fas fa-chevron-up text-white text-xl"></i>
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
const entreprises = [
  { name: 'UBS', icon: '/images/logos/ubs.svg', description: 'Événements bancaires' },
  { name: 'Migros Vaud', icon: '/images/logos/migros-vaud.svg', description: 'Événements corporatifs' },
  { name: 'Rolex', icon: '/images/logos/rolex.svg', description: 'Événements de luxe' },
  { name: 'Swisscom', icon: '/images/logos/swisscom.svg', description: 'Événements tech' },
  { name: 'Nestlé', icon: '/images/logos/nestle.svg', description: 'Événements alimentaires' },
  { name: 'Novartis', icon: '/images/logos/novartis.svg', description: 'Événements pharma' },
  { name: 'Graine de Foot', icon: '/images/logos/graine-de-foot.svg', description: 'Événements sportifs' },
  { name: 'Orllati', icon: '/images/logos/orllati.svg', description: 'Événements corporatifs' },
  { name: 'Enzo Net', icon: '/images/logos/enzo-net.svg', description: 'Événements tech' },
  { name: 'Ville de Renens', icon: '/images/logos/ville-renens.svg', description: 'Événements municipaux' },
  { name: 'Le Châtelard', icon: '/images/logos/le-chatelard.svg', description: 'Événements éducatifs' },
  { name: 'SCHR', icon: '/images/logos/schr.svg', description: 'Événements corporatifs' },
  { name: 'Polyval', icon: '/images/logos/polyval.svg', description: 'Événements corporatifs' }
]

const festivals = [
  { name: 'Zumbucks', icon: '/images/logos/zumbucks.svg', description: 'Festival de musique' },
  { name: 'Lake Parade', icon: '/images/logos/lake-parade.svg', description: 'Festival électronique' },
  { name: 'Arcana Festival', icon: '/images/logos/arcana-festival.svg', description: 'Festival mystique' },
  { name: 'Montreux Jazz', icon: '/images/logos/montreux-jazz.svg', description: 'Festival de jazz' },
  { name: 'Paléo Festival', icon: '/images/logos/paleo-festival.svg', description: 'Festival de musique' },
  { name: 'Kiyo Festival', icon: '/images/logos/kiyo-festival.svg', description: 'Festival culturel' },
  { name: 'Shonen Pop', icon: '/images/logos/shonen-pop.svg', description: 'Festival manga' },
  { name: 'Dragon Ball Day', icon: '/images/logos/dragon-ball-day.svg', description: 'Festival anime' },
  { name: 'Braderie Horlofolies', icon: '/images/logos/braderie-horlofolies.svg', description: 'Festival horloger' },
  { name: 'Festival de la Cité', icon: '/images/logos/festival-de-la-cite.svg', description: 'Festival culturel' },
  { name: 'Festival du Film', icon: '/images/logos/festival-du-film.svg', description: 'Festival cinéma' },
  { name: 'Festival de Danse', icon: '/images/logos/festival-de-danse.svg', description: 'Festival danse' },
  { name: 'Festival de Rue', icon: '/images/logos/festival-de-rue.svg', description: 'Festival urbain' }
]

const sports = [
  { name: 'Lausanne Sport', icon: '/images/logos/lausanne-sport.svg', description: 'Club de football' },
  { name: 'Athletissima', icon: '/images/logos/athletissima.svg', description: 'Meeting d\'athlétisme' }
]

const prives = [
  { name: 'Anniversaires', icon: 'fas fa-birthday-cake', description: 'Célébrations privées', link: '/contact?type=anniversaire' },
  { name: 'Mariages', icon: 'fas fa-heart', description: 'Événements romantiques', link: '/contact?type=mariage' }
]
</script>

