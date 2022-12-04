<template>
  <div>
    <el-button>
      Click Me!
    </el-button>
  </div>
</template>

<script setup>
import { ID_INJECTION_KEY } from 'element-plus'
import { ElButton } from 'element-plus'
provide(ID_INJECTION_KEY, {
  prefix: 100,
  current: 0,
})
</script>