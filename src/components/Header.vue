<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg">
    <nav class="container mx-auto px-3 sm:px-4 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-18 md:h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center flex-shrink-0">
          <img src="/logo.svg" alt="Ouloulou Ice Rolls" class="h-10 sm:h-12 md:h-14 lg:h-16 transition-transform hover:scale-105">
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
          <!-- WhatsApp Icon -->
          <a 
            href="https://wa.me/41764166916"
            target="_blank"
            class="text-gray-700 hover:text-black transition-all duration-200 hover:scale-110"
            title="Nous contacter sur WhatsApp"
          >
            <i class="fab fa-whatsapp text-2xl"></i>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMenu"
          class="md:hidden flex flex-col items-center justify-center w-11 h-11 sm:w-12 sm:h-12 space-y-1.5 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex-shrink-0"
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
          class="md:hidden absolute top-16 sm:top-18 md:top-20 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl"
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
            <!-- WhatsApp Icon Mobile -->
            <a 
              href="https://wa.me/41764166916"
              target="_blank"
              @click="closeMenu"
              class="flex items-center px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
            >
              <i class="fab fa-whatsapp text-base sm:text-lg mr-2 sm:mr-3"></i>
              WhatsApp
            </a>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'Nos Services', path: '/services' },
  { name: 'Nous ont fait confiance', path: '/confiance' },
  { name: 'Galerie', path: '/galerie' },
  { name: 'Contact', path: '/contact' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
/* Améliorations spécifiques pour les écrans 18:9 (Samsung S24, etc.) */
@media screen and (max-width: 414px) and (min-aspect-ratio: 16/9) {
  .container {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  
  /* Assurer que le bouton hamburger reste visible */
  button[aria-label="Menu de navigation"] {
    min-width: 44px;
    min-height: 44px;
    position: relative;
    z-index: 10;
  }
  
  /* Améliorer l'espacement sur les écrans très étroits */
  .flex.items-center.justify-between {
    gap: 0.5rem;
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
    gap: 0.25rem;
  }
}

/* Assurer que le menu mobile ne déborde pas */
@media screen and (max-width: 480px) {
  .md\\:hidden.absolute {
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
  }
}
</style>

