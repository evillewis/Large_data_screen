<script setup>
import ModuleTitle from '../views/ModuleTitle.vue'
import ModuleFirst from '../views/ModuleFirst.vue'
import ModuleSecond from '../views/ModuleSecond.vue'
import ModuleThird from '../views/ModuleThird.vue'
import ModuleFourth from '../views/ModuleFourth.vue'
import ModuleFifth from '../views/ModuleFifth.vue'
import { BorderBox12 as DvBorderBox12 } from '@kjgl77/datav-vue3'

</script>



<template>

  <v-scale-screen width="1920" height="1080">
    <ModuleTitle />
    <div class="main">
      <dv-border-box12 backgroundColor='#45526d'>
        <ModuleFirst />
      </dv-border-box12>

      <dv-border-box12 backgroundColor='#45526d'>
        <ModuleSecond />
      </dv-border-box12>
      <dv-border-box8 backgroundColor='#383f4d'>
        <div class="map">
          <ModuleThird />
        </div>
      </dv-border-box8>
      <dv-border-box13 backgroundColor='#9cafd8'>

        <ModuleFourth />
      </dv-border-box13>
      <dv-border-box13 backgroundColor='#9cafd8'>
        <ModuleFifth />
      </dv-border-box13>

    </div>
  </v-scale-screen>


</template>
<style scoped>

.map {
  padding-top: 100px
}
</style>