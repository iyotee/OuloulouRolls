<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center bg-gray-50 overflow-hidden">
      <!-- Background Videos -->
      <div class="absolute inset-0 w-full h-full">
        <video 
          v-for="(video, index) in backgroundVideos" 
          :key="index"
          :ref="`bgVideo${index}`"
          :src="video.src"
             :class="`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ${video.active ? 'opacity-60' : 'opacity-0'}`"
          autoplay
          muted
          loop
          playsinline
        ></video>
      </div>
      
      <div class="relative z-10 text-center text-gray-800 px-4">
        <img src="/logo.svg" alt="Ouloulou Ice Rolls" class="mx-auto h-48 lg:h-64 mb-12 drop-shadow-2xl animate-float">
        
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="btn-primary">
            <i class="fas fa-calendar-alt mr-2"></i>
            Demander un devis
          </router-link>
          <router-link to="/galerie" class="px-6 py-3 bg-transparent text-gray-800 border border-gray-800 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center">
            <i class="fas fa-images mr-2"></i>
            Voir nos créations
          </router-link>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-8">
        <h2 class="text-5xl lg:text-7xl font-windsong text-center mb-16 text-gray-800">
          Notre Histoire
        </h2>
        
        <!-- Première section: Aventure Thaïlandaise -->
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div class="space-y-6 text-gray-700 text-lg">
            <h3 class="text-3xl lg:text-4xl font-windsong text-center text-black">Une Aventure Thaïlandaise Authentique</h3>
            <p>
              <strong>Ouloulou Ice Rolls</strong> est né d'un voyage en Thaïlande où j'ai découvert les glaces roulées artisanales. 
              Fasciné par cette technique unique, j'ai effectué un stage pratique dans les marchés de Bangkok et Chiang Mai 
              pour apprendre ce savoir-faire authentique transmis de génération en génération.
            </p>
            <p>
              Cette expérience culinaire m'a inspiré à créer <strong>Ouloulou Ice Rolls</strong> en Suisse, combinant la tradition 
              thaïlandaise avec l'innovation locale pour offrir une expérience gustative inoubliable à nos clients.
            </p>
          </div>
          
          <div class="rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
            <img src="/images/WhatsApp Image 2025-10-14 à 15.48.31_81c51376.jpg" alt="Glaces roulées artisanales" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
          </div>
        </div>

        <!-- Deuxième section: Excellence et Qualité Suisse -->
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div class="rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto order-2 lg:order-1">
            <img src="/images/gallery/WhatsApp Image 2025-10-14 à 15.33.49_f5fa8e06.jpg" alt="Ingrédients frais et locaux" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
          </div>
          
          <div class="space-y-6 text-gray-700 text-lg order-1 lg:order-2">
            <h3 class="text-3xl lg:text-4xl font-windsong text-center text-black">Excellence et Qualité Suisse</h3>
            <p>
              Chez <strong>Ouloulou Ice Rolls</strong>, nous privilégions les ingrédients locaux suisses pour garantir fraîcheur 
              et qualité, tout en soutenant l'économie régionale. Fruits de saison, produits laitiers locaux et ingrédients 
              premium sont sélectionnés avec soin.
            </p>
            <p>
              Nous travaillons également avec des fournisseurs renommés pour assurer variété et traçabilité, créant ainsi 
              des glaces savoureuses qui respectent les standards suisses les plus exigeants.
            </p>
          </div>
        </div>

        <!-- Troisième section: Street Food & Événements Premium -->
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div class="space-y-6 text-gray-700 text-lg">
            <h3 class="text-3xl lg:text-4xl font-windsong text-center text-black">Street Food & Événements Premium</h3>
            <p>
              <strong>Ouloulou Ice Rolls</strong> capture l'énergie authentique de la street food thaïlandaise, créant une 
              expérience théâtrale vivante et conviviale à chaque service. Cette ambiance spontanée est au cœur de notre passion.
            </p>
            <p>
              Nous nous adaptons également avec élégance pour des événements spéciaux : mariages, anniversaires, lancements 
              de produits ou célébrations d'entreprise. Nous transformons l'expérience street food en prestation sur mesure 
              et sophistiquée.
            </p>
            <p>
              Que ce soit pour un cocktail raffiné dans un hôtel 5 étoiles ou un festival, nous apportons notre savoir-faire 
              unique alliant spectacle culinaire et plaisir gourmand pour des moments mémorables et Instagram-worthy.
            </p>
          </div>
          
          <div class="rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
            <img src="/images/WhatsApp Image 2025-10-14 à 15.48.35_0e9164b4.jpg" alt="Événements et street food" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
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

// Background videos configuration
const backgroundVideos = ref([
  { src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.33.51_26420f74.mp4', active: true },
  { src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.49.39_9ea5c2b3.mp4', active: false },
  { src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.48.32_d79c1f4e.mp4', active: false },
  { src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.48.33_f33d3e99.mp4', active: false }
])

let videoTransitionInterval = null

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const handleScroll = () => {
  showScrollButton.value = window.scrollY > 300
}

const startVideoTransitions = () => {
  let currentIndex = 0
  
  videoTransitionInterval = setInterval(() => {
    // Deactivate current video
    backgroundVideos.value[currentIndex].active = false
    
    // Move to next video
    currentIndex = (currentIndex + 1) % backgroundVideos.value.length
    
    // Activate next video
    backgroundVideos.value[currentIndex].active = true
  }, 8000) // Change video every 8 seconds
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  startVideoTransitions()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (videoTransitionInterval) {
    clearInterval(videoTransitionInterval)
  }
})
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>

