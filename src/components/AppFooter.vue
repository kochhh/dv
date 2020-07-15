<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="row">
          <div class="footer-logo col-lg-2">
            <base-icon v-if="$route.name === 'Home'" icon-name="logo-full" width="124" height="175">
              <icon-logo-full />
            </base-icon>
            <router-link v-else to="/" exact>
              <base-icon icon-name="logo-full" width="124" height="175">
                <icon-logo-full />
              </base-icon>
            </router-link>
          </div>
          <div class="col-lg-2">
            <div class="footer-title">
              <router-link to="/academy" class="footer-title__link" exact>Академия</router-link>
            </div>
            <ul class="footer-menu d-none d-lg-block">
              <li class="footer-menu-item">
                <a href="#" class="footer-menu-item__link">Площадки</a>
              </li>
              <li class="footer-menu-item">
                <a href="#" class="footer-menu-item__link">Лига</a>
              </li>
              <li class="footer-menu-item">
                <a href="#" class="footer-menu-item__link">Title</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2">
            <div class="footer-title">
              <router-link to="/school" class="footer-title__link">Обучение</router-link>
            </div>
            <ul class="footer-menu d-none d-lg-block">
              <li class="footer-menu-item">
                <a href="#" class="footer-menu-item__link">Тренировки</a>
              </li>
              <li class="footer-menu-item">
                <a href="#" class="footer-menu-item__link">Тренеры</a>
              </li>
              <li class="footer-menu-item">
                <a href="#" class="footer-menu-item__link">Площадки</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2">
            <div class="footer-title">
              <router-link to="/company" class="footer-title__link">Компания</router-link>
            </div>
            <ul class="footer-menu d-none d-lg-block">
              <li class="footer-menu-item">
                <a href="#" class="footer-menu-item__link">Контакты</a>
              </li>
              <li class="footer-menu-item">
                <a href="#" class="footer-menu-item__link">О нас</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2">
            <div class="footer-title">
              <router-link to="/camp" class="footer-title__link">Camp</router-link>
            </div>
            <ul class="footer-menu d-none d-lg-block">
              <li class="footer-menu-item">
                <a href="#" class="footer-menu-item__link">Мероприятия</a>
              </li>
              <li class="footer-menu-item">
                <a href="#" class="footer-menu-item__link">Subtitle</a>
              </li>
              <li class="footer-menu-item">
                <a href="#" class="footer-menu-item__link">Subtitle</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2">
            <div class="footer-contacts">
              <div class="footer-email">
                Почта: <a href="mailto:info@dv.com">info@dv.com</a>
              </div>
              <div class="footer-socials">
                <div class="footer-title d-none d-lg-block">Наши соцсети</div>
                <ul class="socials">
                  <li class="socials-item">
                    <a href="#" class="socials-item__link socials-item__link--instagram">
                      <base-icon icon-name="instagram" width="24" height="24" aria-hidden="true">
                        <icon-instagram />
                      </base-icon>
                    </a>
                  </li>
                  <li class="socials-item">
                    <a href="#" class="socials-item__link socials-item__link--facebook">
                      <base-icon icon-name="facebook" width="11" height="22" aria-hidden="true">
                        <icon-facebook />
                      </base-icon>
                    </a>
                  </li>
                  <li class="socials-item">
                    <a href="#" class="socials-item__link socials-item__link--vk">
                      <base-icon icon-name="vk" width="25" height="14" aria-hidden="true">
                        <icon-vk />
                      </base-icon>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="copyright">© Copyright 2020. Upward Movement</div>
          </div>
          <div class="col-lg-6 d-none d-lg-block">
            <div class="created">
              Created by:
              <a href="#">
                <img src="@/assets/images/logo-smp.svg" width="67" height="27" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import BaseIcon from './BaseIcon.vue';
import IconLogoFull from './icons/IconLogoFull.vue';
import IconInstagram from './icons/IconInstagram.vue';
import IconFacebook from './icons/IconFacebook.vue';
import IconVk from './icons/IconVk.vue';

export default {
  components: {
    BaseIcon, IconLogoFull, IconInstagram, IconFacebook, IconVk,
  },
};
</script>
