<template>
  <b-navbar toggleable="lg" type="custom">
    <b-container>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-brand v-if="$route.name === 'Home'" tag="span">
        <base-icon icon-name="logo" width="94" height="106">
          <icon-logo />
        </base-icon>
      </b-navbar-brand>
      <b-navbar-brand v-else to="/">
        <base-icon icon-name="logo" width="94" height="106">
          <icon-logo />
        </base-icon>
      </b-navbar-brand>
      <div class="navbar-user ml-auto">
        <b-dropdown right no-caret>
          <template v-slot:button-content>
            <b-avatar src="@/assets/images/photo@2x.jpg" size="40px"></b-avatar>
          </template>
          <b-dropdown-item href="#">An item</b-dropdown-item>
          <b-dropdown-item href="#">Another item</b-dropdown-item>
        </b-dropdown>
      </div>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/academy" exact>Академия</b-nav-item>
          <b-nav-item href="#">Обучение</b-nav-item>
          <b-nav-item href="#">Camp</b-nav-item>
          <b-nav-item href="#">Магазин</b-nav-item>
          <b-nav-item href="#">Лига</b-nav-item>
          <b-nav-item href="#">Календарь</b-nav-item>
          <b-nav-item to="/blog" exact>Блог</b-nav-item>
          <b-nav-item href="#">Компания</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import BaseIcon from './BaseIcon.vue';
import IconLogo from './icons/IconLogo.vue';

export default {
  components: {
    BaseIcon, IconLogo,
  },
};
</script>
