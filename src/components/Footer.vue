<template>
  <footer class="bg-gray-100 border-t border-gray-200 py-16">
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Mobile Layout -->
      <div class="block md:hidden mb-8">
        <!-- Brand -->
        <div class="text-center mb-8">
          <img src="/logo.svg" alt="Ouloulou Ice Rolls" class="h-36 mx-auto mb-4">
          <p class="text-gray-600 mb-6">
            Glaces roulées artisanales inspirées de la Thaïlande pour vos événements.
          </p>
          <!-- Social Icons Only -->
          <div class="flex justify-center gap-4">
            <a 
              v-for="social in socials" 
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener"
              class="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-accent-indigo hover:text-white hover:border-accent-indigo transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>

        <!-- Contact -->
        <div class="text-center">
          <h3 class="text-lg font-heading font-semibold mb-4 text-gray-800">Contact</h3>
          <div class="space-y-3 text-gray-600">
            <a href="mailto:info@ouloulouicerolls.ch" class="flex items-center justify-center gap-2 hover:text-accent-indigo transition-colors">
              <i class="fas fa-envelope"></i>
              info@ouloulouicerolls.ch
            </a>
            <a href="tel:+41764166916" class="flex items-center justify-center gap-2 hover:text-accent-indigo transition-colors">
              <i class="fas fa-phone"></i>
              +41 76 416 69 16
            </a>
            <a href="https://maps.app.goo.gl/yTukj9yrVJeBdGRi6" target="_blank" class="flex items-center justify-center gap-2 hover:text-accent-indigo transition-colors">
              <i class="fab fa-google"></i>
              Voir nos avis Google
            </a>
          </div>
        </div>
      </div>

      <!-- Desktop Layout -->
      <div class="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div>
          <img src="/logo.svg" alt="Ouloulou Ice Rolls" class="h-36 mb-4">
          <p class="text-gray-600 mb-4">
            Glaces roulées artisanales inspirées de la Thaïlande pour vos événements.
          </p>
          <div class="flex flex-wrap gap-3">
            <a 
              v-for="social in socials" 
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener"
              class="flex items-center justify-center gap-2 w-32 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-accent-indigo hover:text-white hover:border-accent-indigo transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <i :class="social.icon"></i>
              <span class="text-sm font-medium">{{ social.name }}</span>
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div>
          <h3 class="text-lg font-heading font-semibold mb-4 text-gray-800">Navigation</h3>
          <ul class="space-y-2">
            <li v-for="link in navLinks" :key="link.path">
              <router-link 
                :to="link.path"
                class="text-gray-600 hover:text-accent-indigo transition-colors duration-200"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-heading font-semibold mb-4 text-gray-800">Services</h3>
          <ul class="space-y-2">
            <li v-for="service in services" :key="service.path">
              <router-link 
                :to="service.path"
                class="text-gray-600 hover:text-accent-indigo transition-colors duration-200"
              >
                {{ service.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-lg font-heading font-semibold mb-4 text-gray-800">Contact</h3>
          <div class="space-y-3 text-gray-600">
            <a href="mailto:info@ouloulouicerolls.ch" class="flex items-center gap-2 hover:text-accent-indigo transition-colors">
              <i class="fas fa-envelope"></i>
              info@ouloulouicerolls.ch
            </a>
            <a href="tel:+41764166916" class="flex items-center gap-2 hover:text-accent-indigo transition-colors">
              <i class="fas fa-phone"></i>
              +41 76 416 69 16
            </a>
            <a href="https://maps.app.goo.gl/yTukj9yrVJeBdGRi6" target="_blank" class="flex items-center gap-2 hover:text-accent-indigo transition-colors">
              <i class="fab fa-google"></i>
              Voir nos avis Google
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-600 text-sm">
          © {{ currentYear }} Ouloulou Ice Rolls. Tous droits réservés.
        </p>
        <div class="flex gap-6 text-sm">
          <router-link to="/privacy" class="text-gray-600 hover:text-accent-indigo transition-colors">
            Confidentialité
          </router-link>
          <router-link to="/terms" class="text-gray-600 hover:text-accent-indigo transition-colors">
            Conditions générales
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'Galerie', path: '/galerie' },
  { name: 'Nos clients', path: '/confiance' },
  { name: 'Contact', path: '/contact' }
]

const services = [
  { name: 'Événements privés', path: '/services#evenements-prives' },
  { name: 'Anniversaires', path: '/services#anniversaires' },
  { name: 'Festivals', path: '/services#festivals' },
  { name: 'Entreprises', path: '/services#entreprises' },
  { name: 'Mariages', path: '/services#mariages' }
]

const socials = [
  { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/ouloulouicerolls/' },
  { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/ouloulou-food-07a090296/' },
  { name: 'TikTok', icon: 'fab fa-tiktok', url: 'https://www.tiktok.com/@ouloulou1020' },
  { name: 'WhatsApp', icon: 'fab fa-whatsapp', url: 'https://wa.me/41764166916' }
]
</script>

