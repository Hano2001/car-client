import { getAllCars } from "@/actions";
import CarForm from "./_components/car-form";

export type Car = { id: string; status: string };

export default async function Home() {
  const cars: Car[] = await getAllCars();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <CarForm cars={cars} />
      </section>
    </main>
  );
}
