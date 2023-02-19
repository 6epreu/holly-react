import { Hero } from '@/components/hero'
import { HeroIllustration } from '@/components/hero-illustration'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Indoor location"
        content="Основная цель проекта - это предоставить возможность построения маршрута для пользователя внутри помещения где сигнал gps/глонас слаб или отсутствует полностью."
        subcontent="Для получения более детальной информации о проекте посмотрите видео функциональных возможностей или заполните форму обратной связи"
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
