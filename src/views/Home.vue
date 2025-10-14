<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center bg-gray-50 overflow-hidden">
      <div class="relative z-10 text-center text-gray-800 px-4">
        <img src="/logo.svg" alt="Ouloulou Ice Rolls" class="mx-auto h-48 lg:h-64 mb-12 drop-shadow-2xl animate-float">
        
        <h1 class="text-5xl lg:text-7xl font-meddon mb-12 drop-shadow-lg hero-title-mobile">
          Glaces Roulées
        </h1>
        
        
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
            <h3 class="text-3xl lg:text-4xl font-windsong text-center" style="color: #62B1CE;">Une Aventure Thaïlandaise Authentique</h3>
            <p>
              <strong>Ouloulou Ice Rolls</strong> trouve ses racines dans un road trip mémorable à travers la Thaïlande, 
              où j'ai eu l'occasion de découvrir les fameuses glaces roulées. Fasciné par cette technique artisanale 
              et innovante, j'ai décidé d'aller plus loin en effectuant un stage pratique sur place.
            </p>
            <p>
              Au cœur des marchés locaux de Bangkok et Chiang Mai, j'ai appris les secrets de fabrication aux côtés 
              d'artisans passionnés. Ce savoir-faire authentique, transmis de génération en génération, combiné à 
              une expérience culinaire unique, m'a inspiré à lancer <strong>Ouloulou Ice Rolls</strong> pour partager 
              cette aventure et apporter une touche de fraîcheur et d'exotisme à nos clients suisses.
            </p>
            <p>
              Chaque glace roulée que nous créons raconte cette histoire d'amour entre la tradition thaïlandaise 
              et l'innovation suisse, créant une expérience gustative inoubliable.
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
            <h3 class="text-3xl lg:text-4xl font-windsong text-center" style="color: #62B1CE;">Excellence et Qualité Suisse</h3>
            <p>
              Chez <strong>Ouloulou Ice Rolls</strong>, nous accordons une importance primordiale à la qualité de nos ingrédients. 
              Nous nous approvisionnons localement auprès de producteurs suisses pour offrir des produits frais et soutenir 
              l'économie de notre région, tout en respectant les standards de qualité helvétiques.
            </p>
            <p>
              Fruits de saison cueillis à maturité, produits laitiers de fermes locales et ingrédients premium sont sélectionnés 
              avec le plus grand soin afin de garantir une saveur authentique dans chaque rouleau de glace. Pour compléter notre 
              offre et assurer une variété de goûts exceptionnels, nous travaillons également avec des fournisseurs de grande 
              distribution renommés, garantissant ainsi la traçabilité et la sécurité alimentaire.
            </p>
            <p>
              Cette approche hybride nous permet d'allier tradition locale et qualité constante, créant des glaces à la fois 
              savoureuses, accessibles et conformes aux exigences suisses les plus strictes.
            </p>
          </div>
        </div>

        <!-- Troisième section: Street Food & Événements Premium -->
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div class="space-y-6 text-gray-700 text-lg">
            <h3 class="text-3xl lg:text-4xl font-windsong text-center" style="color: #62B1CE;">Street Food & Événements Premium</h3>
            <p>
              Chez <strong>Ouloulou Ice Rolls</strong>, l'énergie et l'authenticité de la street food thaïlandaise sont au cœur 
              de notre passion. C'est cette ambiance vivante, conviviale et spontanée qui nous inspire au quotidien et qui 
              fait de chaque service une véritable expérience théâtrale.
            </p>
            <p>
              Cependant, nous savons aussi nous adapter avec élégance pour des événements spéciaux tels que mariages, 
              anniversaires, lancements de produits ou célébrations d'entreprise. Nous transformons l'expérience street food 
              en une prestation sur mesure, sophistiquée et adaptée aux besoins de chaque occasion.
            </p>
            <p>
              Que ce soit pour un cocktail raffiné dans un hôtel 5 étoiles ou un moment de convivialité lors d'un festival, 
              nous apportons notre savoir-faire unique, en alliant spectacle culinaire et plaisir gourmand, pour faire de 
              chaque événement un moment mémorable et Instagram-worthy.
            </p>
          </div>
          
          <div class="rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
            <img src="/images/WhatsApp Image 2025-10-14 à 15.49.28_845af5e5.jpg" alt="Événements et street food" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
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
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
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

