<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center bg-gray-50 overflow-hidden" style="margin-top: -5.5rem;">
      <!-- Background Videos -->
      <div class="absolute inset-0 w-full h-full video-container">
        <video 
          v-for="(video, index) in backgroundVideos" 
          :key="index"
          :ref="`bgVideo${index}`"
          :src="video.src"
          :class="`video-background ${video.active ? 'video-active' : 'video-inactive'}`"
          autoplay
          muted
          loop
          playsinline
          webkit-playsinline
          preload="auto"
          controls="false"
          disablepictureinpicture
          @loadeddata="setVideoSpeed"
          @error="handleVideoError"
          @loadstart="handleVideoLoad"
          @canplay="forcePlay"
        ></video>
      </div>
      
      <div class="relative z-10 text-center text-gray-800 px-3 sm:px-4">
        <img src="/logo.svg" alt="Ouloulou Ice Rolls" class="mx-auto h-32 xs:h-40 sm:h-48 md:h-56 lg:h-64 mb-8 sm:mb-12 drop-shadow-2xl animate-float">
        
        
        <div class="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center">
          <router-link to="/contact" class="btn-primary text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3">
            <i class="fas fa-calendar-alt mr-2"></i>
            Demander un devis
          </router-link>
          <router-link to="/galerie" class="px-4 sm:px-6 py-2.5 sm:py-3 bg-transparent text-gray-800 border border-gray-800 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center text-sm sm:text-base">
            <i class="fas fa-images mr-2"></i>
            Voir nos créations
          </router-link>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div class="container mx-auto px-3 sm:px-4 lg:px-8">
        <div class="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 class="text-6xl sm:text-6xl md:text-7xl lg:text-7xl font-windsong mb-4 sm:mb-6 text-gray-800">
            Notre Mission
          </h2>
          <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Des Ice Rolls préparés sous vos yeux, un spectacle gourmand qui transforme chaque événement en moment inoubliable.<br>
            Faites vibrer vos invités — demandez votre devis dès aujourd'hui !
          </p>
          </div>
          

        <!-- Expertise Details -->
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="px-4 sm:px-6 lg:px-0" data-aos="fade-right">
            <h3 class="text-3xl font-heading mb-6 text-gray-800">
              Pourquoi nous choisir ?
            </h3>
            <div class="space-y-4">
              <div class="flex items-center" data-aos="fade-right" data-aos-delay="100">
                <i class="fas fa-apple-alt text-gray-600 text-xl mr-3"></i>
                <span class="text-gray-700">Ingrédients frais et locaux</span>
              </div>
              <div class="flex items-center" data-aos="fade-right" data-aos-delay="200">
                <i class="fas fa-birthday-cake text-gray-600 text-xl mr-3"></i>
                <span class="text-gray-700">Animation spectaculaire en direct</span>
              </div>
              <div class="flex items-center" data-aos="fade-right" data-aos-delay="300">
                <i class="fas fa-user-tie text-gray-600 text-xl mr-3"></i>
                <span class="text-gray-700">Service professionnel et fiable</span>
              </div>
            </div>
          </div>
          <div class="relative flex justify-center" data-aos="fade-left">
            <!-- Carrousel d'images -->
            <div class="relative overflow-hidden rounded-2xl shadow-2xl max-w-sm sm:max-w-none">
              <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }">
                <div 
                  v-for="(image, index) in galleryImages" 
                  :key="index"
                  class="w-full flex-shrink-0"
                >
                  <img :src="image" :alt="`Création ${index + 1}`" class="w-full aspect-[3/4] object-cover">
                </div>
              </div>
              
              <!-- Indicateurs -->
              <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <button 
                  v-for="(image, index) in galleryImages" 
                  :key="index"
                  @click="currentImageIndex = index"
                  class="w-3 h-3 rounded-full transition-all duration-300"
                  :class="currentImageIndex === index ? 'bg-white' : 'bg-white/50'"
                ></button>
              </div>
            </div>
            
            <div class="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-accent-indigo mb-2">100+</div>
                <div class="text-gray-600">Événements réussis</div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center mt-16">
          <router-link to="/contact" class="btn-primary text-lg px-8 py-4">
            <i class="fas fa-calendar-alt mr-2"></i>
            Demander un devis gratuit
          </router-link>
        </div>
      </div>
    </section>

    <!-- Nos Créations Tendance Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <p class="text-accent-indigo font-semibold mb-4">Découvrez</p>
          <h2 class="text-4xl font-heading font-bold text-gray-800 mb-6">Nos Créations Tendance</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">Nous mettons un point d'honneur à vous offrir des parfums qui surprendront vos convives. Laissez-vous emporter par des notes fruitées, salées ou gourmandes.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Création 1 -->
          <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 flex flex-col" data-aos="fade-up" data-aos-delay="100">
            <div class="text-center mb-6 flex-shrink-0">
              <img src="/images/icecream_pistache .png" alt="La Pistacchio" class="w-80 h-80 object-contain mx-auto mb-4">
            </div>
            <div class="flex-grow flex flex-col">
              <h3 class="text-2xl font-heading font-bold text-gray-800 mb-4">La Pistacchio</h3>
              <p class="text-gray-600 mb-6 flex-grow">L'alliance sucrée-salée parfaite : la douceur de la pistache est sublimée par des notes gourmandes. Une création authentique à la finale croquante et mémorable.</p>
              <ul class="space-y-2">
              <li class="flex items-center text-gray-700">
                <i class="fas fa-check text-accent-indigo mr-3"></i>
                Pistache Authentique
              </li>
              <li class="flex items-center text-gray-700">
                <i class="fas fa-check text-accent-indigo mr-3"></i>
                Notes Salées
              </li>
              <li class="flex items-center text-gray-700">
                <i class="fas fa-check text-accent-indigo mr-3"></i>
                Éclats Croquants
              </li>
            </ul>
            </div>
          </div>

          <!-- Création 2 -->
          <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 flex flex-col" data-aos="fade-up" data-aos-delay="200">
            <div class="text-center mb-6 flex-shrink-0">
              <img src="/images/icecream_strawberry.png" alt="La Fraise Citron Limette" class="w-80 h-80 object-contain mx-auto mb-4">
            </div>
            <div class="flex-grow flex flex-col">
              <h3 class="text-2xl font-heading font-bold text-gray-800 mb-4">La Fraise Citron Limette</h3>
              <p class="text-gray-600 mb-6 flex-grow">La fraîcheur éclatante des fraises de saison, mariée aux notes acidulées du citron et de la limette. Une explosion de saveurs fruitées et rafraîchissantes qui éveille les papilles.</p>
              <ul class="space-y-2">
              <li class="flex items-center text-gray-700">
                <i class="fas fa-check text-accent-indigo mr-3"></i>
                Fraises Fraîches
              </li>
              <li class="flex items-center text-gray-700">
                <i class="fas fa-check text-accent-indigo mr-3"></i>
                Citron Acidulé
              </li>
              <li class="flex items-center text-gray-700">
                <i class="fas fa-check text-accent-indigo mr-3"></i>
                Limette Rafraîchissante
              </li>
            </ul>
            </div>
          </div>
          
          <!-- Création 3 -->
          <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 flex flex-col" data-aos="fade-up" data-aos-delay="300">
            <div class="text-center mb-6 flex-shrink-0">
              <img src="/images/icecream_tarte_pommes.png" alt="La Tarte aux Pommes" class="w-80 h-80 object-contain mx-auto mb-4">
            </div>
            <div class="flex-grow flex flex-col">
              <h3 class="text-2xl font-heading font-bold text-gray-800 mb-4">La Tarte aux Pommes</h3>
              <p class="text-gray-600 mb-6 flex-grow">La douceur des pommes caramélisées, mariée aux notes chaudes de la cannelle et aux morceaux de pommes croquantes. Une création réconfortante qui évoque les saveurs d'automne et les desserts de grand-mère.</p>
              <ul class="space-y-2">
              <li class="flex items-center text-gray-700">
                <i class="fas fa-check text-accent-indigo mr-3"></i>
                Pommes Caramélisées
              </li>
              <li class="flex items-center text-gray-700">
                <i class="fas fa-check text-accent-indigo mr-3"></i>
                Cannelle Chaude
              </li>
              <li class="flex items-center text-gray-700">
                <i class="fas fa-check text-accent-indigo mr-3"></i>
                Morceaux Croquants
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Banner -->
    <section class="py-12 bg-transparent overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-6xl lg:text-7xl font-windsong mb-4 text-gray-800">
            Ils Nous Font Confiance
          </h2>
        </div>
        
        <!-- Scrolling Logos -->
        <div class="relative overflow-hidden">
          <div class="flex animate-scroll space-x-12">
            <!-- First set of logos -->
            <div 
              v-for="partner in partnersLogos" 
              :key="`first-${partner.name}`"
              class="flex-shrink-0 flex items-center justify-center"
            >
              <a 
                :href="partner.url" 
                target="_blank" 
                rel="noopener noreferrer"
                class="block hover:scale-105 transition-transform duration-300"
              >
                <img 
                  :src="partner.icon" 
                  :alt="partner.name"
                  class="h-16 sm:h-20 lg:h-24 object-contain opacity-100 hover:opacity-70 transition-opacity duration-300"
                >
              </a>
            </div>
            
            <!-- Duplicate set for seamless loop -->
            <div 
              v-for="partner in partnersLogos" 
              :key="`second-${partner.name}`"
              class="flex-shrink-0 flex items-center justify-center"
            >
              <a 
                :href="partner.url" 
                target="_blank" 
                rel="noopener noreferrer"
                class="block hover:scale-105 transition-transform duration-300"
              >
                <img 
                  :src="partner.icon" 
                  :alt="partner.name"
                  class="h-16 sm:h-20 lg:h-24 object-contain opacity-100 hover:opacity-70 transition-opacity duration-300"
                >
              </a>
            </div>
          </div>
          
          <!-- Left fade mask -->
          <div class="absolute left-0 top-0 bottom-0 w-20 sm:w-24 lg:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          
          <!-- Right fade mask -->
          <div class="absolute right-0 top-0 bottom-0 w-20 sm:w-24 lg:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>

    <!-- Google Reviews Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16" data-aos="fade-up">
          <p class="text-accent-indigo font-semibold mb-4">Témoignages</p>
          <h2 class="text-6xl lg:text-7xl font-windsong mb-6 text-gray-800">
            Ce qu'en disent nos clients
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les avis authentiques de nos clients satisfaits qui ont vécu l'expérience Ouloulou Ice Rolls.
            </p>
          </div>
          
        <!-- Trustindex Widget -->
        <div class="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div class="relative w-full sm:hidden" style="padding-bottom: 100%; height: 0;">
            <iframe 
              src="https://cdn.trustindex.io/amp-widget.html#d1a58ce561b7397aef569e8c75d"
              sandbox="allow-scripts allow-same-origin"
              width="100%" 
              height="100%"
              frameborder="0"
              scrolling="no"
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; background-color: white;"
              title="Avis Google Ouloulou Ice Rolls"
            ></iframe>
          </div>
          <div class="relative w-full hidden sm:block" style="padding-bottom: 56.25%; height: 0;">
            <iframe 
              src="https://cdn.trustindex.io/amp-widget.html#d1a58ce561b7397aef569e8c75d"
              sandbox="allow-scripts allow-same-origin"
              width="100%" 
              height="100%"
              frameborder="0"
              scrolling="no"
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; background-color: white;"
              title="Avis Google Ouloulou Ice Rolls"
            ></iframe>
          </div>
        </div>
        
      <!-- Call to Action -->
      <div class="text-center mt-8" data-aos="fade-up" data-aos-delay="400">
        <p class="text-lg text-gray-600 mb-4">
          Vous aussi, partagez votre expérience avec nous !
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://www.google.com/search?num=10&sca_esv=602bc0460517bd79&biw=1271&bih=1334&sxsrf=AE3TifNvpzIJRQ84MAP8aA1sBsf_fqliVw:1760723562281&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E5j_cD7E7nYIL5oVuXxlXk9TR3qOyrTs-lcEdBp_fBYmqCeUZQ8r8N6thruYSyUB5flYnf9WR6plNsbNMmKbiWfjen1c&q=Ouloulou+ice+rolls+Avis&sa=X&ved=2ahUKEwimyuiz5quQAxVn-gIHHf1uClEQ0bkNegQIIBAE" 
            target="_blank"
            class="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-900 transition-all duration-200"
          >
            <i class="fab fa-google mr-2 text-white"></i>
            Voir tous nos avis Google
          </a>
          <a 
            href="https://maps.app.goo.gl/A7yBE7Et839Pj1p59" 
            target="_blank"
            class="inline-flex items-center px-6 py-3 bg-transparent text-black border-2 border-black rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-200"
          >
            <i class="fas fa-star mr-2 text-black"></i>
            Laisser un avis
          </a>
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

// Gallery carousel
const galleryImages = ref([
  '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.31_a659574e.jpg',
  '/images/gallery/WhatsApp Image 2025-10-14 à 15.49.29_2e47b546.jpg',
  '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.31_81c51376.jpg'
])
const currentImageIndex = ref(0)

// Partners logos for scrolling banner
const partnersLogos = ref([
  { name: 'Arcana Festival', icon: '/images/logos/arcana.png', url: 'https://www.arcanafestival.ch' },
  { name: 'Athletissima', icon: '/images/logos/athletissima.png', url: 'https://athletissima.ch' },
  { name: 'Braderie Horlofolies', icon: '/images/logos/Horlofolies.png', url: 'https://www.braderie-horlofolies.ch' },
  { name: 'Dragon Ball Day', icon: '/images/logos/DBD.png', url: 'https://www.dragonballday.ch' },
  { name: 'Enzo Net', icon: '/images/logos/EnzoNet.png', url: 'https://enzonet.ch' },
  { name: 'Graine de Foot', icon: '/images/logos/graineFoot.png', url: 'https://www.grainesdefoot.ch' },
  { name: 'Kiyo Festival', icon: '/images/logos/kiyo.png', url: 'https://kiyofestival.ch' },
  { name: 'Lake Parade', icon: '/images/logos/lake.png', url: 'https://lakeparade.ch' },
  { name: 'Lausanne Sport', icon: '/images/logos/ls.png', url: 'https://www.lausanne-sport.ch' },
  { name: 'Le Châtelard International School', icon: '/images/logos/chatelard-logo.png', url: 'https://ecolechatelard.ch' },
  { name: 'Migros Vaud', icon: '/images/logos/migros-logo.png', url: 'https://vaud.migros.ch/fr.html' },
  { name: 'Montreux Jazz Festival', icon: '/images/logos/MontreuxJazzFestival.png', url: 'https://www.montreuxjazzfestival.com/en/' },
  { name: 'Orllati', icon: '/images/logos/Orllati.png', url: 'https://www.orllati.ch/' },
  { name: 'Paléo Festival', icon: '/images/logos/paleo.png', url: 'https://yeah.paleo.ch/fr' },
  { name: 'Polyval', icon: '/images/logos/polyval.png', url: 'https://www.polyval.ch/fr' },
  { name: 'Rolex', icon: '/images/logos/Rolex.png', url: 'https://www.rolex.com' },
  { name: 'SCHR', icon: '/images/logos/SCHR.png', url: 'https://schrenens.ch' },
  { name: 'Shonen Pop', icon: '/images/logos/shonen.png', url: 'https://shonenpop.com/' },
  { name: 'UBS', icon: '/images/logos/ubs.png', url: 'https://www.ubs.com/ch/en.html' },
  { name: 'Ville de Renens', icon: '/images/logos/villeDeRenensl.png', url: 'https://www.renens.ch' },
  { name: 'Zumbucks', icon: '/images/logos/zumbruck.png', url: 'https://zumbucks.com/' }
])

// Background videos configuration
const backgroundVideos = ref([
  { src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.48.32_d79c1f4e.mp4', active: true },
  { src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.49.29_e7a48784.mp4', active: false },
  { src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.49.32_04be9d3b.mp4', active: false }
])

let videoTransitionInterval = null
let carouselInterval = null

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const handleScroll = () => {
  showScrollButton.value = window.scrollY > 300
}

const setVideoSpeed = (event) => {
  const video = event.target
  video.playbackRate = 0.8
}

const handleVideoError = (event) => {
  console.warn('Video failed to load:', event.target.src)
  // Try to load the next video if current one fails
  const currentIndex = backgroundVideos.value.findIndex(v => v.src === event.target.src)
  if (currentIndex !== -1 && currentIndex < backgroundVideos.value.length - 1) {
    backgroundVideos.value[currentIndex + 1].active = true
    backgroundVideos.value[currentIndex].active = false
  }
}

const handleVideoLoad = (event) => {
  const video = event.target
  video.muted = true
  video.playsInline = true
  // Ensure video plays
  video.play().catch(e => console.warn('Video autoplay failed:', e))
}

const forcePlay = (event) => {
  const video = event.target
  // Force play on iOS devices
  if (video.paused) {
    video.muted = true
    video.playsInline = true
    video.play().catch(e => {
      console.warn('Force play failed:', e)
      // Try again after a short delay
      setTimeout(() => {
        video.play().catch(e2 => console.warn('Retry play failed:', e2))
      }, 100)
    })
  }
}

const startVideoTransitions = () => {
  let currentIndex = 0
  
  videoTransitionInterval = setInterval(() => {
    // Simple fade transition without restarting videos
    backgroundVideos.value.forEach((video, index) => {
      video.active = index === currentIndex
    })
    
    // Move to next video
    currentIndex = (currentIndex + 1) % backgroundVideos.value.length
  }, 10000) // Change video every 10 seconds (longer for smoother experience)
}

const startCarousel = () => {
  carouselInterval = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % galleryImages.value.length
  }, 3000)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  startVideoTransitions()
  startCarousel()
  
  // Force video play on iOS after component mount
  setTimeout(() => {
    backgroundVideos.value.forEach((video, index) => {
      const videoElement = document.querySelector(`video[src="${video.src}"]`)
      if (videoElement && videoElement.paused) {
        videoElement.muted = true
        videoElement.playsInline = true
        videoElement.play().catch(e => console.warn('iOS force play failed:', e))
      }
    })
  }, 500)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (videoTransitionInterval) {
    clearInterval(videoTransitionInterval)
  }
  if (carouselInterval) {
    clearInterval(carouselInterval)
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

/* Scrolling animation for partners banner */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
  width: calc(200% + 2rem);
}

.animate-scroll:hover {
  animation-play-state: paused;
}

/* Edge Mobile specific fixes for video background */
.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
}

/* iOS specific fixes */
@supports (-webkit-touch-callout: none) {
  .video-background {
    -webkit-playsinline: true;
    -webkit-media-controls: none;
    -webkit-media-controls-overlay-play-button: none;
    -webkit-media-controls-play-button: none;
    -webkit-media-controls-start-playback-button: none;
  }
  
  .video-background::-webkit-media-controls {
    display: none !important;
  }
  
  .video-background::-webkit-media-controls-panel {
    display: none !important;
  }
  
  .video-background::-webkit-media-controls-play-button {
    display: none !important;
  }
  
  .video-background::-webkit-media-controls-start-playback-button {
    display: none !important;
  }
}

.video-background {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  max-width: none;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  object-fit: cover;
  -o-object-fit: cover;
  transition: opacity 2s ease-in-out;
  -webkit-transition: opacity 2s ease-in-out;
  -moz-transition: opacity 2s ease-in-out;
  -ms-transition: opacity 2s ease-in-out;
  -o-transition: opacity 2s ease-in-out;
  /* Hardware acceleration for smoother transitions */
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000;
  perspective: 1000;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  will-change: opacity;
}

.video-active {
  opacity: 0.6;
  z-index: 1;
}

.video-inactive {
  opacity: 0;
  z-index: 0;
}

/* Edge Mobile specific video rendering fixes */
@supports (-ms-ime-align: auto) {
  .video-background {
    /* Edge-specific rendering improvements */
    -ms-interpolation-mode: nearest-neighbor;
  }
}

/* Additional fixes for older Edge versions */
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .video-background {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: none;
  }
}

/* Mobile-specific optimizations */
@media (max-width: 768px) {
  .video-background {
    /* Ensure proper rendering on mobile Edge */
    -webkit-transform: translate(-50%, -50%) translateZ(0);
    transform: translate(-50%, -50%) translateZ(0);
  }
  
  .video-container {
    /* Prevent overflow issues on mobile Edge */
    -webkit-overflow-scrolling: touch;
  }
}

/* Améliorations spécifiques pour les écrans 18:9 (Samsung S24, etc.) */
@media screen and (max-width: 414px) and (min-aspect-ratio: 16/9) {
  .container {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  
  /* Ajuster l'espacement des sections */
  section {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  
  /* Améliorer la lisibilité sur les écrans étroits */
  h2 {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
  
  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  
  /* Ajuster les boutons pour les écrans étroits */
  .btn-primary {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }
}

/* Améliorations pour les écrans très petits */
@media screen and (max-width: 375px) {
  .container {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  
  /* Réduire encore plus l'espacement si nécessaire */
  section {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  
  h2 {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  
  p {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
}
</style>

