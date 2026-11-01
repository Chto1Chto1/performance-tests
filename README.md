# Performance Tests (ЛР5)

Нагрузочное тестирование публичного API `https://test-api.k6.io` с помощью k6.

## Сценарии
- `perf/load.js` — плавный рост до 50 VU, удержание 3 минуты, спад.
- `perf/stress.js` — рост до 300 VU (×6 от нормы), поиск точки деградации.

## Запуск
```bash
k6 run perf/load.js
k6 run perf/stress.js