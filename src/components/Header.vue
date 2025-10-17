<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg">
    <nav class="container mx-auto px-4 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center">
          <img src="/logo.svg" alt="Ouloulou Ice Rolls" class="h-12 lg:h-16 transition-transform hover:scale-105">
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
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
          class="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          :class="{ 'space-y-0': isMenuOpen }"
        >
          <span 
            class="block w-6 h-0.5 bg-gray-700 transition-all duration-300"
            :class="{ 'rotate-45 translate-y-1': isMenuOpen }"
          ></span>
          <span 
            class="block w-6 h-0.5 bg-gray-700 transition-all duration-300"
            :class="{ 'opacity-0': isMenuOpen }"
          ></span>
          <span 
            class="block w-6 h-0.5 bg-gray-700 transition-all duration-300"
            :class="{ '-rotate-45 -translate-y-1': isMenuOpen }"
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
          class="md:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl"
        >
          <div class="container mx-auto px-4 py-6 space-y-4">
            <router-link 
              v-for="link in navLinks" 
              :key="link.path"
              :to="link.path"
              @click="closeMenu"
              class="block px-4 py-3 text-gray-700 hover:text-accent-indigo hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
            >
              {{ link.name }}
            </router-link>
            <!-- WhatsApp Icon Mobile -->
            <a 
              href="https://wa.me/41764166916"
              target="_blank"
              @click="closeMenu"
              class="flex items-center px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
            >
              <i class="fab fa-whatsapp text-lg mr-3"></i>
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
  { name: 'Galerie', path: '/galerie' },
  { name: 'Nos Services', path: '/services' },
  { name: 'Nous ont fait confiance', path: '/confiance' },
  { name: 'Contact', path: '/contact' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

