<template>
  <b-container>
    <b-row class="listing-container">
      <b-col lg="9">
        <b-tabs
          pills
          lazy
          nav-class="listing-filter"
          nav-wrapper-class="listing-filter-container"
          active-tab-class="selected">
          <b-tab title="Все" title-link-class="btn-primary" active>
            <div class="articles-list">
              <div class="articles-item">
                <div class="articles-item__image">
                  <b-img-lazy
                    src="https://picsum.photos/id/701/384/226"
                    alt="Движение Вверх: Публикуем новый фирменний стиль"
                    role="presentation"
                    fluid-grow />
                  <router-link class="articles-item__link" to="/blog/article"
                    aria-label="Движение Вверх: Публикуем новый фирменний стиль"></router-link>
                </div>
                <div class="articles-item__body">
                  <div class="articles-item__head">
                    <div class="articles-item__published">
                      <base-icon icon-name="date" width="16" height="17" aria-hidden="true">
                        <icon-date />
                      </base-icon>
                      <time class="date" datetime="">4 дня назад</time>
                    </div>
                    <h2 class="articles-item__title">
                      <router-link to="/blog/article">
                        Движение Вверх: Публикуем новый фирменный стиль
                      </router-link>
                    </h2>
                  </div>
                  <div class="articles-item__excerpt">
                    Заставил ли легендарный баскетболист своего пилота пойти
                    на «неоправданный риск». Заставил ли легендарный баскетболист
                    своего пилота пойти...
                  </div>
                  <div class="articles-item__tags tags">
                    <a class="btn btn-tag btn-red" href="#">Матч звёзд</a>
                    <a class="btn btn-tag btn-lightblue" href="#">События</a>
                  </div>
                </div>
              </div>
              <div class="articles-item">
                <div class="articles-item__image">
                  <b-img-lazy
                    src="https://picsum.photos/id/702/384/226"
                    alt="Время расцвета трио Слоун — Стоктон — Мэллоун"
                    role="presentation"
                    fluid-grow />
                  <router-link class="articles-item__link" to="/blog/article"
                    aria-label="Время расцвета трио Слоун — Стоктон — Мэллоун"></router-link>
                </div>
                <div class="articles-item__body">
                  <div class="articles-item__head">
                    <div class="articles-item__published">
                      <base-icon icon-name="date" width="16" height="17" aria-hidden="true">
                        <icon-date />
                      </base-icon>
                      <time class="date" datetime="">02 мая 2020</time>
                    </div>
                    <h2 class="articles-item__title">
                      <router-link to="/blog/article">
                        Время расцвета трио Слоун — Стоктон — Мэллоун
                      </router-link>
                    </h2>
                  </div>
                  <div class="articles-item__excerpt">
                    Золотая эра в истории «Джаз».
                    Команда 16 сезонов подряд выходила в плей-офф,
                    и, возможно, была достойна большего,
                    чем всего два финала на закате карьеры...
                  </div>
                  <div class="articles-item__tags tags">
                    <a class="btn btn-tag btn-green" href="#">Интервью</a>
                    <a class="btn btn-tag btn-orange" href="#">Медиа</a>
                  </div>
                </div>
              </div>
              <div class="articles-item">
                <div class="articles-item__image">
                  <b-img-lazy
                    src="https://picsum.photos/id/701/384/226"
                    alt="Центровой Чаварс стал игроком «Цмоки-Минска»"
                    role="presentation"
                    fluid-grow />
                  <router-link class="articles-item__link" to="/blog/article"
                    aria-label="Центровой Чаварс стал игроком «Цмоки-Минска»"></router-link>
                </div>
                <div class="articles-item__body">
                  <div class="articles-item__head">
                    <div class="articles-item__published">
                      <base-icon icon-name="date" width="16" height="17" aria-hidden="true">
                        <icon-date />
                      </base-icon>
                      <time class="date" datetime="">24 апреля 2020</time>
                    </div>
                    <h2 class="articles-item__title">
                      <router-link to="/blog/article">
                        Центровой Чаварс стал игроком «Цмоки-Минска»
                      </router-link>
                    </h2>
                  </div>
                  <div class="articles-item__excerpt">
                    Сезон-2019/20 Чаварс провел в «Вентспилсе».
                    Его средние показатели в Кубке ФИБА-Европа — 11,3 очка,
                    7,4 подбора, 2,3 блок-шота за 21 минуту на площадке.
                  </div>
                  <div class="articles-item__tags tags">
                    <a class="btn btn-tag btn-lightblue" href="#">События</a>
                  </div>
                </div>
              </div>
              <div class="articles-item">
                <div class="articles-item__image">
                  <b-img-lazy
                    src="https://picsum.photos/id/701/384/226"
                    alt="НБА пожертвовала восемью аутсайдерами"
                    role="presentation"
                    fluid-grow />
                  <router-link class="articles-item__link" to="/blog/article"
                    aria-label="НБА пожертвовала восемью аутсайдерами"></router-link>
                </div>
                <div class="articles-item__body">
                  <div class="articles-item__head">
                    <div class="articles-item__published">
                      <base-icon icon-name="date" width="16" height="17" aria-hidden="true">
                        <icon-date />
                      </base-icon>
                      <time class="date" datetime="">5 апреля 2020</time>
                    </div>
                    <h2 class="articles-item__title">
                      <router-link class="articles-item__link" to="/blog/article">
                        НБА пожертвовала восемью аутсайдерами
                      </router-link>
                    </h2>
                  </div>
                  <div class="articles-item__excerpt">
                    Совет управляющих НБА утвердил проект завершения
                    сезона-2019/2020, который был прерван 11 марта из-за пандемии
                    и положительных тестов на вирус...
                  </div>
                  <div class="articles-item__tags tags">
                    <a class="btn btn-tag btn-red" href="#">Матч звёзд</a>
                    <a class="btn btn-tag btn-green" href="#">Интервью</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center">
              <b-button variant="outline-poloblue" class="btn-more">Показать ещё</b-button>
            </div>
          </b-tab>
          <b-tab title="Матч звёзд" title-link-class="btn-red">
            <p>Матч звёзд</p>
          </b-tab>
          <b-tab title="Интервью" title-link-class="btn-green">
            <p>Интервью</p>
          </b-tab>
          <b-tab title="События" title-link-class="btn-lightblue">
            <p>События</p>
          </b-tab>
          <b-tab title="Медиа" title-link-class="btn-orange">
            <p>Медиа</p>
          </b-tab>
        </b-tabs>
      </b-col>
      <b-col lg="3" class="d-none d-lg-block">
        <div class="listing-dates">
          <label class="sr-only" for="datepicker">Выбрать даты:</label>
          <b-form-datepicker id="datepicker" locale="ru" button-only right
            label-no-date-selected="Даты не выбраны"
            label-help="Используйте клавиши управления курсором для навигации">
            <template v-slot:button-content>
              Выбрать даты
              <span class="caret"></span>
            </template>
          </b-form-datepicker>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue';
import IconDate from '@/components/icons/IconDate.vue';

export default {
  name: 'Blog',

  components: {
    BaseIcon, IconDate,
  },

  metaInfo: {
    title: 'Блог',
  },
};
</script>
