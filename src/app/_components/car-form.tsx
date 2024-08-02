"use client";

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Car } from "../page";
import { useForm } from "react-hook-form";
import { sendPayments } from "@/actions";
import { Label } from "@/components/ui/label";

type Props = {
  cars: Car[];
};

export default function CarForm({ cars }: Props) {
  const { handleSubmit, register } = useForm<{ carId: string }>();
  function submitHandler(data: any) {
    sendPayments(data.carId);
  }
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <RadioGroup defaultValue="">
        {cars.map((car) => {
          return (
            car.status == "available" && (
              <div key={car.id}>
                <RadioGroupItem
                  value={car.id}
                  id={car.id}
                  {...register("carId")}
                />
                <Label htmlFor="option-two">{car.id}</Label>
              </div>
            )
          );
        })}

        <Button type="submit">¡BUY!</Button>
      </RadioGroup>
    </form>
  );
}
