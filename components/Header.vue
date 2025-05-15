<template>
  <div class="w-[100%] mx-auto my-0 border-b border-gray-100">
    <div class="w-[1160px] mx-auto my-0 flex">
      <img
        src="https://www.wangle.run/company_icon/public_image/system_logo.png"
        alt="logo"
        class="w-[120px] h-[100%] mt-[14px] block"
      />
      <ul class="flex w-[400px] mx-auto leading-[56px]">
        <li class="w-[33.33%]">
          <a class="text-center block text-[14px] cursor-pointer">功能介绍</a>
        </li>
        <li class="w-[33.33%]">
          <a class="text-center block text-[14px] cursor-pointer">联系我们</a>
        </li>
        <li class="w-[33.33%]">
          <a class="text-center block text-[14px] cursor-pointer">FAQ</a>
        </li>
      </ul>
      <div class="flex items-center">
        <UButton 
          size="xl" 
          color="secondary" 
          class="cursor-pointer"
          icon="i-lucide-rocket"
        >
          立即使用
        </UButton>
      </div>
      
    </div>
  </div>
</template>

<script setup>
</script>
<style scoped>
</style>