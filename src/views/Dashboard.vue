<template>
  <div class="container">
    <sLine />
    <Pie />
  </div>
</template>

<script>
import Pie from "@/components/Charts/Pie"
import sLine from "@/components/Charts/sLine"

export default {
  name: "Dashboard",
  components: { Pie, sLine },
};
</script>