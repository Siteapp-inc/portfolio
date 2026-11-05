/* Language, project filter, and mobile menu for the portfolio page. */
(function () {
  var ru = {
    "skip": "К содержанию",
    "nav.work": "Работы",
    "nav.ledger": "Проекты",
    "nav.skills": "Навыки",
    "nav.about": "Обо мне",
    "nav.contact": "Контакт",
    "aria.lang": "Язык",
    "aria.nav": "Разделы",
    "aria.filters": "Фильтр по платформе",
    "aria.years": "Годы",
    "hero.kicker": "Портфолио",
    "hero.role": "Middle Front-end разработчик",
    "hero.lead": "Делаю интерфейсы магазинов и продуктов с 2019 года. Magento 2, Shopware 6, React, Laravel и Symfony: от макета в Figma до каталога, карточки, корзины, чекаута и личного кабинета.",
    "hero.cta.work": "Смотреть работы",
    "hero.cta.contact": "Написать",
    "hero.stat1": "старт в коммерции",
    "hero.stat2": "проектов в CV",
    "hero.stat3.value": "Витрины",
    "hero.stat3": "и продуктовые интерфейсы",
    "now.kicker": "Сейчас",
    "now.summary": "CMS, которая сопоставляет клиентов и сотрудников.",
    "now.i1": "Мэтчинг клиентов и сотрудников",
    "now.i2": "Приложения клиентов и бебиситтеров",
    "now.i3": "Дашборд",
    "now.i4": "Доски этапов",
    "work.kicker": "01 — Работы",
    "work.title": "Избранные работы",
    "work.lead": "Пять витрин на Magento. Полный список из CV — ниже.",
    "p.frame.shot": "Главная за декабрь 2024. Сейчас frameworthy.com открывает другой сайт.",
    "ledger.kicker": "02 — Проекты",
    "ledger.title": "Все проекты",
    "ledger.lead": "Всё, что перечислено в CV, от новых к ранним. Фильтр по платформе.",
    "ledger.empty": "В этой категории ничего нет.",
    "filter.all": "Все",
    "filter.magento": "Magento",
    "filter.shopware": "Shopware",
    "filter.react": "React",
    "filter.symfony": "Symfony",
    "filter.laravel": "Laravel",
    "filter.wordpress": "WordPress",
    "filter.other": "Другое",
    "skills.kicker": "03 — Навыки",
    "skills.title": "Стек",
    "skills.lead": "Как в CV, без оценок уровня по каждому инструменту.",
    "skills.frontend": "Frontend",
    "skills.php": "PHP",
    "skills.platforms": "Платформы",
    "skills.tools": "Инструменты",
    "skills.practice": "Практика",
    "about.kicker": "04 — Профиль",
    "about.title": "Обо мне",
    "about.profile": "Middle front-end разработчик из Беларуси. С 2019 года — коммерческие проекты: интернет-магазины и продуктовые интерфейсы, около 29 позиций в CV для клиентов из Европы и США. Основной фокус — Magento 2 (Hyvä, Luma, Porto) и Shopware 6, также WordPress, Symfony, Laravel и Yii2. Адаптивные темы по Figma и Adobe XD: каталог, товар, корзина, чекаут, кабинет, контент и транзакционные письма; на витринах часто PageSpeed. Продуктовый front-end: сейчас Solidum Sverige AB — React-приложения мэтчинга, дашборд и доски этапов; ранее HRM на Laravel и сайт агентства с админкой на React. HTML, CSS (Tailwind, LESS, Sass), JavaScript и TypeScript (React, Vue, Alpine.js, jQuery, Knockout) и PHP. Git, Jira, Asana, Scrum и Kanban. Ищу роль front-end на витрину e-commerce или продуктовый интерфейс.",
    "about.how": "Как работаю",
    "about.h1": "От макета к теме: Figma и Adobe XD, адаптивная вёрстка.",
    "about.h2": "Сценарий магазина: каталог, товар, корзина, чекаут, кабинет и письма.",
    "about.h3": "В процессе: Git, Jira, Asana, Scrum и Kanban. На витринах часто закрывал задачи по PageSpeed.",
    "about.languages": "Языки",
    "about.education": "Образование",
    "about.edu.school": "Минский инновационный университет",
    "about.edu.years": "2010–2015",
    "lang.ru": "Русский — родной",
    "lang.en": "Английский — A1",
    "lang.pl": "Польский — A2",
    "contact.kicker": "05 — Контакт",
    "contact.title": "Связаться",
    "contact.lead": "Если нужен front-end на витрину или продуктовый интерфейс — напишите.",
    "contact.email": "Почта",
    "contact.phone": "Телефон",
    "contact.linkedin": "LinkedIn",
    "contact.location": "Где",
    "contact.location.value": "Беларусь",
    "footer.role": "Middle Front-end разработчик",
    "d.solidum": "сен 2026 — сейчас",
    "d.magedia": "июн 2026 — авг 2026",
    "d.s3": "фев 2026 — май 2026",
    "d.lbb": "ноя 2025 — янв 2026",
    "d.lb": "июн 2025 — окт 2025",
    "d.antaios": "мар 2025 — май 2025",
    "d.anomis": "дек 2024 — фев 2025",
    "d.solar": "сен 2024 — ноя 2024",
    "d.savont": "июн 2024 — авг 2024",
    "d.frame": "дек 2023 — май 2024",
    "d.legion": "июл 2023 — ноя 2023",
    "d.martha": "фев 2023 — июн 2023",
    "d.lola": "окт 2022 — янв 2023",
    "d.bird": "июн 2022 — сен 2022",
    "d.smoke": "фев 2022 — май 2022",
    "d.flat": "окт 2021 — янв 2022",
    "d.baby": "июн 2021 — сен 2021",
    "d.bbt": "мар 2021 — май 2021",
    "d.brigadi": "2021",
    "d.qandid": "дек 2020 — фев 2021",
    "d.loyal": "сен 2020 — ноя 2020",
    "d.wines": "июн 2020 — авг 2020",
    "d.andersons": "мар 2020 — май 2020",
    "d.babasafe": "2020",
    "d.lucrin": "дек 2019 — фев 2020",
    "d.extreme": "сен 2019 — ноя 2019",
    "d.bloom": "июн 2019 — авг 2019",
    "d.herbano": "апр 2019 — май 2019",
    "d.beauty": "янв 2019 — мар 2019",
    "p.solidum": "Фронтенд CMS, которая сопоставляет клиентов и сотрудников. React-приложения: мэтчинг, клиенты, бебиситтеры, дашборд и доски этапов. Интерфейс на английском и шведском. MUI, Redux, TypeScript, Smarty, Bootstrap, Chart.js, PHP и MySQL.",
    "p.magedia": "Сайт агентства и админка: главная, блог, вакансии, истории успеха, мобильные игры и контакты. Tailwind, shadcn/Radix, React Router, TanStack Query, TinyMCE, API на Express и MySQL.",
    "p.s3": "HRM. Вход, каркас админки, справочник, экраны табеля и целей, графики. Blade, Bootstrap, jQuery, Chart.js, Laravel Mix, PHP 8.4, MySQL, Docker и Nginx.",
    "p.lbb": "Кастомная тема блога: шапка, подвал, список и страница записи, в одной линии с витриной. PHP, CSS, JavaScript, Bootstrap и Slick.",
    "p.lb": "Витрина косметики на дочерней теме Porto. Каталог, конфигурируемые товары, свотчи, чекаут, мегаменю, кабинет, письма и Page Builder. LESS, KnockoutJS и jQuery.",
    "p.antaios": "Тема магазина изданий. Страницы кабинета, клиента, о компании и контактов по Figma. Адаптив и PageSpeed. jQuery и Bootstrap 5.",
    "p.anomis": "Тема магазина пищевых добавок. Кабинет и контентные страницы по Figma. jQuery, Bootstrap 5 и PageSpeed.",
    "p.solar": "Тема магазина профессионального оборудования. Кабинет и контентные страницы по Figma. jQuery, Bootstrap 5 и PageSpeed.",
    "p.savont": "Тема магазина оборудования для ванных. Кабинет и контентные страницы по Figma. jQuery, Bootstrap 5 и PageSpeed.",
    "p.frame": "Магазин арт-принтов. Мультиязычная тема Hyvä, транзакционные письма, каталог, товар, корзина и чекаут по Figma. Alpine.js, Tailwind и PageSpeed.",
    "p.legion": "Витрина защитного снаряжения. Главная, каталог, навигация, новости, спортивные вкладки, анимация в Page Builder. LESS, RequireJS, Owl Carousel и jQuery.",
    "p.martha": "Садовый магазин, дочерняя тема ThemeWare Clean. SCSS витрины, превью варианта, блог, модалка рассылки и согласие на cookie. Shopware 6.6.",
    "p.lola": "Платформа видеоклипов. Целиком лейаут, шапка, модалки, контролы форм и отправка данных на сервер. Адаптивная тема по Figma. jQuery и Bootstrap 4.",
    "p.bird": "Интерфейс управления персоналом. Лейаут, шапка, модалки, селекты и инпуты, отправка данных на сервер. Адаптивная тема по Figma. jQuery и Bootstrap 5.",
    "p.smoke": "Магазин электронных сигарет. Тема Hyvä, каталог, товар, корзина и чекаут по Figma. Alpine.js, Tailwind и PageSpeed.",
    "p.flat": "Аренда квартир и коттеджей. Страницы списка и кабинета, слайдер, календарь бронирования, фильтры и модальные формы по Figma. jQuery и Bootstrap 5.",
    "p.baby": "Витрина по Adobe XD: каталог, шапка, подвал, меню кабинета, выбор анимации, календарь событий, мультиязычность, бесконечный lazy-loading и PageSpeed.",
    "p.bbt": "Магазин офисного оборудования. Кабинет, о компании и контакты по Figma. jQuery, Bootstrap 5 и PageSpeed.",
    "p.brigadi": "В CV указан за 2021 год, без стека и без описания работ.",
    "p.qandid": "Услуги трейдлайна. Тема писем, каталог, товар, корзина и чекаут по Figma. Alpine.js, Tailwind и Docker.",
    "p.loyal": "Мультиязычная тема, шаблоны писем, каталог, товар, корзина и чекаут по Figma. jQuery, Bootstrap 5 и KnockoutJS.",
    "p.wines": "Витрина по Figma: каталог, шапка, подвал, меню кабинета, бесконечный lazy-loading и PageSpeed.",
    "p.andersons": "Тема по Figma: каталог, шапка, подвал, меню кабинета, бесконечный lazy-loading и PageSpeed. Tailwind, Alpine.js, Git и Asana.",
    "p.babasafe": "Magento 2. В CV указан без подробного состава работ.",
    "p.lucrin": "Магазин изделий из кожи на заказ. Мультиязычная тема Hyvä, шаблоны писем, путь от каталога до чекаута по Figma. Alpine.js и Tailwind.",
    "p.extreme": "Магазин спорттоваров. Тема писем, путь от каталога до чекаута, тема Hyvä по Figma. jQuery, Bootstrap 5 и KnockoutJS.",
    "p.bloom": "Доставка цветов в Лос-Анджелесе. Тема Luma, каталог, товар, корзина и чекаут по Figma. jQuery, Bootstrap 5 и KnockoutJS.",
    "p.herbano": "Магазин оборудования для здорового питания. Мультиязычная тема Hyvä, шаблоны писем, путь от каталога до чекаута по Figma. Alpine.js, Tailwind и KnockoutJS.",
    "p.beauty": "Фулстек. Интернет-магазин на OkayCMS. Интеграция UPS API и автоматический расчёт доставки по весу и габаритам. PHP, jQuery, Bootstrap 4 и MySQL."
  };

  var meta = {
    en: {
      title: "Aliaksandr Kavaliou — Front-end Developer",
      description: "Middle front-end developer since 2019. Magento 2, Shopware 6, React, Laravel, and Symfony. Portfolio of storefronts and product UI."
    },
    ru: {
      title: "Aliaksandr Kavaliou — Front-end разработчик",
      description: "Middle front-end разработчик с 2019 года. Magento 2, Shopware 6, React, Laravel и Symfony. Портфолио витрин и продуктовых интерфейсов."
    }
  };

  var originals = new WeakMap();
  var ariaOriginals = new WeakMap();
  var lang = "en";
  var filter = "all";
  var filters = ["all", "magento", "shopware", "react", "symfony", "laravel", "wordpress", "other"];

  var header = document.querySelector(".site-header");
  var nav = document.querySelector(".site-nav");
  var toggle = document.querySelector(".nav-toggle");
  var menuLabel = document.querySelector("#menu-label");
  var description = document.querySelector('meta[name="description"]');
  var countNode = document.querySelector("[data-count]");
  var countLabel = document.querySelector("[data-count-label]");
  var emptyNote = document.querySelector(".ledger-empty");

  function initialLang() {
    try {
      var saved = localStorage.getItem("portfolio-lang");
      if (saved === "ru" || saved === "en") return saved;
    } catch (error) {
      return "en";
    }
    var browser = (navigator.language || "").toLowerCase();
    return browser.indexOf("ru") === 0 ? "ru" : "en";
  }

  function projectsLabel(count, current) {
    if (current === "en") return count === 1 ? "project" : "projects";
    var n10 = count % 10;
    var n100 = count % 100;
    if (n10 === 1 && n100 !== 11) return "проект";
    if (n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14)) return "проекта";
    return "проектов";
  }

  function menuText(current, open) {
    if (current === "ru") return open ? "Закрыть" : "Меню";
    return open ? "Close" : "Menu";
  }

  function applyLang(next) {
    lang = next === "ru" ? "ru" : "en";
    document.documentElement.lang = lang;
    document.title = meta[lang].title;
    if (description) description.setAttribute("content", meta[lang].description);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      if (!originals.has(el)) originals.set(el, el.textContent);
      var key = el.getAttribute("data-i18n");
      el.textContent = lang === "ru" && ru[key] ? ru[key] : originals.get(el);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      if (!ariaOriginals.has(el)) ariaOriginals.set(el, el.getAttribute("aria-label") || "");
      var key = el.getAttribute("data-i18n-aria");
      el.setAttribute("aria-label", lang === "ru" && ru[key] ? ru[key] : ariaOriginals.get(el));
    });

    document.querySelectorAll("[data-lang-toggle]").forEach(function (button) {
      button.setAttribute("aria-pressed", button.getAttribute("data-lang-toggle") === lang ? "true" : "false");
    });

    if (menuLabel && toggle) {
      menuLabel.textContent = menuText(lang, toggle.getAttribute("aria-expanded") === "true");
    }

    updateCountLabel();

    try {
      localStorage.setItem("portfolio-lang", lang);
    } catch (error) {
      return;
    }
  }

  function updateCountLabel() {
    if (!countNode || !countLabel) return;
    countLabel.textContent = projectsLabel(Number(countNode.textContent), lang);
  }

  function syncYearLabels() {
    document.querySelectorAll(".year-label").forEach(function (label) {
      var any = false;
      var node = label.nextElementSibling;
      while (node && !node.classList.contains("year-label")) {
        if (node.classList.contains("ledger-row") && !node.hidden) any = true;
        node = node.nextElementSibling;
      }
      label.hidden = !any;
      var link = document.querySelector('.year-nav a[href="#' + label.id + '"]');
      if (link) link.hidden = !any;
    });
  }

  function applyFilter(name) {
    filter = filters.indexOf(name) === -1 ? "all" : name;
    var visible = 0;

    document.querySelectorAll(".ledger-row").forEach(function (row) {
      var tags = (row.getAttribute("data-tags") || "").split(/\s+/);
      var show = filter === "all" || tags.indexOf(filter) !== -1;
      row.hidden = !show;
      if (show) visible += 1;
    });

    document.querySelectorAll(".filter-bar button").forEach(function (button) {
      button.setAttribute("aria-pressed", button.getAttribute("data-filter") === filter ? "true" : "false");
    });

    if (countNode) countNode.textContent = String(visible);
    updateCountLabel();
    if (emptyNote) emptyNote.hidden = visible !== 0;
    syncYearLabels();

    try {
      var url = new URL(window.location.href);
      if (filter === "all") url.searchParams.delete("stack");
      else url.searchParams.set("stack", filter);
      history.replaceState(null, "", url);
    } catch (error) {
      return;
    }
  }

  function setMenu(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (menuLabel) menuLabel.textContent = menuText(lang, open);
  }

  document.querySelectorAll("[data-lang-toggle]").forEach(function (button) {
    button.addEventListener("click", function () {
      applyLang(button.getAttribute("data-lang-toggle"));
    });
  });

  var filterBar = document.querySelector(".filter-bar");
  if (filterBar) {
    filterBar.addEventListener("click", function (event) {
      var button = event.target.closest("button[data-filter]");
      if (!button) return;
      applyFilter(button.getAttribute("data-filter"));
    });
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
  }

  if (nav) {
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setMenu(false);
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 760) setMenu(false);
  });

  window.addEventListener("scroll", function () {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  }, { passive: true });

  var links = Array.prototype.slice.call(document.querySelectorAll(".site-nav a"));
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          var current = link.getAttribute("href") === "#" + entry.target.id;
          if (current) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    links.forEach(function (link) {
      var section = document.querySelector(link.getAttribute("href"));
      if (section) observer.observe(section);
    });
  }

  applyLang(initialLang());
  applyFilter(new URL(window.location.href).searchParams.get("stack") || "all");
})();
