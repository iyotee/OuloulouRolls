<template>
  <div class="min-h-screen pt-20">
    <!-- Page Header -->
    <section class="py-16 bg-transparent text-gray-800">
      <div class="container mx-auto px-4 lg:px-8 text-center">
        <h1 class="text-5xl lg:text-7xl font-windsong mb-6">Notre Galerie</h1>
        <p class="text-xl lg:text-2xl max-w-2xl mx-auto">
          Découvrez nos créations de glaces roulées en images et vidéos
        </p>
      </div>
    </section>

    <!-- Gallery Carousel -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="relative rounded-2xl overflow-hidden shadow-2xl group">
          <div class="carousel-container aspect-video relative">
            <div 
              v-for="(item, index) in carouselItems" 
              :key="index"
              class="carousel-slide absolute inset-0 transition-opacity duration-500"
              :class="{ 'opacity-100': index === currentSlide, 'opacity-0': index !== currentSlide }"
            >
              <img 
                v-if="item.type === 'image'"
                :src="item.src" 
                :alt="item.title"
                class="w-full h-full object-cover"
              >
              <video 
                v-else
                :src="item.src"
                class="w-full h-full object-cover"
                autoplay
                muted
                loop
              ></video>
            </div>
          </div>
          
          <!-- Carousel Controls -->
          <button 
            @click="prevSlide"
            class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110"
            style="background: rgba(90, 174, 204, 0.8); backdrop-filter: blur(8px);"
          >
            <i class="fas fa-chevron-left text-xl"></i>
          </button>
          
          <button 
            @click="nextSlide"
            class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110"
            style="background: rgba(90, 174, 204, 0.8); backdrop-filter: blur(8px);"
          >
            <i class="fas fa-chevron-right text-xl"></i>
          </button>
          
          <!-- Carousel Indicators -->
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <button 
              v-for="(item, index) in carouselItems"
              :key="index"
              @click="goToSlide(index)"
              class="w-2 h-2 rounded-full transition-all duration-200"
              :class="index === currentSlide ? 'w-8' : ''"
              :style="index === currentSlide ? 'background: #5AAECC' : 'background: rgba(255, 255, 255, 0.5)'"
            ></button>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Content -->
    <section class="py-16">
      <div class="container mx-auto px-4 lg:px-8">
        <!-- Filter Buttons -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            v-for="filter in filters" 
            :key="filter"
            @click="activeFilter = filter"
            :class="[
              'px-6 py-3 rounded-full font-semibold transition-all duration-200',
              activeFilter === filter 
                ? 'bg-accent-indigo text-white shadow-lg' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            ]"
          >
            {{ filter }}
          </button>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div 
            v-for="item in filteredItems" 
            :key="item.id"
            class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div class="aspect-square overflow-hidden">
              <img 
                v-if="item.type === 'image'"
                :src="item.src" 
                :alt="item.title"
                class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              >
              <video 
                v-else
                :src="item.src"
                class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                muted
                loop
              ></video>
            </div>
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button 
                @click="openModal(item)"
                class="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-200"
              >
                <i :class="item.type === 'video' ? 'fas fa-play' : 'fas fa-search-plus'" class="mr-2"></i>
                {{ item.type === 'video' ? 'Lire' : 'Agrandir' }}
              </button>
            </div>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 class="text-white font-semibold">{{ item.title }}</h3>
              <p class="text-white/80 text-sm">{{ item.description }}</p>
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
            autoplay
          ></video>
          
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{{ selectedItem.title }}</h3>
            <p class="text-gray-600">{{ selectedItem.description }}</p>
            <p class="text-sm text-gray-400 mt-2">{{ currentModalIndex + 1 }} / {{ filteredItems.length }}</p>
          </div>
        </div>
      </div>
    </div>
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

const activeFilter = ref('Tous')
const currentSlide = ref(0)
const selectedItem = ref(null)
const currentModalIndex = ref(0)

const filters = ['Tous', 'Événements', 'Festivals', 'Privé']

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
  currentModalIndex.value = filteredItems.value.findIndex(i => i.id === item.id)
}

const closeModal = () => {
  selectedItem.value = null
}

const prevModalItem = () => {
  currentModalIndex.value = (currentModalIndex.value - 1 + filteredItems.value.length) % filteredItems.value.length
  selectedItem.value = filteredItems.value[currentModalIndex.value]
}

const nextModalItem = () => {
  currentModalIndex.value = (currentModalIndex.value + 1) % filteredItems.value.length
  selectedItem.value = filteredItems.value[currentModalIndex.value]
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

const galleryItems = [
  // Événements (24 items)
  { id: 1, type: 'image', category: 'Événements', title: 'Événement corporatif', description: 'Service pour entreprise', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.31_39df1b8a.jpg' },
  { id: 2, type: 'image', category: 'Événements', title: 'Mariage élégant', description: 'Service pour mariage privé', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.31_6b94c4ce.jpg' },
  { id: 3, type: 'image', category: 'Événements', title: 'Réception d\'entreprise', description: 'Événement corporatif', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.31_73ddc746.jpg' },
  { id: 4, type: 'image', category: 'Événements', title: 'Anniversaire privé', description: 'Fête d\'anniversaire', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.31_81c51376.jpg' },
  { id: 5, type: 'image', category: 'Événements', title: 'Événement spécial', description: 'Occasion spéciale', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.31_882928ba.jpg' },
  { id: 6, type: 'image', category: 'Événements', title: 'Réception VIP', description: 'Événement exclusif', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.31_a659574e.jpg' },
  { id: 7, type: 'image', category: 'Événements', title: 'Événement corporatif', description: 'Service entreprise', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.31_f38d398d.jpg' },
  { id: 8, type: 'image', category: 'Événements', title: 'Mariage', description: 'Cérémonie de mariage', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.32_178c7e21.jpg' },
  { id: 9, type: 'image', category: 'Événements', title: 'Anniversaire', description: 'Fête privée', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.32_394a9d7d.jpg' },
  { id: 10, type: 'image', category: 'Événements', title: 'Événement spécial', description: 'Occasion unique', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.32_816a5c2a.jpg' },
  { id: 11, type: 'image', category: 'Événements', title: 'Réception', description: 'Événement intime', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.32_c5d41a08.jpg' },
  { id: 12, type: 'image', category: 'Événements', title: 'Événement corporatif', description: 'Service professionnel', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.32_dc490489.jpg' },
  { id: 13, type: 'image', category: 'Événements', title: 'Mariage élégant', description: 'Cérémonie raffinée', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.32_e8e19a4c.jpg' },
  { id: 14, type: 'image', category: 'Événements', title: 'Anniversaire VIP', description: 'Fête exclusive', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.33_0230b25e.jpg' },
  { id: 15, type: 'image', category: 'Événements', title: 'Événement spécial', description: 'Moment unique', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.33_0edd9d4a.jpg' },
  { id: 16, type: 'image', category: 'Événements', title: 'Réception d\'entreprise', description: 'Événement corporatif', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.33_4f0fa76a.jpg' },
  { id: 17, type: 'image', category: 'Événements', title: 'Mariage', description: 'Cérémonie de mariage', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.33_5e2d1e11.jpg' },
  { id: 18, type: 'image', category: 'Événements', title: 'Anniversaire', description: 'Fête privée', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.33_6777e795.jpg' },
  { id: 19, type: 'image', category: 'Événements', title: 'Événement spécial', description: 'Occasion spéciale', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.33_8cb7aff8.jpg' },
  { id: 20, type: 'image', category: 'Événements', title: 'Réception VIP', description: 'Événement exclusif', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.33_c6febe1a.jpg' },
  { id: 21, type: 'image', category: 'Événements', title: 'Mariage élégant', description: 'Cérémonie raffinée', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.33_e69b8914.jpg' },
  { id: 22, type: 'image', category: 'Événements', title: 'Anniversaire', description: 'Fête d\'anniversaire', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.34_190eab22.jpg' },
  { id: 23, type: 'image', category: 'Événements', title: 'Événement corporatif', description: 'Service entreprise', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.34_4448071e.jpg' },
  { id: 24, type: 'image', category: 'Événements', title: 'Réception', description: 'Événement intime', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.34_4b6dd228.jpg' },
  
  // Festivals (25 items)
  { id: 25, type: 'image', category: 'Festivals', title: 'Festival de musique', description: 'Stand au festival', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.34_6481d5d3.jpg' },
  { id: 26, type: 'image', category: 'Festivals', title: 'Festival d\'été', description: 'Ambiance festive', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.34_85fa35ee.jpg' },
  { id: 27, type: 'image', category: 'Festivals', title: 'Festival culturel', description: 'Événement culturel', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.34_a5bfe2c4.jpg' },
  { id: 28, type: 'image', category: 'Festivals', title: 'Festival de rue', description: 'Festival urbain', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.34_b73acc94.jpg' },
  { id: 29, type: 'image', category: 'Festivals', title: 'Festival de danse', description: 'Festival artistique', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.34_cb25bd03.jpg' },
  { id: 30, type: 'image', category: 'Festivals', title: 'Festival de jazz', description: 'Musique jazz', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.34_f0aee0d1.jpg' },
  { id: 31, type: 'image', category: 'Festivals', title: 'Festival de rock', description: 'Musique rock', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.48.35_0e9164b4.jpg' },
  { id: 32, type: 'image', category: 'Festivals', title: 'Festival électronique', description: 'Musique électronique', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.49.28_5d8d5fdf.jpg' },
  { id: 33, type: 'image', category: 'Festivals', title: 'Festival de pop', description: 'Musique pop', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.49.28_5e88e366.jpg' },
  { id: 34, type: 'image', category: 'Festivals', title: 'Festival de folk', description: 'Musique folk', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.49.28_845af5e5.jpg' },
  { id: 35, type: 'image', category: 'Festivals', title: 'Festival de blues', description: 'Musique blues', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.49.28_a2820b44.jpg' },
  { id: 36, type: 'image', category: 'Festivals', title: 'Festival de reggae', description: 'Musique reggae', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.49.29_2e47b546.jpg' },
  { id: 37, type: 'image', category: 'Festivals', title: 'Festival de country', description: 'Musique country', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.49.29_5f00bcd9.jpg' },
  { id: 38, type: 'image', category: 'Festivals', title: 'Festival de hip-hop', description: 'Musique hip-hop', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.49.31_039f77bb.jpg' },
  { id: 39, type: 'image', category: 'Festivals', title: 'Festival de metal', description: 'Musique metal', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.49.32_6b942f26.jpg' },
  { id: 40, type: 'image', category: 'Festivals', title: 'Festival de punk', description: 'Musique punk', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.49.32_9827dd62.jpg' },
  { id: 41, type: 'image', category: 'Festivals', title: 'Festival de soul', description: 'Musique soul', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.49.33_1ed91cd8.jpg' },
  { id: 42, type: 'image', category: 'Festivals', title: 'Festival de funk', description: 'Musique funk', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.49.35_496a1131.jpg' },
  { id: 43, type: 'image', category: 'Festivals', title: 'Festival de disco', description: 'Musique disco', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.49.35_cc38f6e6.jpg' },
  { id: 44, type: 'image', category: 'Festivals', title: 'Festival de house', description: 'Musique house', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.49.36_91f80c27.jpg' },
  { id: 45, type: 'image', category: 'Festivals', title: 'Festival de techno', description: 'Musique techno', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.49.37_9105092f.jpg' },
  { id: 46, type: 'image', category: 'Festivals', title: 'Festival de trance', description: 'Musique trance', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.49.40_d131ecde.jpg' },
  { id: 47, type: 'image', category: 'Festivals', title: 'Festival de ambient', description: 'Musique ambient', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.49.41_80bf65ef.jpg' },
  { id: 48, type: 'image', category: 'Festivals', title: 'Festival de world', description: 'Musique world', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.49.42_d1e55f22.jpg' },
  { id: 49, type: 'image', category: 'Festivals', title: 'Festival de classical', description: 'Musique classique', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.49.42_fe3a80f1.jpg' },
  
  // Privé (22 items)
  { id: 50, type: 'image', category: 'Privé', title: 'Anniversaire privé', description: 'Fête privée', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.33.49_02401ee5.jpg' },
  { id: 51, type: 'image', category: 'Privé', title: 'Réception intime', description: 'Événement privé', src: '/images/gallery/WhatsApp Image 2025-10-14 à 15.33.49_f5fa8e06.jpg' },
  { id: 52, type: 'video', category: 'Privé', title: 'Vidéo événement privé', description: 'Service exclusif', src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.33.48_5ceeaa5a.mp4' },
  { id: 53, type: 'video', category: 'Privé', title: 'Vidéo anniversaire', description: 'Fête privée', src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.33.49_394f9d6f.mp4' },
  { id: 54, type: 'video', category: 'Privé', title: 'Vidéo réception', description: 'Événement intime', src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.33.51_26420f74.mp4' },
  { id: 55, type: 'video', category: 'Privé', title: 'Vidéo mariage', description: 'Cérémonie privée', src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.33.52_c3bc04e8.mp4' },
  { id: 56, type: 'video', category: 'Privé', title: 'Vidéo anniversaire VIP', description: 'Fête exclusive', src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.33.52_e1309861.mp4' },
  { id: 57, type: 'video', category: 'Privé', title: 'Vidéo événement spécial', description: 'Occasion unique', src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.48.32_bbde8848.mp4' },
  { id: 58, type: 'video', category: 'Privé', title: 'Vidéo réception VIP', description: 'Événement exclusif', src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.48.32_d79c1f4e.mp4' },
  { id: 59, type: 'video', category: 'Privé', title: 'Vidéo mariage élégant', description: 'Cérémonie raffinée', src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.48.33_f33d3e99.mp4' },
  { id: 60, type: 'video', category: 'Privé', title: 'Vidéo anniversaire', description: 'Fête d\'anniversaire', src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.48.34_d8d7bc2f.mp4' },
  { id: 61, type: 'video', category: 'Privé', title: 'Vidéo événement corporatif', description: 'Service entreprise', src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.49.29_e7a48784.mp4' },
  { id: 62, type: 'video', category: 'Privé', title: 'Vidéo réception d\'entreprise', description: 'Événement corporatif', src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.49.31_80ddd562.mp4' },
  { id: 63, type: 'video', category: 'Privé', title: 'Vidéo mariage', description: 'Cérémonie de mariage', src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.49.32_04be9d3b.mp4' },
  { id: 64, type: 'video', category: 'Privé', title: 'Vidéo anniversaire privé', description: 'Fête privée', src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.49.33_f934de68.mp4' },
  { id: 65, type: 'video', category: 'Privé', title: 'Vidéo événement spécial', description: 'Occasion spéciale', src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.49.34_3e926fd5.mp4' },
  { id: 66, type: 'video', category: 'Privé', title: 'Vidéo réception VIP', description: 'Événement exclusif', src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.49.35_c09bdb57.mp4' },
  { id: 67, type: 'video', category: 'Privé', title: 'Vidéo mariage élégant', description: 'Cérémonie raffinée', src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.49.36_95e518ea.mp4' },
  { id: 68, type: 'video', category: 'Privé', title: 'Vidéo anniversaire', description: 'Fête d\'anniversaire', src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.49.39_9ea5c2b3.mp4' },
  { id: 69, type: 'video', category: 'Privé', title: 'Vidéo événement corporatif', description: 'Service entreprise', src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.49.40_31c249f3.mp4' },
  { id: 70, type: 'video', category: 'Privé', title: 'Vidéo réception', description: 'Événement intime', src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.49.42_00936bbf.mp4' },
  { id: 71, type: 'video', category: 'Privé', title: 'Vidéo anniversaire VIP', description: 'Fête exclusive', src: '/images/gallery/WhatsApp Vidéo 2025-10-14 à 15.49.42_8e8bb76f.mp4' }
]

const filteredItems = computed(() => {
  if (activeFilter.value === 'Tous') {
    return galleryItems
  }
  return galleryItems.filter(item => item.category === activeFilter.value)
})
</script>

