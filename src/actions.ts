export async function GetAllCars() {
  const response = await fetch(
    "https://gha-gcp-lab-ynorbbawua-lz.a.run.app/cars"
  );
  const cars = await response.json();
  return cars;
}
