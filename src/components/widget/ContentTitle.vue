<template>
  <div>
    <v-row no-gutters align="center" justify="space-between">
      <v-col cols="10" sm="10" class="text-start">
        <v-card-title class="sub-title">Title</v-card-title>
      </v-col>
      <v-col cols="2" sm="2" class="text-end">
        <v-btn class="seeAll sub-title" text outlined>
          See all
          <v-icon>arrow_forward</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ContentTitle"
};
</script>

<style lang="scss" scoped>
$btn-focus-opacity: 1 !default;

.seeAll {
  border: none;
  box-shadow: none;
  font-size: 16px;
  $btn-active-opacity: 0;
  $btn-font-weight: 800;
}
.seeAll:focus {
  background: none;
}
</style>