<template>
  <div
    :class="keyValue ? 'custom-select key-value display-2' :'custom-select display-2'"
    :tabindex="tabindex"
    @blur="open = false"
  >
    <div
      class="selected"
      :class="{open: open}"
      @click="open = !open"
    >{{ selectedOption ? selectedOption : selected }}</div>
    <div v-if="keyValue" class="items" :class="{selectHide: !open}">
      <div
        class="item"
        v-for="(option, i) of options"
        :key="i"
        @click="onKeyChange(option)"
      >{{ option.title }}</div>
    </div>
    <div v-else class="items" :class="{selectHide: !open}">
      <div
        class="item"
        v-for="(option, i) of options"
        :key="i"
        @click="onchange(option)"
      >{{ option }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    keyValue: {
      type: Boolean,
      default: false
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0
    },
    selectedOptionProp: {
      required: false
    }
  },
  computed: {
    selected: {
      get() {
        if (this.keyValue) {
          if (this.selectedOptionProp) {
            return this.options.find(
              item => item.ids[0] == this.selectedOptionProp
            ).title;
          }
          return this.options[0].title;
        }
        return this.options.length > 0 ? this.options[0] : null;
      },
      set(value) {
        return value;
      }
    }
  },
  data() {
    return {
      open: false,
      selectedOption: this.selected
    };
  },
  mounted() {
    if (this.keyValue) {
      if (this.selectedOptionProp) {
        this.$emit("input", this.selectedOptionProp);
      } else {
        this.$emit("input", this.options[0].ids[0]);
      }
    } else {
      this.$emit("input", this.selected);
    }
  },
  methods: {
    onchange(option) {
      this.selectedOption = option;
      this.open = false;
      this.$emit("input", option);
    },
    onKeyChange(option) {
      this.selectedOption = option.title;
      this.open = false;
      this.$emit("input", option.ids[0]);
      this.$emit("change", option.title);
    }
  }
};
</script>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  min-height: 42px;
  border: 2px solid $background;
  border-radius: 10px;
  color: #333333;
  line-height: 40px!important;
}

.selected {
  padding-left: 8px;
  cursor: pointer;
  user-select: none;
}

.selected.open {
  border-radius: 6px 6px 0px 0px;
}

.selected:after {
  position: absolute;
  content: "";
  top: 33%;
  right: 5%;
  width: 10px;
  height: 16px;
  background-image: url("~@/assets/select.svg");
  background-repeat: no-repeat;
  background-size: contain;
}
.custom-select.key-value {
  padding: 6px 8px;
}
.items {
  border: 2px solid $background;
  border-radius: 10px;
  overflow: hidden;
  position: absolute;
  background-color: #ffffff;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  max-height: 159px;
  overflow-y: scroll;
}

.item {
  color: #333333;
  padding-left: 8px;
  cursor: pointer;
  user-select: none;
}

.item:hover {
  background-color: $background;
}

.selectHide {
  display: none;
}
</style>