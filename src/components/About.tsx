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
              <span className="about__avatar-initials">ДК</span>
              <div className="about__avatar-ring" aria-hidden="true" />
            </div>
          </div>

          <div className="about__content">
            <p className="about__text">
              Я frontend-разработчик с фокусом на создание интуитивных интерфейсов
              и отличного пользовательского опыта. Люблю чистый код, продуманный
              дизайн и решение сложных задач простыми средствами.
            </p>
            <p className="about__text">
              Работаю с React, TypeScript и современным CSS. В свободное время
              изучаю новые технологии, участвую в open-source и делюсь знаниями
              с сообществом.
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
