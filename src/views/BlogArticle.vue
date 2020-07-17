<template>
  <div class="article">
    <header class="article-header">
      <picture class="article-header__image">
        <source
          :srcset="require('@/assets/images/blog-article-header-sm.jpg')"
          media="(max-width: 600px)"
          type="image/jpg">
        <b-img-lazy
          src="@/assets/images/blog-article-header.jpg"
          center fluid-grow height="300" />
      </picture>
      <div class="article-header__body">
        <b-container>
          <a class="article-header__back d-lg-none" href="#" @click.prevent="$router.go(-1)">
            <base-icon icon-name="arrow-prev" width="16" height="14" title="Назад">
              <icon-arrow-prev />
            </base-icon>
          </a>
          <div class="article-header__content">
            <div class="article-header__meta">
              <div class="article-header__published">
                <base-icon icon-name="date" width="16" height="17" aria-hidden="true">
                  <icon-date />
                </base-icon>
                <time class="date" datetime="2020-05-12 00:00">12 мая 2020</time>
              </div>
              <div class="article-header__tags tags">
                <a class="btn btn-tag btn-red" href="#">Матч звёзд</a>
                <!-- <a class="btn btn-tag btn-green" href="#">Интервью</a> -->
                <a class="btn btn-tag btn-lightblue" href="#">События</a>
              </div>
            </div>
            <h1 class="article-header__title">
              Профсоюз игроков НБА одобрил план нового сезона
            </h1>
          </div>
        </b-container>
      </div>
    </header>
    <div class="article-body">
      <b-container>
        <b-row>
          <b-col lg="7">
            <div class="article-content">
              <h2 class="article-subtitle" v-html="articleTitle"></h2>
              <p>Национальная баскетбольная ассоциация планирует, что сезон
                2020/21 стартует 1 декабря. Обычно регулярный чемпионат стартует
                в октябре, но из-за пандемии коронавируса календарь пришлось изменить.
                Напомним, ранее руководители лиги согласовали возобновление сезона 2019/20
                с плей-офф, в котором будут участвовать 22 команды.
                Матчи планируется начать 31 июля. Финалы должны завершиться
                не позднее 12 октября.</p>
              <p>Национальная баскетбольная ассоциация планирует, что сезон 2020/21
                стартует 1 декабря. Обычно регулярный чемпионат стартует в октябре,
                но из-за пандемии коронавируса календарь пришлось изменить.</p>
              <swiper class="article-gallery" ref="blog-gallery-1" :options="blogGalleryOptions">
                <swiper-slide>
                  <img class="swiper-lazy" data-src="https://picsum.photos/id/701/680/300" alt="">
                  <div class="swiper-lazy-preloader"></div>
                </swiper-slide>
                <swiper-slide>
                  <img class="swiper-lazy" data-src="https://picsum.photos/id/702/680/300" alt="">
                  <div class="swiper-lazy-preloader"></div>
                </swiper-slide>
                <swiper-slide>
                  <img class="swiper-lazy" data-src="https://picsum.photos/id/703/680/300" alt="">
                  <div class="swiper-lazy-preloader"></div>
                </swiper-slide>
                <swiper-slide>
                  <img class="swiper-lazy" data-src="https://picsum.photos/id/704/680/300" alt="">
                  <div class="swiper-lazy-preloader"></div>
                </swiper-slide>
                <swiper-slide>
                  <img class="swiper-lazy" data-src="https://picsum.photos/id/705/680/300" alt="">
                  <div class="swiper-lazy-preloader"></div>
                </swiper-slide>
                <div class="swiper-pagination d-none d-md-flex" slot="pagination"></div>
                <button type="button" class="swiper-button-prev" slot="button-prev"></button>
                <button type="button" class="swiper-button-next" slot="button-next"></button>
              </swiper>
              <p>Для начала о самом сериале — без сомнения, более подходящего времени
                для выхода документалки про Джордана и «Чикаго» 90-х найти было бы просто
                невозможно.</p>
              <p>Когда весь спорт (да что там спорт — весь мир) оказался на паузе
                из-за коронавируса, а пересматривать очередной матч из далекого или
                не очень прошлого уже не было сил и желания, 10-серийная история о лучшем
                баскетболисте современности стала настоящей отдушиной для замершего
                в коронадепрессии</p>
            </div>
          </b-col>
          <b-col lg="4" xl="3" offset-lg="1" offset-xl="2" class="d-none d-lg-block">
            <aside class="article-side">
              <div class="related-article">
                <figure class="related-article__image">
                  <a href="#"><img class="img-fluid" src="https://picsum.photos/id/101/280/180" width="280" height="180" alt=""></a>
                </figure>
                <div class="related-article__title">
                  <a href="#">«Химки» продлили контракт со Шведом</a>
                </div>
                <div class="related-article__excerpt">
                  «Химки» согласовали с защитником Алексеем Шведом новый контракт.
                </div>
              </div>
              <div class="related-article">
                <figure class="related-article__image">
                  <a href="#"><img class="img-fluid" src="https://picsum.photos/id/102/280/180" width="280" height="180" alt=""></a>
                </figure>
                <div class="related-article__title">
                  <a href="#">Олдридж пропустит остаток сезона</a>
                </div>
                <div class="related-article__excerpt">
                  Форвард «Сан-Антонио» Ламаркус Олдридж пропустит остаток сезона
                </div>
              </div>
            </aside>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue';
import IconDate from '@/components/icons/IconDate.vue';
import IconArrowPrev from '@/components/icons/IconArrowPrev.vue';

export default {
  name: 'BlogArticle',

  components: {
    BaseIcon, IconDate, IconArrowPrev,
  },

  data() {
    return {
      articleTitle: 'Матчи планируется начать 31 июля в&nbsp;спорткомплексе развлекательного парка в&nbsp;Орландо',
      blogGalleryOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        },
        lazy: true,
      },
    };
  },

  metaInfo: {
    title: 'Статья',
  },
};
</script>
