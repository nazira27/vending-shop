<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    :src="barImage"
    mobile-break-point="960"
    app
    width="260"
    v-bind="$attrs"
  >
    <template v-slot:img="props">
      <v-img :gradient="`to bottom, ${barColor}`" v-bind="props" />
    </template>

    <v-divider class="mb-1" />

    <v-list dense nav>
      <v-list-item>
        <v-list-item-avatar class="align-self-center" color="white" contain>
          <v-img
            src="~@/assets/logo.png"
            max-height="30"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="title" v-text="profile.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mb-2" />

    <v-list expand nav>
      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />
      <v-list-item v-for="item in items" :key="item.title" link :to="item.to" exact>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="subtitle-1">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
     

      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />
    </v-list>

    
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapState } from "vuex";
export default {
  name: "DashboardCoreDrawer",
  props: {
    expandOnHover: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    items: [
      {
        icon: "mdi-view-dashboard",
        title: "Dashboard",
        to: "/app"
      },
      {
        icon: "mdi-account",
        title: "Technician",
        to: "/app/technician"
      },
      {
        title: "Reasercher",
        icon: "mdi-clipboard-outline",
        to: "/app/researcher"
      },
      {
        title: "Statistics Collector",
        icon: "mdi-chart-bubble",
        to: "/app/statistics-generator"
      },
      {
        title: "Regions",
        icon: "mdi-map-marker",
        to: "/app/regions"
      },
      // {
      //   title: "Notifications",
      //   icon: "mdi-bell",
      //   to: "/app/notifications"
      // }
    ]
  }),
  computed: {
    ...mapState(["barColor", "barImage"]),
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("SET_DRAWER", val);
      }
    },
    computedItems() {
      return this.items.map(this.mapItem);
    },
    profile() {
      return {
        avatar: true,
        title: "Air indexer"
      };
    }
  },
  methods: {
    mapItem(item) {
      return {
        ...item,
        children: item.children ? item.children.map(this.mapItem) : undefined,
        title: item.title
      };
    }
  }
};
</script>

<style lang="sass">

</style>