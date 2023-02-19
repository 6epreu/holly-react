import { Article, ArticleContent, ArticleMedia } from '@/components/article'
import { Layout } from '@/components/layout'

export default function FaqsPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="FAQ's">
          <p>Часто задаваемые вопросы</p>
          <details
            className="mt-4 block rounded-sm border px-4 open:border-primary-400 hover:border-primary-300"
            open
          >
            <summary className="-mx-4 cursor-pointer border-primary-200 py-3 px-4">
              Зачем проект?
            </summary>
            <p>
              Вспомните, как часто Вы, находять в другом городе, заходя в какой-нибудь ТЦ не могли понять
              где Вы находитесь или как пройти до нужного Вам отдела?
            </p>
            <p>
              Мы хотим сделать посещение таких заведений более удобное и комфортное! Чтобы не пришлось тратить
              кучу времени для нахождения вашего любимого отдела или полки в супермаркете.
            </p>
          </details>
          <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
            <summary className="-mx-4 cursor-pointer py-3 px-4">
              Для кого этот проект?
            </summary>
            <p>
              Проект предназначен для комнаний в собственности которых находятся здания большой площади
              и которые сталкиваются с проблемой позиционирования посетителей в этом здании
            </p>
          </details>
          <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
            <summary className="-mx-4 cursor-pointer py-3 px-4">
              Как это работает?
            </summary>
            <p>
              В зданиях отсутствует стабильный gps/глонас сигнал. Поэтому, чтобы спозиционировать пользователя/устройство
              необходимо заменить этот сигнал на другой сигнал от маяков расставленных в помещении
            </p>
            <p>
              В качестве маяков используется bluetooth low energy устройства. Маяками необходимо покрыть здание
              по определенным правилам. Далее используя технолгию трилатерации происходит определение местоположения
              устройства
            </p>
          </details>

          <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
            <summary className="-mx-4 cursor-pointer py-3 px-4">
              Как я могу использовать проект?
            </summary>
            <p>
              Для того чтобы начать использовать проект необходимо пройти регистрацию.
              После регистрации необходимо загрузить план помещения в формате dxf и раскидать на нем маяки
              Когда эти действия сделаны, необходимо физически расставить маяки в помещении
              Теперь можно скачать тестовое приложение и попробовать определить свое местоположение :-)
            </p>

          </details>
        </ArticleContent>

        <ArticleMedia>
          <img
            alt="Lorem Picsum"
            className="mx-auto lg:aspect-[5/7] lg:w-full"
            width="420"
            height="640"
            src="https://picsum.photos/420/640?grayscale"
          />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
