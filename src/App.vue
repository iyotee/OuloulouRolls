<template>
  <div id="app" class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1 pt-20">
      <router-view />
    </main>
    <Footer />
    
    <!-- WhatsApp Floating Button -->
    <a 
      href="https://wa.me/41764166916"
      target="_blank"
      class="fixed bottom-6 left-6 z-50 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110"
      title="Nous contacter sur WhatsApp"
    >
      <i class="fab fa-whatsapp text-2xl text-black"></i>
    </a>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
