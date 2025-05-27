<template>
  <div class="w-[1160px] mx-auto mt-10 mb-[96px]">
    <div class="w-[1160px] text-center">
      <h1 class="text-[44px] font-bold">轻量级IT资产管理系统</h1>
      <h2 class="text-[15px] text-[#818890] mt-2">
        聚焦"易用、实用、高效"，实现对IT设备资产的规范化管理。
      </h2>
    </div>
    <div class="flex justify-center gap-4 mt-6">
      <UButton
        color="blue"
        size="xl"
        class="cursor-pointer"
        @click="openModal"
      >
        立即体验
      </UButton>

      <UModal v-model="isOpen" prevent-close class="w-[500px]">
        <UCard class="relative">
          <div class="flex items-center justify-between">
            <div class="text-[16px] font-bold">选择平台</div>
            <UButton 
              color="gray" 
              variant="ghost" 
              icon="i-heroicons-x-mark-20-solid"  
              @click="isOpen = false" 
            />
          </div>
          <UDivider class="mt-2" />
          <!-- <div class="flex items-center justify-center">
            <div class="w-[100px] h-[100px] bg-gray-200 rounded-full"></div>
          </div> -->
        </UCard>
      </UModal>

      <UButton
        variant="outline"
        color="blue"
        class="cursor-pointer"
      >
        下载产品资料
      </UButton>
    </div>

    <div class="flex justify-center gap-4 mt-6">
      <div class="flex items-center gap-1">
        <UIcon name="i-lucide-circle-check" class="size-5 text-blue-500" />
        <p class="font-bold">无需复杂部署，开箱即用</p>
      </div>
      <div class="flex items-center gap-1">
        <UIcon name="i-lucide-circle-check" class="size-5 text-blue-500" />
        <p class="font-bold">适合寻求简洁化管理的中小组织</p>
      </div>
      <div class="flex items-center gap-1">
        <UIcon name="i-lucide-circle-check" class="size-5 text-blue-500" />
        <p class="font-bold">可提供定制化服务</p>
      </div>
    </div>
    <div class="mt-6">
      <img
        src="https://www.wangle.run/company_icon/public_image/yunsoo_home.png"
        alt="yunsoo home"
        class="w-[100%] shadow-[0_0_10px_rgba(0,0,0,0.2)]"
      />
    </div>
    <div class="w-[100%] mx-auto mt-[20px] flex flex-wrap justify-between">
      <div
        class="w-[32.5%] h-[110px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] flex items-center mb-4"
      >
        <div>
          <div
            class="bg-[#f1f1fc] w-[60px] h-[60px] my-[15px] ml-[15px] flex items-center justify-center box-border"
          >
            <UIcon
              name="i-material-symbols-add-notes"
              class="size-8 text-[#6768bb]"
            />
          </div>
        </div>
        <div class="mx-4">
          <h3 class="text-[16px] font-bold">工单管理</h3>
          <p class="text-[13px] leading-5 mt-0.5">
            简单易用的工单流程，支持任务一键创建，员工操作无门槛，问题处理更高效。
          </p>
        </div>
      </div>
      <div
        class="w-[32.5%] h-[110px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] flex items-center mb-4"
      >
        <div>
          <div
            class="bg-[#f5effc] w-[60px] h-[60px] my-[15px] ml-[15px] flex items-center justify-center"
          >
            <UIcon
              name="i-material-symbols-inventory-2"
              class="size-8 text-[#b763ef]"
            />
          </div>
        </div>
        <div class="mx-4">
          <h3 class="text-[16px] font-bold">库存管理</h3>
          <p class="text-[13px] leading-5 mt-0.5">
            精准掌控出入库动态，智能化库存台账，轻松管理设备，支持库存预警。
          </p>
        </div>
      </div>
      <div
        class="w-[32.5%] h-[110px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] flex items-center"
      >
        <div>
          <div
            class="bg-[#e9f9fc] w-[60px] h-[60px] my-[15px] ml-[15px] flex items-center justify-center"
          >
            <UIcon
              name="i-material-symbols-fact-check"
              class="size-8 text-[#36c2cd]"
            />
          </div>
        </div>
        <div class="mx-4">
          <h3 class="text-[16px] font-bold">巡检管理</h3>
          <p class="text-[13px] leading-5 mt-0.5">
            灵活配置巡检计划，巡检结果清晰可查，保障设备日常运行安全。
          </p>
        </div>
      </div>
      <div
        class="w-[32.5%] h-[110px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] mb-4 flex items-center"
      >
        <div>
          <div
            class="bg-[#fdf0ec] w-[60px] h-[60px] my-[15px] ml-[15px] flex items-center justify-center"
          >
            <UIcon
              name="i-material-symbols-important-devices-sharp"
              class="size-8 text-[#ed624b]"
            />
          </div>
        </div>
        <div class="mx-4">
          <h3 class="text-[16px] font-bold">设备管理</h3>
          <p class="text-[13px] leading-5 mt-0.5">
            支持Excel一键导入IT设备，清晰掌握每一项资产的状态与成本。
          </p>
        </div>
      </div>
      <div
        class="w-[32.5%] h-[110px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] mb-4 flex items-center"
      >
        <div>
          <div
            class="bg-[#f1f1fa] w-[60px] h-[60px] my-[15px] ml-[15px] flex items-center justify-center"
          >
            <UIcon
              name="i-material-symbols-view-compact-alt-rounded"
              class="size-8 text-[#7372ca]"
            />
          </div>
        </div>
        <div class="mx-4">
          <h3 class="text-[16px] font-bold">AI知识库</h3>
          <p class="text-[13px] leading-5 mt-0.5">
            内置智能知识库，汇集常见故障、维修方案，帮助快速定位解决问题。
          </p>
        </div>
      </div>
      <div
        class="w-[32.5%] h-[110px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] mb-4 flex items-center"
      >
        <div>
          <div
            class="bg-[#fdf0ec] w-[60px] h-[60px] my-[15px] ml-[15px] flex items-center justify-center"
          >
            <UIcon
              name="i-material-symbols-phone-android"
              class="size-8 text-[#3c6cae]"
            />
          </div>
        </div>
        <div class="mx-4">
          <h3 class="text-[16px] font-bold">移动端支持</h3>
          <p class="text-[13px] leading-5 mt-0.5">
            兼容iOS与安卓平台，随时随地处理工单、巡检打卡、查看资产信息，助力高效协作。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const openModal = () => {
  isOpen.value = true;
}

const closeModal = () => {
  isOpen.value = false;
}
</script>
