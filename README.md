# Каталог эпизодов Star Wars

### Практическая работа, выполненная в рамках курса «Javascript - продвинутый уровень» от Skillbox.

Это веб-приложение, которое служит каталогом для всех шести эпизодов знаменитой вселенной Star Wars. Вы можете просматривать список эпизодов на главной странице и получать детальную информацию о каждом эпизоде, переходя по соответствующим ссылкам.

#### Функционал:

- Главная страница отображает список всех эпизодов с номерами (где номер эпизода - это порядковый номер фильма в порядке его выпуска) и названиями;каждый элемент списка является ссылкой на детальную страницу эпизода
- Детальная страница эпизода показывает следующую информацию:
  - заголовок с названием эпизода и его episode_id
  - кнопка "Back to episodes" с ссылкой на список всех эпизодов
  - описание открывающей сцены из свойства opening_crawl объекта эпизода
  - список планет, встречающихся в эпизоде, с их названиями (данные о планетах запрашиваются из API с использованием URL из массива planets в объекте эпизода)
  - список рас, встречающихся в эпизоде, с их названиями (данные о расах запрашиваются из API с использованием URL из массива species в объекте эпизода)

#### Стек технологий:

- JavaScript - использован для логики и взаимодействия с DOM
- Bootstrap - использован для стилизации интерфейса
- HTML - разметка страницы

#### Инструкции по установке:

- cкачайте репозиторий с приложением или склонируйте его с помощью команды: `git clone`
- oткройте файл index.html в любом современном веб-браузере

#### Дополнительно:

- приложение асинхронно загружает ресурсы, обеспечивая быструю загрузку и отзывчивость интерфейса
- переходы по ссылкам не вызывают перезагрузку страницы, обеспечивая плавную навигацию между страницами
- пользователи могут использовать кнопки "Назад" и "Вперёд" в браузере для навигации внутри приложения

#### Ссылка на проект

- [посмотреть на GitHub Pages](https://mashamoreva.github.io/star-wars-episodes-catalog/)
