export function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section__header">
          <span className="section__label">Обо мне</span>
          <h2 className="section__title">Кто я и чем занимаюсь</h2>
        </div>

        <div className="about__grid">
          <div className="about__visual">
            <div className="about__avatar">
              <span className="about__avatar-initials">ДМ</span>
              <div className="about__avatar-ring" aria-hidden="true" />
            </div>
          </div>

          <div className="about__content">
            <p className="about__text">
              Я - frontend-разработчик с фокусом на создание интуитивных интерфейсов и отличного пользовательского опыта. 
              Стремлюсь к чистоте кода, следую лучшим практикам и постоянно изучаю новые технологии, 
              чтобы создавать продукты, которыми будут пользоваться с удовольствием. 
            </p>
            <p className="about__text">
            Моя цель — превращать дизайн‑макеты в интерактивные веб‑приложения, 
            которые не только выглядят безупречно, но и работают быстро, стабильно и одинаково хорошо на всех устройствах.
            </p>
            <p className="about__text">
              Работаю со всеми лидирующими frontend-фремворками React, Angular, Vue, RX.JS и языками программирования JavaScript, TypeScript и современным CSS. 
              Также использую AI инструменты последних тенденций и вайб-кодинг при необходимости.
            </p>

            <ul className="about__highlights">
              <li>
                <strong>Фокус на UX</strong> — каждый пиксель имеет значение
              </li>
              <li>
                <strong>Чистый код</strong> — читаемость и поддерживаемость
              </li>
              <li>
                <strong>Performance</strong> — быстрая загрузка и плавные анимации
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
