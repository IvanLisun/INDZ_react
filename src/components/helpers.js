const counters = {}; // Об'єкт для збереження лічильників для кожного префікса

function getId(prefix = 'key') {
  if (!counters[prefix]) {
    counters[prefix] = 0; // Ініціалізуємо лічильник для нового префікса
  }
  counters[prefix] += 1; // Збільшуємо лічильник
  return `${prefix}_${counters[prefix]}`; // Повертаємо унікальне значення
}

export default getId;