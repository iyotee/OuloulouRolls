<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg">
    <nav class="container mx-auto px-3 sm:px-4 lg:px-8">
      <div class="flex items-center justify-between h-20 sm:h-22 md:h-20 lg:h-22">
        <!-- Logo -->
        <router-link to="/" class="flex items-center flex-shrink-0">
          <img src="/logo.svg" alt="Ouloulou Ice Rolls" class="h-16 sm:h-18 md:h-14 lg:h-16 xl:h-18 transition-transform hover:scale-105">
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-6 lg:space-x-8">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            class="text-gray-700 hover:text-accent-indigo font-medium transition-colors duration-200 relative group"
          >
            {{ link.name }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-indigo to-purple-600 group-hover:w-full transition-all duration-300"></span>
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMenu"
          class="md:hidden flex flex-col items-center justify-center w-12 h-12 sm:w-14 sm:h-14 space-y-1.5 bg-white border-2 border-gray-300 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex-shrink-0 mx-2 relative z-[9999]"
          :class="{ 'space-y-0': isMenuOpen }"
          aria-label="Menu de navigation"
        >
          <span 
            class="block w-5 h-0.5 sm:w-6 sm:h-0.5 bg-gray-700 transition-all duration-300"
            :class="{ 'rotate-45 translate-y-1.5': isMenuOpen }"
          ></span>
          <span 
            class="block w-5 h-0.5 sm:w-6 sm:h-0.5 bg-gray-700 transition-all duration-300"
            :class="{ 'opacity-0': isMenuOpen }"
          ></span>
          <span 
            class="block w-5 h-0.5 sm:w-6 sm:h-0.5 bg-gray-700 transition-all duration-300"
            :class="{ '-rotate-45 -translate-y-1.5': isMenuOpen }"
          ></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div 
          v-if="isMenuOpen" 
          class="md:hidden absolute top-20 sm:top-22 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl"
        >
          <div class="container mx-auto px-3 sm:px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <router-link 
              v-for="link in navLinks" 
              :key="link.path"
              :to="link.path"
              @click="closeMenu"
              class="block px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-700 hover:text-accent-indigo hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
            >
              {{ link.name }}
            </router-link>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'Nos Services', path: '/services' },
  { name: 'Nous Ont Fait Confiance', path: '/confiance' },
  { name: 'Galerie', path: '/galerie' },
  { name: 'Contact', path: '/contact' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// Forcer la visibilité du bouton hamburger SEULEMENT sur mobile
const forceButtonVisibility = () => {
  nextTick(() => {
    const button = document.querySelector('button[aria-label="Menu de navigation"]')
    if (button && window.innerWidth <= 768) {
      button.style.display = 'flex'
      button.style.visibility = 'visible'
      button.style.opacity = '1'
      button.style.zIndex = '9999'
    } else if (button && window.innerWidth > 768) {
      button.style.display = 'none'
    }
  })
}

// Écouter les changements de route
router.afterEach(() => {
  closeMenu()
  forceButtonVisibility()
})

onMounted(() => {
  forceButtonVisibility()
})
</script>

<style scoped>
/* Améliorations spécifiques pour les écrans 18:9 (Samsung S24, etc.) */
@media screen and (max-width: 414px) and (min-aspect-ratio: 16/9) {
  .container {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  
  /* Assurer que le bouton hamburger reste visible et centré */
  button[aria-label="Menu de navigation"] {
    min-width: 48px;
    min-height: 48px;
    position: relative;
    z-index: 20;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    display: flex !important;
    align-items: center;
    justify-content: center;
  }
  
  /* Améliorer l'espacement sur les écrans très étroits */
  .flex.items-center.justify-between {
    gap: 0.25rem;
    align-items: center;
  }
  
  /* S'assurer que le logo ne pousse pas le bouton hors de l'écran */
  .flex.items-center.justify-between > a:first-child {
    flex-shrink: 1;
    max-width: calc(100% - 60px);
  }
}

/* Améliorations pour les écrans très petits */
@media screen and (max-width: 375px) {
  .container {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  
  /* Réduire encore plus l'espacement si nécessaire */
  .flex.items-center.justify-between {
    gap: 0.125rem;
    align-items: center;
  }
  
  /* Bouton hamburger encore plus visible sur très petits écrans */
  button[aria-label="Menu de navigation"] {
    min-width: 44px;
    min-height: 44px;
    z-index: 25;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    border-width: 2px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  /* Logo adapté sur très petits écrans */
  .flex.items-center.justify-between > a:first-child {
    max-width: calc(100% - 50px);
  }
  
  .flex.items-center.justify-between > a:first-child img {
    max-height: 3rem;
  }
}

/* Assurer que le menu mobile ne déborde pas */
@media screen and (max-width: 480px) {
  .md\\:hidden.absolute {
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
  }
}

/* Règle générale pour s'assurer que le bouton hamburger reste toujours visible SEULEMENT sur mobile */
@media screen and (max-width: 768px) {
  button[aria-label="Menu de navigation"] {
    position: relative !important;
    z-index: 9999 !important;
    display: flex !important;
    visibility: visible !important;
    opacity: 1 !important;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    min-width: 44px;
    min-height: 44px;
    background-color: white !important;
    border: 2px solid #d1d5db !important;
    border-radius: 0.75rem !important;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
  }
  
  /* S'assurer que le conteneur flex ne compresse pas le bouton */
  .flex.items-center.justify-between {
    align-items: center;
    min-height: 5rem;
  }
  
  /* Forcer la visibilité sur tous les écrans mobiles */
  .md\\:hidden {
    display: flex !important;
  }
}

/* Sur les écrans moyens et larges, respecter la classe md:hidden */
@media screen and (min-width: 769px) {
  button[aria-label="Menu de navigation"] {
    display: none !important;
  }
}
</style>

