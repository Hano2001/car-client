import { GetAllCars } from "@/actions";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Car = { id: string; status: string };

export default async function Home() {
  const cars: Car[] = await GetAllCars();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <RadioGroup defaultValue="option-one">
          {cars.map((car) => {
            return car.status == "available" ? (
              <div className="flex items-center space-x-2" key={car.id}>
                <RadioGroupItem value="option-two" id={car.id} />
                <Label htmlFor="option-two">{car.status}</Label>
              </div>
            ) : (
              <></>
            );
          })}
        </RadioGroup>
        <Button>¡BUY!</Button>
      </section>
    </main>
  );
}
