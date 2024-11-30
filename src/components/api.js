export async function fetchDogBreeds() {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();
    return Object.keys(data.message); // Отримуємо список порід
  } catch (error) {
    console.error('Error fetching dog breeds:', error);
    return [];
  }
}
