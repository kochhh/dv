<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="'icon icon-' + iconName"
    :width="width"
    :height="height"
    :viewBox="'0 0 ' + width + ' ' + height"
    :aria-labelledby="'icon-' + iconName"
    role="img"
    focusable="false">
    <title v-if="title" :id="'icon-' + iconName" lang="ru">{{ title }}</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    iconName: {
      type: String,
      default: 'box',
    },
    width: {
      type: [Number, String],
      default: 16,
    },
    height: {
      type: [Number, String],
      default: 16,
    },
    iconColor: {
      type: String,
      default: 'currentColor',
    },
    title: {
      type: String,
    },
  },
};
</script>
