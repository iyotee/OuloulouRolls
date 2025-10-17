<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center bg-gray-50 overflow-hidden">
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
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-windsong mb-4 sm:mb-6 text-gray-800">
            Notre Expertise
        </h2>
          <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            <strong>Ouloulou Ice Rolls</strong> trouve ses racines dans un road trip en Thaïlande où nous avons découvert les glaces roulées. Fascinés par cette technique, nous avons effectué un stage pratique sur place, apprenant les secrets de fabrication aux côtés d'artisans locaux pour partager cette aventure gustative. Faites vibrer vos invités — demandez votre devis dès aujourd'hui !
          </p>
          </div>
          

        <!-- Expertise Details -->
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h3 class="text-3xl font-heading mb-6 text-gray-800">
              Pourquoi nous choisir ?
            </h3>
            <div class="space-y-4">
              <div class="flex items-center" data-aos="fade-right" data-aos-delay="100">
                <i class="fas fa-check-circle text-black text-xl mr-3"></i>
                <span class="text-gray-700">Ingrédients frais et locaux</span>
              </div>
              <div class="flex items-center" data-aos="fade-right" data-aos-delay="200">
                <i class="fas fa-check-circle text-black text-xl mr-3"></i>
                <span class="text-gray-700">Animation spectaculaire en direct</span>
              </div>
              <div class="flex items-center" data-aos="fade-right" data-aos-delay="300">
                <i class="fas fa-check-circle text-black text-xl mr-3"></i>
                <span class="text-gray-700">Service professionnel et fiable</span>
              </div>
            </div>
          </div>
          <div class="relative" data-aos="fade-left">
            <!-- Carrousel d'images -->
            <div class="relative overflow-hidden rounded-2xl shadow-2xl">
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
          <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
            <div class="text-center mb-6">
              <img src="/images/icecream_pistache .png" alt="La Pistacchio" class="w-44 h-44 object-contain mx-auto mb-4">
            </div>
            <h3 class="text-2xl font-heading font-bold text-gray-800 mb-4">La Pistacchio</h3>
            <p class="text-gray-600 mb-6">L'alliance sucrée-salée parfaite : la douceur de la pistache est sublimée par des notes gourmandes. Une création authentique à la finale croquante et mémorable.</p>
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

          <!-- Création 2 -->
          <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
            <div class="text-center mb-6">
              <img src="/images/icecream_strawberry.png" alt="La Fraise Citron Limette" class="w-40 h-40 object-contain mx-auto mb-4">
            </div>
            <h3 class="text-2xl font-heading font-bold text-gray-800 mb-4">La Fraise Citron Limette</h3>
            <p class="text-gray-600 mb-6">La fraîcheur éclatante des fraises de saison, mariée aux notes acidulées du citron et de la limette. Une explosion de saveurs fruitées et rafraîchissantes qui éveille les papilles.</p>
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
          
          <!-- Création 3 -->
          <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
            <div class="text-center mb-6">
              <img src="/images/icecream_tarte_pommes.png" alt="La Tarte aux Pommes" class="w-40 h-40 object-contain mx-auto mb-4">
            </div>
            <h3 class="text-2xl font-heading font-bold text-gray-800 mb-4">La Tarte aux Pommes</h3>
            <p class="text-gray-600 mb-6">La douceur des pommes caramélisées, mariée aux notes chaudes de la cannelle et aux morceaux de pommes croquantes. Une création réconfortante qui évoque les saveurs d'automne et les desserts de grand-mère.</p>
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
    </section>

    <!-- Google Reviews Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16" data-aos="fade-up">
          <p class="text-accent-indigo font-semibold mb-4">Témoignages</p>
          <h2 class="text-4xl lg:text-5xl font-windsong mb-6 text-gray-800">
            Ce qu'en disent nos clients
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les avis authentiques de nos clients satisfaits qui ont vécu l'expérience Ouloulou Ice Rolls.
            </p>
          </div>
          
        <!-- Trustindex Widget -->
        <div class="max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div 
            class="trustindex-widget" 
            data-widget-id="339921256c483916a14616b02c8"
          >
            <!-- Fallback content -->
            <div class="text-center py-8">
              <p class="text-gray-500 mb-4">Chargement des avis Google...</p>
              <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-indigo mx-auto"></div>
            </div>
          </div>
        </div>
        
        <!-- Call to Action -->
        <div class="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
          <p class="text-lg text-gray-600 mb-6">
            Vous aussi, partagez votre expérience avec nous !
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.google.com/search?q=Ouloulou+Ice+Rolls+avis" 
              target="_blank"
              class="inline-flex items-center px-6 py-3 bg-accent-indigo text-white rounded-full font-semibold hover:bg-purple-600 transition-all duration-200"
            >
              <i class="fab fa-google mr-2"></i>
              Voir tous nos avis Google
            </a>
            <router-link 
              to="/contact" 
              class="inline-flex items-center px-6 py-3 bg-transparent text-accent-indigo border-2 border-accent-indigo rounded-full font-semibold hover:bg-accent-indigo hover:text-white transition-all duration-200"
            >
              <i class="fas fa-star mr-2"></i>
              Laisser un avis
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

