# Домашнее задание к лекции «Unit-тестирование»

**Важно**: каждая задача выполняется в виде отдельного проекта с собственным GitHub репозиторием.

**Важно**: ESLint не должен выдавать ошибок.

**Важно**: Jest должен обеспечивать 100% покрытие по строкам для тестируемых вами функций.

**Важно**: Ко всем задачам должен быть подключен Appveyor и выставлен бейджик статуса.

**Важно**: используйте `import`/`export` а не `require`.

В качестве шаблона вы можете использовать [готовый проект](/ci-template).

В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе вставьте ссылки на ваш GitHub-проекты.

## Описание установки

```shell
npm init
# При инициалиализации в качестве тестовой команды указать:
# test command: jest --coverage
npm install --save-dev jest babel-jest @babel/core @babel/cli @babel/preset-env
npm install core-js@3
```

Не забудьте про `babel.config.json` и `.browserslistrc`.

В `babel.config.json`:
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "corejs": "3.22"
      }
    ]
  ]
}
```

Запуск тестов:
```shell
npm test
```

---

## Чистые функции

### Легенда

Во время игры вам необходимо будет отображать полоску жизни над игровым персонажем. Для сигнализации пользователю вы решили ввести цветовую индикацию:
1. Здоровье более 50 - зелёный;
1. Здоровье от 50 и до 15 - жёлтый;
1. Менее 15 - красный.

### Описание

Реализуйте функцию, которая на вход принимает объект вида:
```javascript
{name: 'Маг', health: 90}
```
И возвращает ответ в виде одной из строк: `healthy`, `wounded`, `critical`

Сгенерируйте проект на базе `npm`. Подключите туда `jest` и напишите авто-тесты, которые обеспечивают 100% покрытие вашей функции по строкам.

Убедитесь, что вы обеспечили 100% покрытие тестами.

---

## Matchers

### Легенда

Поскольку в рамках игры вы можете управлять несколькими героями, то во время "битвы" неплохо бы отображать уровень жизни, оставшейся у каждого героя в отсортированном порядке (наверху - самые здоровые). Необходимо сделать это и написать соответствующие авто-тесты.

### Описание

Дан массив с информацией о героях, например:
```javascript
[
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]
```
В отсортированном порядке должно выглядеть следующим образом:
```javascript
[
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
]
```

Убедитесь, что `toBe` работать не будет, но будет работать `toEqual`. Изучите документацию на [`toBe`]() и [`toEqual`]() и выясните в чём разница (а так же термин Deep Equality). Убедитесь, что вы обеспечили 100% покрытие тестами по строкам.

Вы можете дополнительно изучить список доступных "матчер" (список приведён на странице [Документация по expect](https://jestjs.io/docs/ru/expect)), для организации сравнения.

---