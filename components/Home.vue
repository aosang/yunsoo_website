<template>
  <div class="w-[1160px] mx-auto mt-10 mb-[96px]">
    <div class="w-[1160px] text-center">
      <h1 class="text-[44px] font-bold">Email advertising done right</h1>
      <h2 class="text-[14px] text-[#818890] mt-2">
        Get access to the internet's best tools for email advertising.
      </h2>
      <h2 class="text-[14px] text-[#818890]">
        We connect high-quality newsletters and big brand advertisers.
      </h2>
    </div>
    <div class="flex justify-center gap-4 mt-6">
      <UButton color="secondary" size="xl" class="cursor-pointer">Request Demo</UButton>
      <UButton variant="outline" color="secondary" size="xl" class="cursor-pointer">Get started</UButton>
    </div>
    <div class="flex justify-center gap-4 mt-6">
      <div class="flex items-center gap-1">
        <UIcon name="i-lucide-circle-check" class="size-5 text-blue-500" />
        <p class="font-bold">100+ Advertisers</p>
      </div>
      <div class="flex items-center gap-1">
        <UIcon name="i-lucide-circle-check" class="size-5 text-blue-500" />
        <p class="font-bold">600+ Newsletters</p>
      </div>
      <div class="flex items-center gap-1">
        <UIcon name="i-lucide-circle-check" class="size-5 text-blue-500" />
        <p class="font-bold">151.3+ Subscribers</p>
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
      <div class="w-[32.5%] h-[110px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] flex items-center mb-4">
        <div>
          <div class="bg-[#f1f1fc] w-[60px] h-[60px] my-[15px] ml-[15px] flex items-center justify-center box-border">
            <UIcon 
              name="i-material-symbols-add-notes" 
              class="size-8 text-[#6768bb]" 
            />
          </div>
        </div>
        <div class="mx-4">
          <h3 class="text-[16px] font-bold">工单管理</h3>
          <p class="text-[13px] leading-5 mt-0.5">简单易用的工单流程，支持维修、保养等任务一键创建、自动派发和状态跟踪，员工操作无门槛，问题处理更高效。</p>
        </div>
      </div>
      <div class="w-[32.5%] h-[110px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] flex items-center mb-4">
        <div>
          <div class="bg-[#f5effc] w-[60px] h-[60px] my-[15px] ml-[15px] flex items-center justify-center">
            <UIcon 
              name="i-material-symbols-inventory-2" 
              class="size-8 text-[#b763ef]" />
          </div>
        </div>
        <div class="mx-4">
          <h3 class="text-[16px] font-bold">库存管理</h3>
          <p class="text-[13px] leading-5 mt-0.5">智能化库存台账，轻松管理耗材、备件出入库，支持库存预警，避免缺料与浪费。</p>
        </div>
      </div>
      <div class="w-[32.5%] h-[110px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] flex items-center">
        <div>
          <div class="bg-[#e9f9fc] w-[60px] h-[60px] my-[15px] ml-[15px] flex items-center justify-center">
          <UIcon name="i-material-symbols-fact-check" class="size-8 text-[#36c2cd]" />
          </div>
        </div>
        <div class="mx-4">
          <h3 class="text-[16px] font-bold">巡检管理</h3>
          <p class="text-[13px] leading-5 mt-0.5">灵活配置巡检计划，支持手机端点检打卡与异常拍照上传，巡检结果清晰可查，保障设备日常运行安全。</p>
        </div>
      </div>
      <div class="w-[32.5%] h-[110px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] mb-4 flex items-center">
        <div>
          <div class="bg-[#fdf0ec] w-[60px] h-[60px] my-[15px] ml-[15px] flex items-center justify-center">
            <UIcon name="i-material-symbols-important-devices-sharp" class="size-8 text-[#ed624b]" />
          </div>
        </div>
        <div class="mx-4">
          <h3 class="text-[16px] font-bold">设备管理</h3>
          <p class="text-[13px] leading-5 mt-0.5">从采购、登记到维护、报废，系统自动记录设备全生命周期，清晰掌握每一项资产的状态与成本。</p>
        </div>
      </div>
      <div class="w-[32.5%] h-[110px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] mb-4 flex items-center">
        <div>
          <div class="bg-[#f1f1fa] w-[60px] h-[60px] my-[15px] ml-[15px] flex items-center justify-center">
            <UIcon name="i-material-symbols-view-compact-alt-rounded" class="size-8 text-[#7372ca]" />
          </div>
        </div>
        <div class="mx-4">
          <h3 class="text-[16px] font-bold">AI知识库</h3> 
          <p class="text-[13px] leading-5 mt-0.5">内置智能知识库，汇集常见故障、维修方案与操作手册，支持关键词搜索与智能推荐，帮助快速解决现场问题。</p>
        </div>
      </div>
      <div class="w-[32.5%] h-[110px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] mb-4 flex items-center">
        <div>
          <div class="bg-[#fdf0ec] w-[60px] h-[60px] my-[15px] ml-[15px] flex items-center justify-center">
            <UIcon name="i-material-symbols-important-devices-sharp" class="size-8 text-[#ed624b]" />
          </div>
        </div>
        <div class="mx-4">
          <h3 class="text-[16px] font-bold">资产统计</h3> 
          <p class="text-[13px] leading-5 mt-0.5">提供实用的图表与报表工具，一键导出资产台账、维修记录、库存明细，让管理更透明、决策更简单。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
