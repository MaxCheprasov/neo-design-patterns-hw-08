# Домашнє завдання — Тема 8. Поведінковий патерн Спостерігач (Observer)

Розширення генератора документів із попереднього завдання реактивним шаром на основі патерну Observer.

## Патерн Observer

- **`RenderEventPublisher`** — статичний видавець, зберігає список підписників та оповіщає їх методом `notify(context: RenderContext)` після кожного рендерингу вузла.
- **`RenderEventSubscriber`** — інтерфейс підписника з єдиним методом `update(context)`.
- **Підписники** — реагують на події рендерингу:

| Клас | Що робить |
|---|---|
| `RenderLoggerSubscriber` | Логує кожен відрендерований елемент з його типом і розміром |
| `PerformanceSubscriber` | Накопичує сумарний час рендерингу та виводить статистику |
| `SummaryCollector` | Збирає зведення: кількість секцій, параграфів, списків |

## Як додати нового підписника

1. Створіть клас, що реалізує `RenderEventSubscriber`.
2. Реалізуйте логіку в `update(context: RenderContext)`.
3. Зареєструйте в `main.ts`: `RenderEventPublisher.subscribe(new MySubscriber())`.

## Структура проєкту

```
src/
├── interfaces/
│   ├── DocNode.ts
│   ├── DocRenderer.ts
│   ├── RenderContext.ts
│   └── RenderEventSubscriber.ts
├── nodes/               # Section, Paragraph, List (з нотифікацією)
├── renderers/           # HTML, Markdown, PlainText
├── factories/
│   └── RendererFactory.ts
├── subscribers/
│   ├── RenderLoggerSubscriber.ts
│   ├── PerformanceSubscriber.ts
│   └── SummaryCollector.ts
├── RenderEventPublisher.ts
└── main.ts
```

## Запуск

```bash
npm install
npx ts-node src/main.ts markdown output.md
npx ts-node src/main.ts html
npx ts-node src/main.ts plain
```
