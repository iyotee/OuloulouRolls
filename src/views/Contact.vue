<template>
  <div class="min-h-screen pt-20">
    <!-- Page Header -->
    <section class="py-16 bg-transparent text-gray-800">
      <div class="container mx-auto px-4 lg:px-8 text-center">
        <h1 class="text-5xl lg:text-7xl font-windsong mb-6">Contactez-nous</h1>
        <p class="text-xl lg:text-2xl max-w-2xl mx-auto">
          Prêt à rendre votre événement unique ? Contactez-nous pour discuter de vos besoins 
          et réserver nos glaces roulées artisanales.
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white rounded-2xl shadow-xl p-8">
            <h2 class="text-3xl font-heading mb-6 text-gray-800">Demande de devis</h2>
            <p class="text-gray-600 mb-8">Remplissez le formulaire ci-dessous pour obtenir un devis personnalisé.</p>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Prénom *</label>
                  <input 
                    v-model="form.firstName"
                    type="text" 
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-indigo focus:border-transparent transition-all duration-200"
                    placeholder="Votre prénom"
                  >
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Nom *</label>
                  <input 
                    v-model="form.lastName"
                    type="text" 
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-indigo focus:border-transparent transition-all duration-200"
                    placeholder="Votre nom"
                  >
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                <input 
                  v-model="form.email"
                  type="email" 
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-indigo focus:border-transparent transition-all duration-200"
                  placeholder="votre@email.com"
                >
              </div>
              
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Téléphone</label>
                <input 
                  v-model="form.phone"
                  type="tel"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-indigo focus:border-transparent transition-all duration-200"
                  placeholder="+41 XX XXX XX XX"
                >
              </div>
              
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Type d'événement *</label>
                <select 
                  v-model="form.eventType"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-indigo focus:border-transparent transition-all duration-200"
                >
                  <option value="">Sélectionnez un type</option>
                  <option value="anniversaire">Anniversaire</option>
                  <option value="mariage">Mariage</option>
                  <option value="prive">Événement privé</option>
                  <option value="festival">Festival</option>
                  <option value="entreprise">Entreprise</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              
              <div v-if="form.eventType === 'autre'">
                <label class="block text-sm font-semibold text-gray-700 mb-2">Précisez le type d'événement *</label>
                <input 
                  v-model="form.customEventType"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-indigo focus:border-transparent transition-all duration-200"
                  placeholder="Quel type d'événement ?"
                >
              </div>
              
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Date de l'événement</label>
                <input 
                  v-model="form.eventDate"
                  type="date"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-indigo focus:border-transparent transition-all duration-200"
                >
              </div>
              
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                <textarea 
                  v-model="form.message"
                  required
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-indigo focus:border-transparent transition-all duration-200"
                  placeholder="Décrivez votre événement et vos besoins..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <i class="fas fa-paper-plane mr-2"></i>
                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande' }}
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="space-y-8">
            <div class="rounded-2xl p-8 text-white" style="background: linear-gradient(135deg, #5AAECC 0%, #62B1CE 100%);">
              <h2 class="text-3xl font-heading mb-6">Nos Coordonnées</h2>
              <p class="text-white/90 mb-8">N'hésitez pas à nous contacter directement.</p>
              
              <div class="space-y-6">
                <div class="flex items-center gap-4">
                  <a href="mailto:oulouloufood@gmail.com" class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-110">
                    <i class="fas fa-envelope text-xl"></i>
                  </a>
                  <div>
                    <p class="font-semibold">Email</p>
                    <a href="mailto:oulouloufood@gmail.com" class="text-white/90 hover:text-white transition-colors">
                      oulouloufood@gmail.com
                    </a>
                  </div>
                </div>
                
                <div class="flex items-center gap-4">
                  <a href="tel:+41764166916" class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-110">
                    <i class="fas fa-phone text-xl"></i>
                  </a>
                  <div>
                    <p class="font-semibold">Téléphone</p>
                    <a href="tel:+41764166916" class="text-white/90 hover:text-white transition-colors">
                      +41 76 416 69 16
                    </a>
                  </div>
                </div>
                
                <div class="flex items-center gap-4">
                  <a href="https://wa.me/41764166916" target="_blank" class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-110">
                    <i class="fab fa-whatsapp text-xl"></i>
                  </a>
                  <div>
                    <p class="font-semibold">WhatsApp</p>
                    <a href="https://wa.me/41764166916" target="_blank" class="text-white/90 hover:text-white transition-colors">
                      +41 76 416 69 16
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Google Reviews -->
            <div class="bg-white rounded-2xl shadow-xl p-8">
              <h3 class="text-2xl font-heading mb-6 text-gray-800">Nos Avis Google</h3>
              <p class="text-gray-600 mb-6">Découvrez ce que nos clients disent de nos services.</p>
              <a 
                href="https://maps.app.goo.gl/yTukj9yrVJeBdGRi6" 
                target="_blank"
                class="inline-flex items-center gap-3 px-6 py-3 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200"
                style="background: linear-gradient(135deg, #5AAECC 0%, #62B1CE 100%);"
              >
                <i class="fab fa-google text-xl"></i>
                Voir nos avis Google
              </a>
            </div>
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
import { useRoute } from 'vue-router'

const route = useRoute()
const isSubmitting = ref(false)

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  eventType: '',
  customEventType: '',
  eventDate: '',
  message: ''
})

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
  if (route.query.type) {
    form.value.eventType = route.query.type
  }
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const submitForm = async () => {
  isSubmitting.value = true
  
  // Simuler l'envoi du formulaire
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Ici vous pouvez intégrer EmailJS ou un autre service
  console.log('Formulaire envoyé:', form.value)
  
  // Reset du formulaire
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    customEventType: '',
    eventDate: '',
    message: ''
  }
  
  isSubmitting.value = false
  
  // Afficher un message de succès
  alert('Votre demande a été envoyée avec succès ! Nous vous contacterons bientôt.')
}
</script>

