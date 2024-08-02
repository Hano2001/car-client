import { GetAllCars } from "@/actions";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default async function Home() {
  const cars = await GetAllCars();
  console.log({ cars });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Option Two</Label>
          </div>
        </RadioGroup>
        <Button>¡BUY!</Button>
      </section>
    </main>
  );
}
