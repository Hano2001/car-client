export async function getAllCars() {
  const response = await fetch(
    "https://gha-gcp-lab-ynorbbawua-lz.a.run.app/cars"
  );
  const cars = await response.json();
  return cars;
}

export async function sendPayments(carId: string) {
  const response = await fetch(
    "https://gcp-lab-ynorbbawua-lz.a.run.app/payments",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ carId: carId, amount: 100 }),
    }
  );
  const payment = await response.json();
  return payment;
}
