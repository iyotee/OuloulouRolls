<template>
  <div class="min-h-screen pt-20 sm:pt-22 md:pt-20 lg:pt-22">
    <!-- Page Header -->
    <section class="py-8 sm:py-12 lg:py-16 bg-transparent text-gray-800">
      <div class="container mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h1 class="text-7xl sm:text-7xl lg:text-10xl font-windsong mb-6 px-4 sm:px-6 lg:px-8" data-aos="fade-up">Notre Galerie</h1>
        <p class="text-xl lg:text-2xl max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          Découvrez nos créations de glaces roulées en images et vidéos
        </p>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-16">
      <div class="container mx-auto px-3 sm:px-4 lg:px-8 max-w-full overflow-hidden">
        <!-- Gallery Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          <div 
            v-for="item in galleryItems" 
            :key="item.id"
            class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div class="aspect-square overflow-hidden">
              <img 
                v-if="item.type === 'image'"
                :src="item.src" 
                :alt="item.title"
                class="w-full h-full object-cover hover:scale-105 transition-all duration-300"
              >
              <video 
                v-else
                :src="item.src"
                class="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                @click="openModal(item)"
              ></video>
            </div>
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button 
                @click="openModal(item)"
                class="bg-white/20 backdrop-blur-md text-white px-3 sm:px-4 py-2 sm:py-3 rounded-full hover:bg-white/30 transition-all duration-200 text-sm sm:text-base"
              >
                <i :class="item.type === 'video' ? 'fas fa-play' : 'fas fa-search-plus'" class="mr-1 sm:mr-2"></i>
                {{ item.type === 'video' ? 'Lire' : 'Agrandir' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal pour agrandir les images/vidéos -->
    <div 
      v-if="selectedItem" 
      class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      @click="closeModal"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <div class="relative max-w-4xl max-h-full w-full" @click.stop>
        <button 
          @click="closeModal"
          class="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-md text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200"
        >
          <i class="fas fa-times text-xl"></i>
        </button>
        
        <!-- Navigation Arrows (hidden on mobile) -->
        <button 
          @click="prevModalItem"
          class="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10"
          style="background: rgba(90, 174, 204, 0.9); backdrop-filter: blur(8px);"
        >
          <i class="fas fa-chevron-left text-2xl"></i>
        </button>
        
        <button 
          @click="nextModalItem"
          class="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10"
          style="background: rgba(90, 174, 204, 0.9); backdrop-filter: blur(8px);"
        >
          <i class="fas fa-chevron-right text-2xl"></i>
        </button>
        
        <div class="bg-white rounded-lg overflow-hidden">
          <img 
            v-if="selectedItem.type === 'image'"
            :src="selectedItem.src" 
            :alt="selectedItem.title"
            class="w-full h-auto max-h-[80vh] object-contain"
          >
          <video 
            v-else
            :src="selectedItem.src"
            class="w-full h-auto max-h-[80vh]"
            controls
          ></video>
        </div>
      </div>
    </div>
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
import { ref, computed, onMounted, onUnmounted } from 'vue'

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

const currentSlide = ref(0)
const selectedItem = ref(null)
const currentModalIndex = ref(0)

// Carrousel items - toutes les images et vidéos
const carouselItems = computed(() => galleryItems)

let carouselInterval = null

onMounted(() => {
  carouselInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % carouselItems.value.length
  }, 4000)
  
  document.addEventListener('keydown', handleKeyPress)
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  if (carouselInterval) {
    clearInterval(carouselInterval)
  }
  document.removeEventListener('keydown', handleKeyPress)
  window.removeEventListener('scroll', handleScroll)
})

const handleKeyPress = (e) => {
  if (selectedItem.value) {
    if (e.key === 'ArrowLeft') {
      prevModalItem()
    } else if (e.key === 'ArrowRight') {
      nextModalItem()
    } else if (e.key === 'Escape') {
      closeModal()
    }
  }
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + carouselItems.value.length) % carouselItems.value.length
  resetCarouselInterval()
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % carouselItems.value.length
  resetCarouselInterval()
}

const goToSlide = (index) => {
  currentSlide.value = index
  resetCarouselInterval()
}

const resetCarouselInterval = () => {
  if (carouselInterval) {
    clearInterval(carouselInterval)
  }
  carouselInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % carouselItems.value.length
  }, 4000)
}

const openModal = (item) => {
  selectedItem.value = item
  currentModalIndex.value = galleryItems.findIndex(i => i.id === item.id)
}

const closeModal = () => {
  selectedItem.value = null
}

const prevModalItem = () => {
  currentModalIndex.value = (currentModalIndex.value - 1 + galleryItems.length) % galleryItems.length
  selectedItem.value = galleryItems[currentModalIndex.value]
}

const nextModalItem = () => {
  currentModalIndex.value = (currentModalIndex.value + 1) % galleryItems.length
  selectedItem.value = galleryItems[currentModalIndex.value]
}

let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (e) => {
  touchStartX = e.changedTouches[0].screenX
}

const handleTouchMove = (e) => {
  touchEndX = e.changedTouches[0].screenX
}

const handleTouchEnd = () => {
  if (touchStartX - touchEndX > 50) {
    nextModalItem()
  }
  
  if (touchEndX - touchStartX > 50) {
    prevModalItem()
  }
}

// Video handling functions
const handleVideoLoad = (event) => {
  // Video started loading, ensure it's properly configured
  const video = event.target
  video.muted = true
  video.playsInline = true
}

const handleModalVideoError = (event) => {
  console.warn('Modal video failed to load:', event.target.src)
  // Fermer le modal si la vidéo ne peut pas être chargée
  closeModal()
}

const handleVideoError = (event) => {
  console.warn('Video failed to load:', event.target.src)
  // Remplacer la vidéo par une image de fallback
  const videoElement = event.target
  const parentElement = videoElement.parentElement
  
  // Créer une image de fallback
  const fallbackImg = document.createElement('img')
  fallbackImg.src = '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.31_6b94c4ce.jpg' // Image de fallback
  fallbackImg.className = 'w-full h-full object-cover hover:scale-105 transition-all duration-300'
  fallbackImg.alt = 'Vidéo non disponible'
  
  // Remplacer la vidéo par l'image
  parentElement.replaceChild(fallbackImg, videoElement)
}

const galleryItems = [
  // Images existantes
  { id: 1, type: 'image', category: 'Événements', title: 'Mariage élégant', description: 'Service pour mariage privé', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.31_6b94c4ce.jpg' },
  { id: 2, type: 'image', category: 'Événements', title: 'Réception d\'entreprise', description: 'Événement corporatif', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.31_73ddc746.jpg' },
  { id: 3, type: 'image', category: 'Événements', title: 'Anniversaire privé', description: 'Fête d\'anniversaire', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.31_81c51376.jpg' },
  { id: 4, type: 'image', category: 'Événements', title: 'Réception VIP', description: 'Événement exclusif', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.31_a659574e.jpg' },
  { id: 5, type: 'image', category: 'Événements', title: 'Mariage', description: 'Cérémonie de mariage', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.32_178c7e21.jpg' },
  { id: 6, type: 'image', category: 'Événements', title: 'Anniversaire VIP', description: 'Fête exclusive', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.33_0230b25e.jpg' },
  { id: 7, type: 'image', category: 'Événements', title: 'Événement spécial', description: 'Moment unique', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.33_0edd9d4a.jpg' },
  { id: 8, type: 'image', category: 'Événements', title: 'Réception d\'entreprise', description: 'Événement corporatif', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.33_4f0fa76a.jpg' },
  { id: 9, type: 'image', category: 'Événements', title: 'Anniversaire', description: 'Fête d\'anniversaire', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.34_190eab22.jpg' },
  { id: 10, type: 'image', category: 'Festivals', title: 'Festival de musique', description: 'Stand au festival', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.34_6481d5d3.jpg' },
  { id: 11, type: 'image', category: 'Festivals', title: 'Festival culturel', description: 'Événement culturel', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.34_a5bfe2c4.jpg' },
  { id: 12, type: 'image', category: 'Festivals', title: 'Festival de rue', description: 'Festival urbain', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.34_b73acc94.jpg' },
  { id: 13, type: 'image', category: 'Festivals', title: 'Festival de danse', description: 'Festival artistique', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.34_cb25bd03.jpg' },
  { id: 14, type: 'image', category: 'Festivals', title: 'Festival de pop', description: 'Musique pop', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.49.28_5e88e366.jpg' },
  { id: 15, type: 'image', category: 'Festivals', title: 'Festival de reggae', description: 'Musique reggae', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.49.29_2e47b546.jpg' },
  { id: 16, type: 'image', category: 'Festivals', title: 'Festival de country', description: 'Musique country', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.49.29_5f00bcd9.jpg' },
  { id: 17, type: 'image', category: 'Festivals', title: 'Festival de metal', description: 'Musique metal', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.49.32_6b942f26.jpg' },
  { id: 18, type: 'image', category: 'Festivals', title: 'Festival de punk', description: 'Musique punk', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.49.32_9827dd62.jpg' },
  { id: 19, type: 'image', category: 'Festivals', title: 'Festival de classical', description: 'Musique classique', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.49.42_fe3a80f1.jpg' },
  
  // Vidéos existantes
  { id: 23, type: 'video', category: 'Privé', title: 'Vidéo anniversaire', description: 'Fête privée', src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.33.49_394f9d6f.mp4' },
  { id: 24, type: 'video', category: 'Privé', title: 'Vidéo réception', description: 'Événement intime', src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.33.51_26420f74.mp4' },
  { id: 25, type: 'video', category: 'Privé', title: 'Vidéo réception VIP', description: 'Événement exclusif', src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.48.32_d79c1f4e.mp4' },
  { id: 27, type: 'video', category: 'Privé', title: 'Vidéo événement corporatif', description: 'Service entreprise', src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.49.29_e7a48784.mp4' },
  { id: 28, type: 'video', category: 'Privé', title: 'Vidéo mariage', description: 'Cérémonie de mariage', src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.49.32_04be9d3b.mp4' }
]

</script>

<style scoped>
/* Empêcher le scroll vertical sur les titres */
h1.font-windsong {
  overflow: hidden !important;
  max-height: none !important;
  line-height: 1.2 !important;
}

/* S'assurer qu'il n'y a pas de scroll sur le conteneur */
.container {
  overflow: visible !important;
}

/* Empêcher tout scroll vertical sur les éléments de texte */
.text-center {
  overflow: visible !important;
}
</style>

<style scoped>
/* Empêcher le scroll vertical sur les titres */
h1.font-windsong {
  overflow: visible !important;
  max-height: none !important;
  line-height: 1.2 !important;
  height: auto !important;
}

/* S'assurer qu'il n'y a pas de scroll sur le conteneur */
.container {
  overflow: visible !important;
  max-width: 100% !important;
}

/* Empêcher tout scroll vertical sur les éléments de texte */
.text-center {
  overflow: visible !important;
}

/* Empêcher le scroll horizontal seulement */
html, body {
  overflow-x: hidden !important;
}

/* Grille responsive qui ne dépasse jamais */
.grid {
  max-width: 100% !important;
  overflow-x: hidden !important;
}

/* Boutons responsive */
@media (max-width: 640px) {
  .bg-white\/20 {
    padding: 0.5rem 0.75rem !important;
    font-size: 0.75rem !important;
  }
}

/* Modal responsive */
@media (max-width: 768px) {
  .fixed.inset-0 {
    padding: 1rem !important;
  }
  
  .bg-white.rounded-2xl {
    max-width: calc(100vw - 2rem) !important;
    max-height: calc(100vh - 2rem) !important;
  }
}
</style>

