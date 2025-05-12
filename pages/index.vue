<template>
  <div>
    <Header />
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

useHead({
  title: '云疏资产管理系统',
  meta: [{ 
    name: 'description', 
    content: '云疏资产管理系统' 
  }]
})
</script>